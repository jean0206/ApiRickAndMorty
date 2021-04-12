import React from 'react'
import Card from '../components/Card.js'
import styles from './Index.module.css'

const Index = ({characters}) => {
 
    return(
        <div className={styles.characters_container}>
            {characters.map(character=><Card key={character.id}></Card>)}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://rickandmortyapi.com/api/character/")
    const characters = await res.json()
    console.log(characters)
    return {
        props:{
            characters:characters["results"]
        }
    }

}

export default Index