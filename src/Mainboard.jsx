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
      <div className="name-date-avatar"></div>
      {<img src={props.user.avatar_url} alt="avatar" className="avatar" />}
      <div className="name-date">
        <p className="login">{props.user.login}</p>
        <p>@{props.user.login}</p>
        <p>
          Joined {year} {monthname} {day}
        </p>
      </div>
    </div>
  );
}

export default Mainboard;
