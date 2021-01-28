import React, {useContext} from 'react';
import {store} from './store.js';
import {makeStyles} from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';

const CompleteBoard = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem'
    }
  })
  
  const classes = useStyles();
  const globalState = useContext(store);

  return(
    <div className={classes.container}>
      {globalState.state.tasks.map((task, id) => {
        if(task.complete){
          return(
            <TaskCard key={id} index={id} title={task.title} priority={task.priority} dueDate={task.dueDate} complete={task.complete} />
          )
        }
      })}
    </div>
  )
}

export default CompleteBoard;
