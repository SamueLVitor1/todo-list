import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'
import { EmptyTask } from '../emptyTask'
import { Task } from '../task'
import { ChangeEvent, FormEvent, useState } from 'react'
import taskInterface from '../../interfaces/taskInterface'

export function Body() {
  const [tasks, setTasks] = useState<taskInterface[]>([
    {
      id: 342342,
      isTaskCompleted: true,
      content: 'estudar'
    },
    {
      id: 23441,
      isTaskCompleted: false,
      content: 'ler'
    }
  ])

  const numberTasksCreated: number = tasks.length

  const numberTasksCompleted = tasks.filter(task => task.isTaskCompleted).length;

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, {
      content: newTaskText,
      isTaskCompleted: false,
      id: Math.random()
    }])
    setNewTaskText('')
  }

  function hanldleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }
  function handleTaskChangeCompleted(id: number) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return { ...task, isTaskCompleted: !task.isTaskCompleted };
        }
        return task;
      })
    );
  }

  function handleDeleteTask(id: number) {
    const listWithoutOneTask = tasks.filter(task => {
      return task.id !== id;
    })

    setTasks(listWithoutOneTask)
  }

  return (
    <main className={styles.bodyContainer}>
      <form className={styles.inputContainer} onSubmit={handleCreateNewTask}>
        <input
          name='task'
          type="text"
          required
          value={newTaskText}
          onChange={hanldleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit'>
          Criar
          <PlusCircle />
        </button>
      </form>

      <section className={styles.tasksContainer}>
        <header className={styles.createdInfos}>
          <div>
            <p>Tarefas criadas</p>
            <span className={styles.counter}>
              {numberTasksCreated}
            </span>
          </div>

          <div>
            <p>Concluídas</p>
            <span className={styles.counter}>
              {numberTasksCompleted}
            </span>
          </div>
        </header>

        {tasks.length !== 0 ? (
          <ul className={styles.listTasks}>
            {tasks.map(taskItem => (
              <Task
                key={taskItem.id}
                content={taskItem.content}
                isTaskCompleted={taskItem.isTaskCompleted}
                id={taskItem.id}
                onTaskChangeCompleted={handleTaskChangeCompleted}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </ul>
        ) : (
          <EmptyTask />
        )}
      </section>
    </main>
  )
}