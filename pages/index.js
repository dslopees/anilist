import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  const {results: defaultResults} = []
  const [results, updateResults] = useState(defaultResults)

  // const [search, setSearch] = useState([]);

  async function handleSearch(value) {
    console.log(value)

    // updateResults(nextData.results)
  }

  return (
    <>
      <Head>
        <title>AniList</title>
      </Head>

      <main>
        <Header onSearch={(value) => handleSearch(value)} />
      </main>
    </>
  )
}
