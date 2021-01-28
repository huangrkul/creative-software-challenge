import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TaskCard from '../components/TaskCard';

const PendingBoard = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem'
    },
    addButton: {
      color: 'red',
      fontSize: '3em',
      cursor: 'pointer'
    },
  })
  
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    const newTask = {title: 'New task', priority: 0, dueDate: 0, complete: false};
    setTasks((array) => [...array, newTask])
  }

  return(
    <div className={classes.container}>
      {tasks.map((task, id) => {
        return(
          <TaskCard key={id} title={task.title} priority={task.priority} dueDate={task.dueDate} isComplete={task.complete}/>
        )
      })}
      <aside style={{textAlign: 'right'}}><AddCircleIcon onClick={() => {createTask()}} className={classes.addButton}/></aside>
    </div>
  )
}

export default PendingBoard;
