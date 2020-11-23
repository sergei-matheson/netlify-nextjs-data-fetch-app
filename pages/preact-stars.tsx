import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import fetchStargazers from '../lib/fetch-stargazers'

export type PreactProps = {
  stars: number
}

const PreactStars: FC<PreactProps> = ({ stars }) => {
  return (
    <div>
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PreactProps> = async () => ({
  props: {
    stars: await fetchStargazers('developit/preact'),
  },
})

export default PreactStars
