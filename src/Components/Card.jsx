import "./Card.css";
const Card = (props) => {
  return (
    <div className={`${props.class} center`}>
      <h2
        className={`card-type ${props.type === "Professional" ? "center" : ""}`}
      >
        {props.type}
      </h2>
      <p
        className={`card-price ${
          props.type === "Professional" ? "center" : ""
        }`}
      >
        ${props.price}
      </p>
      <ul className="card-features">
        <li
          className={`card-features__items ${
            props.type === "Professional" ? "center" : ""
          }`}
        >
          {props.storage} Storage
        </li>
        <li
          className={`card-features__items ${
            props.type === "Professional" ? "center" : ""
          }`}
        >
          {props.users} Users Allowed
        </li>
        <li
          className={`card-features__items ${
            props.type === "Professional" ? "center" : ""
          }`}
        >
          Send up to {props.upload}GB
        </li>
      </ul>
      <button className={props.btnClass}>LEARN MORE</button>
    </div>
  );
};
export default Card;
/*"card-btn center" */
