import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className="py-5">
      <div className="container mx-auto flex flex-row">
        <div className="w-4/12 flex justify-start">
          logo
        </div>
        <div className="w-8/12 flex justify-end">
          menu
        </div>
      </div>
    </nav>
  )
}
