import "./Mainboard.css";
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

  const dateString = props.user.created_at;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let monthname = months[month];
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
        <div className="contact">
          {props.user.location ? (
            <div className="loc one">
              <img
                src="./assets/icon-location.svg"
                alt="location mark"
                className="location"
              />
              <p
                className="city  text"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                {props.user.location}
              </p>
            </div>
          ) : (
            <div className="error">
              <img
                src="./assets/icon-location.svg"
                alt="location mark"
                className="location errimg"
              />
              <p
                className="errormsg first"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                Not Available
              </p>
            </div>
          )}
          {props.user.blog ? (
            <div className="loc second">
              <img
                src="./assets/icon-website.svg"
                alt="website"
                className="web"
              />
              <p
                className="weblink  text"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                {props.user.blog}
              </p>
            </div>
          ) : (
            <div className="error">
              <img
                src="./assets/icon-website.svg"
                alt="website"
                className="web  errimg"
              />
              <p
                className="errormsg"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                Not Available
              </p>
            </div>
          )}
          {props.user.twitter_username ? (
            <div className="loc third">
              <img
                src="./assets/icon-twitter.svg"
                alt="twitter logo"
                className="tw"
              />
              <p
                className="twitter  text"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                {props.user.twitter_username}
              </p>
            </div>
          ) : (
            <div className="error">
              <img
                src="./assets/icon-twitter.svg"
                alt="twitter logo"
                className="tw  errimg"
              />
              <p
                className="errormsg"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                Not Available
              </p>
            </div>
          )}
          {props.user.company ? (
            <div className="loc fourth">
              <img
                src="./assets/icon-company.svg"
                alt="company logo"
                className="build"
              />
              <p
                className="company text"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                {props.user.company}
              </p>
            </div>
          ) : (
            <div className="error">
              <img
                src="./assets/icon-company.svg"
                alt="company logo"
                className="build  errimg"
              />
              <p
                className="errormsg"
                style={
                  props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }
                }
              >
                Not Available
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Mainboard;
