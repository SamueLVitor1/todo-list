//import taskInterface from "../../interfaces/taskInterface";
import { Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import styles from './styles.module.css'
import taskInterface from '../../interfaces/taskInterface';

interface TaskProps extends taskInterface {
  onTaskChangeCompleted: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function Task({ isTaskCompleted, content, onTaskChangeCompleted, onDeleteTask, id }: TaskProps) {

  function taskChangeCompleted() {
    onTaskChangeCompleted(id)
  }

  function deleteTask() {
    onDeleteTask(id)
  }

  return (
    <li className={styles.taskContainer}>
      <Checkbox.Root className={styles.CheckboxRoot} checked={isTaskCompleted} onClick={taskChangeCompleted}>
        <Checkbox.Indicator className={styles.CheckboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={`${styles.taskText} ${isTaskCompleted ? styles.textLineThrough : ''}`}>
        {content}
      </p>
      <Trash onClick={deleteTask} className={styles.trashIcon} size={22} />
    </li>
  )
}