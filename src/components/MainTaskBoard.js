import React, {useState, useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PendingBoard from '../components/PendingBoard';
import CompleteBoard from '../components/CompleteBoard';
import Paper from '@material-ui/core/Paper';
import {store} from './store.js';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: '0 auto',
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

const MainTaskBoard = (props) => {

  const globalState = useContext(store);
  const {dispatch} = globalState;
  const [isPending, setPending] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const initTasks = localStorage.taskList ? JSON.parse(localStorage.getItem('taskList')) : [];
    dispatch({type: 'tasks', payload: [...initTasks]});
  },[])

  return(
    <article className={classes.container}>
      <nav>
        <div className={isPending ? '' : classes.unfocused} onClick={() => {setPending(true)}}>Pending</div>
        <div className={isPending ? classes.unfocused : ''} onClick={() => {setPending(false)}}>Completed</div>
      </nav>
      <Paper elevation={3} className={classes.contentBox}>
        {isPending ? <PendingBoard tasks={globalState.state.tasks} /> : <CompleteBoard tasks={globalState.state.tasks} />}
      </Paper>
    </article>
  )
}

export default MainTaskBoard;
