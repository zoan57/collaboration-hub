import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  query,
  where,
  limit,
  arrayUnion,
} from "firebase/firestore";
import TruncateText from "../components/TruncateText";
import { FormatLastTime } from "../components/FormatLastTime";

const SubmitIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      class="bi bi-arrow-up-circle message-send-icon"
      viewBox="0 0 16 16"
    >
      {" "}
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      />{" "}
    </svg>
  );
};
const ChatBox = () => {
  const navigate = useNavigate();
  const [showMessages, setShowMessages] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState("");
  const [receiverID, setReceiverID] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [chats, setChats] = useState([]);
  const [chatID, setChatID] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const bottomListRef = useRef();
  // User Redirect
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      navigate("/login");
    } else {
      setCurrentUser(user.uid);
    }
  }, [user, loading]);
  useEffect(() => {
    bottomListRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //If input new message
  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      const msgRef = doc(db, "Message", chatID);
      const chatsRef = doc(db, "ChatBox", chatID);
      const msgDoc = await getDoc(msgRef);
      if (msgDoc.exists()) {
        const msgData = msgDoc.data();
        const msgPayload = {
          messageText: trimmedMessage,
          senderID: currentUser,
          sendAt: Date.now(),
        };
        const updatedMessages = [...msgData.messages, msgPayload];
        await updateDoc(msgRef, { messages: updatedMessages });
        await updateDoc(chatsRef, {
          lastAt: Date.now(),
          lastMessage: trimmedMessage,
        });
        // Update the chats state with the new last message and last message time
        const updatedChats = chats.map((chat) => {
          if (chat.id === chatID) {
            return {
              ...chat,
              lastAt: Date.now(),
              lastMessage: trimmedMessage,
            };
          } else {
            return chat;
          }
        });
        setChats(updatedChats);
        setMessages(updatedMessages);
      }
      setNewMessage("");
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Select a certain chat
  const handleOnChatClick = async (chatID) => {
    setShowMessages(true);
    const messageRef = doc(db, "Message", chatID.id);
    const messageSnapshot = await getDoc(messageRef);
    const messageData = messageSnapshot.data().messages;
    setMessages(messageData);
    setChatID(chatID.id);
  };

  //To get the chat lists
  const getChats = async (e) => {
    const chatBoxRef = collection(db, "ChatBox");
    const chatBoxQuery = query(
      chatBoxRef,
      where("users", "array-contains", currentUser)
    );
    const chatsQuery = await getDocs(chatBoxQuery);
    const chatsData = chatsQuery.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setChats(chatsData);
  };
  useEffect(() => {
    getChats();
  }, [currentUser]);

  return (
    <div>
      <div className="messagebox">
        <div className="chatbox-list">
          {chats
            ?.sort((first, second) =>
              first?.lastAt <= second?.lastAt ? 1 : -1
            )
            .map((chat, index) => (
              <div
                className="chatbox"
                key={index}
                onClick={() => {
                  handleOnChatClick(chat);
                  setReceiverName(
                    chat.usernames.find((username) => username !== currentUser)
                  );
                  setReceiverID(
                    chat.users.find((user) => user !== currentUser)
                  );
                }}
              >
                <h5>
                  {chat.usernames.find((username) => username !== currentUser)}
                </h5>
                <br />
                <span>
                  <TruncateText maxLength="40" text={chat.lastMessage} />
                </span>
              </div>
            ))}
        </div>
        <div className="message-list">
          <Link to={`/profile/${receiverID}`}>
            <div className="msg-receiverName">{receiverName}</div>
          </Link>
          <div className="messages">
            {showMessages &&
              messages.map((msg, index) => (
                <div
                  className={`${
                    msg.senderID === currentUser ? "msg-sender" : "msg-receiver"
                  }`}
                  key={index}
                >
                  <div className="msg-txt">
                    <span>{msg.messageText}</span>
                  </div>
                  <time>
                    <FormatLastTime date={msg.sendAt} />
                  </time>
                </div>
              ))}
            <div ref={bottomListRef}></div>
          </div>
          <div className="message-input">
            <form onSubmit={handleOnSubmit}>
              <input
                placeholder="Type your messages here."
                maxLength="200"
                name="newMessage"
                value={newMessage}
                onChange={handleOnChange}
                className="message-input-bar"
                disabled={!chatID}
                autocomplete="off"
              />
              <button
                className="message-send-btn"
                type="submit"
                disabled={!newMessage}
              >
                <SubmitIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
