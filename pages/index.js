import Link from 'next/link'

function Index({ stars, message }) {
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

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
      message: "This is a message put in by the props"
    },
  }
}

export default Index
