import React from 'react'

import headerStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p className={headerStyles.description}>Keep up to ate with the latest news</p>
        {/* <style jsx>{`
        .title {
          color: red
        }
      `}</style> */}
    </div>
  )
}

export default Header