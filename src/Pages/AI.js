import React, { useState, useEffect, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import { SendIcon } from "../components/ui/Icons";

const AI = () => {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");
  const OPENAI_API_KEY = process.env.openAIAPI;
  const replyRef = useRef();

  const fetchOpenAI = async (input) => {
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    try {
      const { data } = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `"I'm looking for ideas on ${input}, give a fresh inspiration in one sentence.`,
        temperature: 1,
        max_tokens: 100,
      });
      console.log(data);
      return data.choices[0].text;
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (OPENAI_API_KEY && input) {
        const replyFromAI = await fetchOpenAI(input);
        setCompletedSentence(replyFromAI);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ai">
      <div className="ai-title">
        <img
          src="/images/logo-sm.svg"
          className="logo-shift logo-sm"
          id="ai-img"
        ></img>
        <span>Hey! Need some cool ideas? Let me do it for you 😉</span>
      </div>
      <form className="ai-inputbar" onSubmit={handleClick}>
        <input
          className="inputbar-long dec-txt"
          placeholder="Enter the topic you want to be inspired!"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="ai-send-btn">
          <SendIcon width="30" height="30" />
        </button>
      </form>
      {completedSentence && (
        <div className="ai-reply-bar">{completedSentence}</div>
      )}
    </div>
  );
};

export default AI;
