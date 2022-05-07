import React from 'react'

import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>Hello</div>
        {children}
      </main>
    </div>
  )
}

export default Layout