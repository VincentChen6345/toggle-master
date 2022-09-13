import "./Card.css";

const Card = (props) => {
  return (
    <div className={`${props.class} center`}>
      <h2 className="card-type center">{props.type}</h2>
      <p className="card-price">${props.price}</p>
      <ul className="card-features">
        <li className="card-features__items">{props.storage} Storage</li>
        <li className="card-features__items">{props.users} Users Allowed</li>
        <li className="card-features__items">Send up to {props.upload}GB</li>
      </ul>
      <button className={props.btnClass}>LEARN MORE</button>
    </div>
  );
};
export default Card;
/*"card-btn center" */
