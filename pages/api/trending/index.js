import {ApolloClient, InMemoryCache, gql} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
})

export default async (req, res) => {
  const search = req.body

  try {
    const {data} = await client.query({
      query: gql `
        {
          Page(page: 1, perPage: 24) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            media(sort: TRENDING_DESC, type: ANIME, status: RELEASING) {
              id
              idMal
              title {
                romaji
                english
                native
              }
              episodes
              coverImage {
                extraLarge
                large
                medium
                color
              }
              genres
            }
          }
        }
      `
    })

    if(data.Page.pageInfo.total !== 0) {
      res.status(200).json({media: data.Page.media, error: null})
    }else {
      res.status(400).json({media: null, error: "Nothing was found"})
    }
    
  } catch(error) {
    res.status(500).json({media: req.body, error: "Internal error, please try again"})
  }
}