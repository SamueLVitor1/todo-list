import styles from './styles.module.css'
import logo from '../../assets/todoLogo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="" />
    </header>
  )
}