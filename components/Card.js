import styles from "./Card.module.css";
import Link from 'next/link'
import { useRouter } from 'next/router'

const Card = (props) => {
  const router = useRouter()

  const redirect = () => {
    router.push(`/characters/${props.id}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={props.image} />
      </div>
      <div>{props.name}</div>
      <div>Status:<a className={props.status==="Dead"?styles.textDead:styles.textLive}> {props.status}</a></div>
      <div className={styles.buttonCard}>

      <button  onClick={redirect}>Ver más</button>
      </div>
    </div>
  );
};

export default Card;
