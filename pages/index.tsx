import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import fetchStargazers from '../lib/fetch-stargazers'

export type IndexProps = {
  stars: number
  message: string
}

const Index: FC<IndexProps> = ({ stars, message }) => {
  return (
    <div>
      <h2>{message}</h2>
      <p>Next.js has {stars} ⭐️</p>
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => ({
  props: {
    stars: await fetchStargazers('vercel/next.js'),
    message: 'This is a message put in by the props',
  },
})

export default Index
