const Card = (props) => {
  return (
    <div className={props.class}>
      <h2>{props.type}</h2>
      <p>${props.price}</p>
      <ul>
        <li>{props.storage} Storage</li>
        <li>{props.users} Users Allowed</li>
        <li>Send up to {props.upload}GB</li>
      </ul>
      <button>LEARN MORE</button>
    </div>
  );
};
export default Card;
