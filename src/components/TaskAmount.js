import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {store} from './store.js';

const TaskAmount = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem',
      borderRadius: '1em',
      maxWidth: '150px',
      textAlign: 'center',
      '& > div:first-child': {
        fontSize: '4em',
        color: '#265a88',
      },
      '& > div:last-child' :  {
        fontSize: '1.8em',
        backgroundColor: '#f6f6f6',
        border: '0.2em solid #f6f6f6',
        borderRadius: '0.2em',
        margin: 'auto',
        width: '70%'
      }
    }
  })
  
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
