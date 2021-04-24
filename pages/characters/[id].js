import styles from './Character.module.css'

export default function Character({character}) {

  return (
    <div className={styles.characterContainer}>
        <div className={styles.header}>
            <div className={styles.headerImage}>
                <img src={'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'}></img>
            </div>
            <div className={styles.headerImage}>
                <img src={'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'}></img>
            </div>
            <div className={styles.headerImage}>
                <img src={'https://lh3.googleusercontent.com/proxy/vXU_nIpSeYZH4kUOnU5P7_UflP-fPJ0a_VF8EqBMn3L25NlLy1e1T1N3w3LnHIEtjKk-x5scFFx_uVxWT1debpawR3ZK8Y0zHcDgRW1xzIbg-60xoR5hlGmUjThLX4nxF1Hn2SaYN2PfdlSCgWQWJJoQEinI4Xw0cpk7wYfC4HAHucVTOTkot_ZnNzX-v4vD_sEGhf1byEjfQHP2HtBsEbs4HkOTiq1_o0m5'}></img>
            </div>
        </div>
        <div className={styles.profilePhoto}>
            <img src={character.image}/>
            {character.name}
            <a>{character.location.name}</a>
        </div>
        <div className={styles.cardsInformation}>
            
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
