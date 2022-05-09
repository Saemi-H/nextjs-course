import React from 'react'

import { server } from "../../../config";

import Link from 'next/link'
import Meta from '../../../components/Meta';

// import { useRouter } from 'next/router'

const article = ({article}) => {
  // const router = useRouter()
  // const {id} =router.query

  return (
    <>
    <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go back</Link>
    </>
  )
}

// export const getServerSideProps = async(context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return{
//     props: {article}
//   }
// }

export const getStaticProps = async(context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return{
    props: {article}
  }
}

export const getStaticPaths = async() => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return{
    //props: {params: {paths}}
    paths,
    fallback: false,
  }
}

export default article