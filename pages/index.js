import { useState } from 'react'
import {server} from '../config'
import Head from 'next/head'
import Header from '../components/Header'
import AnimeGrid from '../components/AnimeGrid'

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/trending`)
  const nextData = await res.json()

  return {
    props: {
      nextData
    }
  }
}

export default function Home({nextData}) {
  const data = nextData.media
  const {results: defaultResults = data } = data
  const [results, updateResults] = useState(defaultResults)

  async function handleSearch(value) {

    console.log(value)

    if ( value === `search: ""` ) {
      updateResults(defaultResults)
      return
    }

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
