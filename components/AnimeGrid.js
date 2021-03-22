export default function AnimeGrid(results) {
  const media = results.results

  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-wrap	">
        {media && media.map(item => {
          const {id, title, episodes, coverImage, genres} = item

          return(
            <div key={id} className="w-2/12 px-7 mb-14">
              <a href={id} className="relative inline-block">
                <img className="inline-block w-full h-80 object-cover object-center rounded-md shadow-lg" src={coverImage.large} />
                <div className="absolute bg-gray-50 opacity-0 hover:opacity-100 inset-0 rounded-md p-4 transition-opacity duration-400">
                  <h2 className="font-bold mb-3">{title.romaji}</h2>
                  <div className="flex justify-start justify-items-auto flex-wrap">
                    {Object.keys(genres).map(key =>
                      <span className="inline-block rounded-md px-2 mr-1 mb-1 bg-yellow-400 text-sm" value={key}>{genres[key]}</span>
                    )}
                    <span className="inline-block rounded-md px-2 mb-1 bg-red-400 text-sm">EP {episodes}</span>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}