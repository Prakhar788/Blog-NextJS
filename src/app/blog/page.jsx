import React from 'react'
import styles from "./blogPage.module.css"
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'

const Page = () => {
  return (
    <div className={styles.container} >
        <h1 className={styles.title}>Blogggggggggggggg</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default Page 