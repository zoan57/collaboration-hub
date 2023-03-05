<section className="profile-info">
  <div className="profile-avatar">
    <img src="/images/logo-sm.png" className="logo-md"></img>
    <h4 className="dec-txt">{userInfo.name ? userInfo.name : "Unknown"}</h4>
    {currentUser === profileUser && (
      <button className="edit" onClick={() => setEditing(!editing)}>
        Edit
      </button>
    )}
  </div>
  <div>
    <Link to={`https://www.facebook.com${userInfo.facebook}`} target="_blank">
      <FacebookIcon width="40px" height="40px" />
    </Link>
    <Link to={`https://www.instagram.com${userInfo.instagram}`} target="_blank">
      <InstagramIcon width="40px" height="40px" />
    </Link>
    <Link to={`${userInfo.otherLink}`} target="_blank">
      <LinkIcon width="40px" height="40px" />
    </Link>
  </div>
  <div className="profile-dis-flexbox profile-msg">
    <Link to="/message">
      <ChatTextIcon width="30px" height="30px" />
    </Link>
    <span>Message</span>
  </div>
  {profileUser !== currentUser ? (
    <div className="profile-dis-flexbox">
      <div
        onClick={handleSubscribeClick}
        className={`HeartAnimation profile-heart ${
          subscribeAnimating ? "heart-animate" : ""
        }`}
      ></div>
      <span className="profile-heart-txt">{`${
        subscribeAnimating ? "Subscribed" : "Subscribe"
      }`}</span>
    </div>
  ) : null}
</section>;
