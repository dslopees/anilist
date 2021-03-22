import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import AnimeGrid from '../components/AnimeGrid'

export default function Home() {
  const {results: defaultResults} = []
  const [results, updateResults] = useState(defaultResults)

  async function handleSearch(value) {

    const res = await fetch('/api/search', {
      method: "post",
      body: value
    })
    const nextData = await res.json()

    updateResults(nextData.media)
  }

  return (
    <>
      <Head>
        <title>AniList</title>
      </Head>

      <main>
        <Header onSearch={(value) => handleSearch(value)} />
        {results && 
          <AnimeGrid results={results} />
        }
      </main>
    </>
  )
}
