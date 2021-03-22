export default function AnimeGrid(results) {
  const media = results.results

  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-wrap	">
        {media && media.map(item => {
          const {id, title, episodes, coverImage} = item

          return(
            <div key={id} className="w-2/12 px-7 mb-14">
              <a href={id} className="relative inline-block">
                <img className="inline-block w-full h-80 object-cover object-center rounded-md shadow-lg" src={coverImage.large} />
                <div className="absolute bg-gray-50 opacity-0 hover:opacity-100 inset-0 rounded-md p-4 transition-opacity duration-400">
                  <h2>{title.romaji}</h2>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}