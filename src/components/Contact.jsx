import "./Contact.css";

function Contact(props) {
  const { img, text } = props.data;
  console.log(text);

  return (
    <div className="conta">
      <div className="cont">
        <div className="div">
          <img
            src={img}
            alt="icon"
            className={text === "null" ? "iconError" : "icon"}
          />
        </div>
        {text === "null" ? (
          <p
            className="error"
            style={props.theme ? { color: "#697C9A" } : { color: "#4B6A9B" }}
          >
            Not Available
          </p>
        ) : (
          <p style={props.theme ? { color: "#FFFFFF" } : { color: "#4B6A9B" }}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
