import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TaskCard from '../components/TaskCard';
import {store} from './store.js';
import uuid from 'react-uuid';

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

const PendingBoard = (props) => {
  
  const classes = useStyles();
  const globalState = useContext(store);
  const {dispatch} = globalState;

  const createTask = () => {
    const newTask = {title: 'New task', priority: 0, dueDate: new Date(), complete: false, removed: false, isExpanded: false};
    dispatch({type: 'tasks', payload: [...globalState.state.tasks, newTask]}); 
  }

  return(
    <div className={classes.container}>
      {props.tasks.map((task, id) => {
        if(!task.complete){
          return(
            <TaskCard key={uuid()} index={id} title={task.title} priority={task.priority} dueDate={Date.parse(task.dueDate)} complete={task.complete} removed={task.removed} isExpanded={task.isExpanded} />
          )
        }
      })}
      <aside style={{textAlign: 'right'}}><AddCircleIcon onClick={() => {createTask()}} className={classes.addButton}/></aside>
    </div>
  )
}

export default PendingBoard;
