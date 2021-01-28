import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PendingBoard from '../components/PendingBoard';
import CompleteBoard from '../components/CompleteBoard';
import Paper from '@material-ui/core/Paper'



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
        '& div': {
          fontSize: '2em',
          marginRight: '1em'
        }
      }
    },
    contentBox: {
      padding: '1em',
      border: '1px solid #fff',
      borderRadius: '1em'
    }

  }))

  const [isPending, setPending] = useState(true);
  const classes = useStyles();

  return(
    <article className={classes.container}>
      <nav>
        <div>Pending</div>
        <div>Completed</div>
      </nav>
      <Paper elevation={3} className={classes.contentBox}>
        {isPending ? <PendingBoard /> : <CompleteBoard />}
      </Paper>
    </article>
  )
}

export default MainTaskBoard;
