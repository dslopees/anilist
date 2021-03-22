import styles from '../styles/SearchForm.module.css'

export default function SearchForm(props) {

  async function handleOnChange(event) {
    event.preventDefault()

    const inputName = event.target.name,
    inputValue = event.target.value

    props.onChange(`${inputName}: "${inputValue}"`)

  }

  return (
    <div className={`container mx-auto ${styles.searchForm}`}>
      <form className="w-8/12 mx-auto bg-white shadow-md rounded p-1" onChange={handleOnChange} onSubmit={(event) => event.preventDefault()}>
        <input className="py-2 px-3 w-3/12 focus:outline-none" name="search" placeholder="Search Anime" />
        <select name="genres" className="py-2 px-3 w-3/12 focus:outline-none">
          <option>Genres</option>
        </select>
        <select name="format" className="py-2 px-3 w-3/12 focus:outline-none">
          <option>Format</option>
        </select>
        <select name="airing" className="py-2 px-3 w-3/12 focus:outline-none">
          <option>Airing</option>
        </select>
      </form>
    </div>
  )
}
