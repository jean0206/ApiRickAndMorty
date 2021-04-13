import React from "react";
import Card from "../components/Card.js";
import styles from "./Index.module.css";

const Index = ({ characters }) => {
  return (
    <div onClick={()=>console.log('Hola')} className={styles.index_container}>
      Personajes Rick And Morty
      <div className={styles.characters_container}>
        {characters === null
          ? "Not Found"
          : characters.map((character) => (
              <Card
                image={character.image}
                name={character.name}
                status={character.status}
                key={character.id}
              ></Card>
            ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const characters = await res.json();
    console.log(characters);
    return {
      props: {
        characters: characters["results"],
      },
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        characters: null,
      },
    };
  }
}

export default Index;
