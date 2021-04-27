import styles from './Character.module.css'
import CardInformation from '../../components/CardInformation'

export default function Character({character}) {

  return (
    <div className={styles.characterContainer}>
        <div className={styles.header}>
            <div className={styles.headerImage}>
                <img src={'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'}></img>
            </div>
            <div className={styles.headerImage}>
                <img src={'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'}></img>
            </div>
            <div className={styles.headerImage}>
                <img src={'https://www.mor.bo/wp-content/uploads/2020/05/rm.png'}></img>
            </div>
        </div>
        <div className={styles.profilePhoto}>
            <img src={character.image}/>
            {character.name}
            <a>{character.location.name}</a>
        </div>
        <div className={styles.cardsInformation}>
            <CardInformation title="Gender" message={character.gender}/>
            <CardInformation title="Type" message={character.type}/>
            <CardInformation title="Status" message={character.status}/>
        </div>
    </div>
    );
}

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  console.log(characters)

  const paths = characters['results'].map(character => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // params contains the character `id`.
  // If the route is like /characters/1, then params.id is 1
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();

  // Pass character data to the page via props
  return { props: { character } };
}
