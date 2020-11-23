type RepoResponse = {
  stargazers_count: number
}

export default async (repoName: string): Promise<number> => {
  const res = await fetch(`https://api.github.com/repos/${repoName}`)
  const { stargazers_count }: RepoResponse = await res.json()
  return stargazers_count
}
