import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';

const CompleteBoard = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem'
    }
  })
  
  const classes = useStyles();

  return(
    <div className={classes.container}>
      {props.tasks.map((task, id) => {
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
