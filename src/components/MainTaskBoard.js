import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PendingBoard from '../components/PendingBoard';
import CompleteBoard from '../components/CompleteBoard';



const MainTaskBoard = (props) => {

  const useStyles = makeStyles({
    container: {
      width: '60%',
      margin: '2em auto',
      backgroundColor: '#eee',
      '& nav': {
        display: 'flex',
        '& div': {
          fontSize: '2em',
          marginRight: '1em'
        }
      }
    },
    contentBox: {
      backgroundColor: '#aaa',
      padding: '1em',
      border: '1em solid #aaa',
      borderRadius: '1em'
    }

  })

  const [isPending, setPending] = useState(true);
  const classes = useStyles();

  return(
    <article className={classes.container}>
      <nav>
        <div>Pending</div>
        <div>Completed</div>
      </nav>
      <section className={classes.contentBox}>
        {isPending ? <PendingBoard /> : <CompleteBoard />}
      </section>
    </article>
  )
}

export default MainTaskBoard;
