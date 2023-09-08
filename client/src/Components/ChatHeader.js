import { useCookies } from "react-cookie";

const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);

    window.location.reload();
  };

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          {user && user.url ? (
            <img src={user.url} alt={"Photo of " + user.first_name} />
          ) : (
            <div>No photo available</div>
          )}
        </div>
        <h3>{user ? user.first_name : "Guest"}</h3>
      </div>
      <i className="fa-solid fa-snowboarding log-out-icon" onClick={logout}>
        🢘
      </i>
    </div>
  );
};

export default ChatHeader;
