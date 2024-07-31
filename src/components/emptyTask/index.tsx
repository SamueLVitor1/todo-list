import styles from './styles.module.css'
import clipboardImg from '../../assets/Clipboard.svg'

export function EmptyTask() {
  return (
    <section className={styles.emptyTaskContainer}>
      <img src={clipboardImg} alt="" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p> Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}