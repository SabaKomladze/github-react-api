import "./Mainboard.css";
import Contact from "./Contact";
function Mainboard(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const SingleContact = [
    {
      id: 1,
      img: "./assets/icon-location.svg",
      text: `${props.user.location}`,
    },
    {
      id: 3,
      img: "./assets/icon-twitter.svg",
      text: `${props.user.twitter_username}`,
    },
    {
      id: 2,
      img: "./assets/icon-website.svg",
      text: `${props.user.blog}`,
    },

    {
      id: 4,
      img: "./assets/icon-company.svg",
      text: `${props.user.company}`,
    },
  ];
  const dateString = props.user.created_at;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let monthname = months[month];
  console.log(props.user);
  return (
    <div
      className="mainboard"
      style={
        props.theme
          ? { backgroundColor: "#1E2A47" }
          : { backgroundColor: "#FEFEFE" }
      }
    >
      {<img src={props.user.avatar_url} alt="avatar" className="avatar" />}

      <div className="name-date-avatar">
        <div className="name-date">
          <div className="name-rate">
            <p
              className="login"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#697C9A" }}
            >
              {props.user.login}
            </p>
            <p className="rateSign">@{props.user.login}</p>
          </div>

          <p
            className="join"
            style={props.theme ? { color: "#FFFFFF" } : { color: "#697C9A" }}
          >
            Joined {year} {monthname} {day}
          </p>
        </div>
      </div>
      <section className="mainData">
        <div className="bio">{props.user.bio}</div>
        {/* stats*/}
        <div
          className="stats"
          style={
            props.theme
              ? { backgroundColor: "#141D2F" }
              : { backgroundColor: "#F6F8FF" }
          }
        >
          <div className="repos">
            <p
              className="repo middle-text"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }}
            >
              Repos
            </p>
            <p
              className="middle-num"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#2B3442" }}
            >
              {props.user.public_repos}
            </p>
          </div>
          <div className="followers">
            <p
              className="follower middle-text"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }}
            >
              followers
            </p>
            <p
              className="middle-num"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#2B3442" }}
            >
              {props.user.followers}
            </p>
          </div>
          <div className="followings">
            <p
              className="folling middle-text"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }}
            >
              following
            </p>
            <p
              className="middle-num"
              style={props.theme ? { color: "#FFFFFF" } : { color: "#2B3442" }}
            >
              {props.user.following}
            </p>
          </div>
        </div>
        {/* contact*/}
        <div className="conta">
          {SingleContact.map((data, index) => (
            <Contact
              data={data}
              key={index}
              user={props.user}
              theme={props.theme}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Mainboard;
