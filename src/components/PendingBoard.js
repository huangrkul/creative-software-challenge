import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TaskCard from '../components/TaskCard';

const PendingBoard = (props) => {

  const useStyles = makeStyles({
    container: {
      backgroundColor: '#ddd',
      padding: '1em'
    },
    taskCard: {
      backgroundColor: '#777',
      padding: '1em'
    },
    addButton: {
      color: 'red',
      fontSize: '3em'
    }
  })
  
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    const newTask = {title: 'task', priority: 0, dueDate: 0};
    setTasks((array) => [...array, newTask])
  }

  return(
    <div className={classes.container}>
      {tasks.map((task, id) => {
        return(
          <TaskCard key={id} title={task.title} priority={task.priority} dueDate={task.dueDate}/>
        )
      })}
      <aside><AddCircleIcon onClick={() => {createTask()}}className={classes.addButton}/></aside>
    </div>
  )
}

export default PendingBoard;
