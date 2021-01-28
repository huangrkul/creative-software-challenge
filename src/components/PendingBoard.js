import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TaskCard from '../components/TaskCard';
import {store} from './store.js';

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
  const globalState = useContext(store);
  const {dispatch} = globalState;

  const createTask = () => {
    const newTask = {title: 'New task', priority: 0, dueDate: 0, complete: false};
    dispatch({type: 'tasks', payload: [...globalState.state.tasks, newTask]})
  }

  return(
    <div className={classes.container}>
      {globalState.state.tasks.map((task, id) => {
        if(!task.complete){
          return(
            <TaskCard key={id} index={id} title={task.title} priority={task.priority} dueDate={task.dueDate} complete={task.complete} />
          )
        }
      })}
      <aside style={{textAlign: 'right'}}><AddCircleIcon onClick={() => {createTask()}} className={classes.addButton}/></aside>
    </div>
  )
}

export default PendingBoard;
