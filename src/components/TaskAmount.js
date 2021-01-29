import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {store} from './store.js';

const TaskAmount = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem',
      borderRadius: '1em',
      maxWidth: '150px'
    }
  })
  
  const classes = useStyles();
  const globalState = useContext(store);
  const amount = globalState.state.tasks.reduce((acc, task) => {
    return task.complete ? acc = acc : acc = acc + 1;
  },0)

  return(
    <Paper elevation={3} className={classes.container}>
      {amount}
    </Paper>
  )
}

export default TaskAmount;
