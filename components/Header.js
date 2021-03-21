import Nav from '../components/Nav'
import SearchForm from '../components/SearchForm'
import styles from '../styles/Header.module.css'

export default function Header(props) {
  return (
    <header className={`w-full bg-gradient-to-r from-green-400 to-blue-500 ${styles.header}`}>
      <Nav />
      <SearchForm onChange={(value) => props.onSearch(value)} />
    </header>
  )
}
