import Head from 'next/head'

import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  console.log("articles", articles);
  return (
    <div>
      <Head>
        <title>WebDev Newz </title>
        <meta name='keyword' content='hiheloodslf' />
      </Head>
      <h1>Welcome to Next!</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return{
    props: {articles}
  }
}
