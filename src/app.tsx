import styles from './app.module.css'
import { Body } from './components/body'
import { Header } from './components/header'

export function App() {
  return (
    <main className={styles['app-container']}>
      <Header />
      <Body />
    </main>
  )
}


