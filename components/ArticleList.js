import React from 'react'

import ArtcleItem from './ArtcleItem'

import articleStyles from "../styles/Article.module.css"

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
    {
        articles.map(article => <ArtcleItem key={article.id} article={article} />)
      }
    </div>
  )
}

export default ArticleList