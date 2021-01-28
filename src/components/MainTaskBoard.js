import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PendingBoard from '../components/PendingBoard';
import CompleteBoard from '../components/CompleteBoard';
import Paper from '@material-ui/core/Paper';
import {store} from './store.js';

const MainTaskBoard = (props) => {

  const useStyles = makeStyles((theme) => ({
    container: {
      width: '60%',
      margin: '2em auto',
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      },
      '& nav': {
        display: 'flex',
        marginBottom: '1em',
        '& > div': {
          fontSize: '2em',
          marginRight: '1em',
          cursor: 'pointer'
        }
      }
    },
    contentBox: {
      padding: '1em',
      border: '1px solid #fff',
      borderRadius: '1em'
    },
    unfocused: {
      color: '#999'
    }

  }))

  const globalState = useContext(store);
  const {dispatch} = globalState;
  const [isPending, setPending] = useState(true);
  const classes = useStyles();
  const taskList = globalState.state.tasks;

  const updateTask = (id) => {
    tasks[id].complete = true;
    setTasks((array) => [...array]);
  }

  return(
    <article className={classes.container}>
      <nav>
        <div className={isPending ? '' : classes.unfocused} onClick={() => {setPending(true)}}>Pending</div>
        <div className={isPending ? classes.unfocused : ''} onClick={() => {setPending(false)}}>Completed</div>
      </nav>
      <Paper elevation={3} className={classes.contentBox}>
        {isPending ? <PendingBoard /> : <CompleteBoard />}
      </Paper>
    </article>
  )
}

export default MainTaskBoard;
