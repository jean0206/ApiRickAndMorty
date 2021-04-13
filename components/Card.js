import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={props.image} />
      </div>
      <div>{props.name}</div>
      <div>Status:<a className={props.status==="Dead"?styles.textDead:styles.textLive}> {props.status}</a></div>
    </div>
  );
};

export default Card;
