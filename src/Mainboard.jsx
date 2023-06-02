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
    <div className="mainboard">
      <div className="name-date-avatar">
        {<img src={props.user.avatar_url} alt="avatar" className="avatar" />}
        <div className="name-date">
          <p className="login">{props.user.login}</p>
          <p className="rateSign">@{props.user.login}</p>
          <p className="join">
            Joined {year} {monthname} {day}
          </p>
        </div>
      </div>
      <section className="mainData">
        {props.user.bio}
        <div className="stats">
          <div className="repos">
            <p className="repo"> Repos</p>
            {props.user.public_repos}
          </div>
          <div className="followers">
            <p className="follower">followers</p>
            {props.user.followers}
          </div>
          <div className="followings">
            <p className="folling">following</p>
            {props.user.following}
          </div>
        </div>
        <div className="contact">
          <div className="loc">
            <img
              src="./assets/icon-location.svg"
              alt="location mark"
              className="location"
            />
            <p className="city">{props.user.location}</p>
          </div>
          <div className="loc">
            <img
              src="./assets/icon-website.svg"
              alt="website"
              className="web"
            />
            <p className="weblink">{props.user.blog}</p>
          </div>
          <div className="loc">
            <img
              src="./assets/icon-twitter.svg"
              alt="twitter logo"
              className="tw"
            />
            <p className="twitter">{props.user.twitter_username}</p>
          </div>
          <div className="loc">
            <img
              src="./assets/icon-company.svg"
              alt="company logo"
              className="build"
            />
            <p className="company">{props.user.company}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainboard;
