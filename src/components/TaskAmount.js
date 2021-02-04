import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {store} from './store.js';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
    borderRadius: '1em',
    maxWidth: '150px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')] : {
      maxWidth: '80px',
      marginBottom: '2em',
    },
    '& > div:first-child': {
      fontSize: '4em',
      color: '#265a88',
      [theme.breakpoints.down('xs')] : {
        fontSize: '3.5em',
      },
    },
    '& > div:last-child' :  {
      fontSize: '1.8em',
      backgroundColor: '#f6f6f6',
      border: '0.2em solid #f6f6f6',
      borderRadius: '0.2em',
      margin: 'auto',
      width: '70%',
      [theme.breakpoints.down('xs')] : {
        fontSize: '1em',
      },
    }
  }
}))

const TaskAmount = (props) => {
  
  const classes = useStyles();
  const globalState = useContext(store);
  const amount = globalState.state.tasks.reduce((acc, task) => {
    return task.complete ? acc = acc : acc = acc + 1;
  },0)

  useEffect(() => {
    
  })

  return(
    <Paper elevation={3} className={classes.container}>
      <div>{amount}</div>
      <div>Tasks</div>
    </Paper>
  )
}

export default TaskAmount;
