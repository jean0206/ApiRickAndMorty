import React from 'react'
import styles from './CardInformation.module.css'

export default function CardInformation(props) {
    return (
        <div className={styles.CardInformation}>
            <div className={styles.titleContainer}>
                {props.title}
            </div>
            <div className={styles.contentCard}>
                {props.message}
            </div>
        </div>
    )
}
