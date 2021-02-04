import React from 'react';
import MainTaskBoard from '../components/MainTaskBoard';
import CurrentDate from '../components/CurrentDate';
import TaskAmount from '../components/TaskAmount';
import {makeStyles} from '@material-ui/core/styles';
import Bgvector from '../../public/assets/bgvector.svg';
import Bgvector1 from '../../public/assets/bgvector1.svg';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '80%',
    margin: '4em auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      flexWrap: 'wrap',
    },
    '& > section:first-of-type' : {
      flex: '1 0 70%',
      paddingRight: '2em',
      [theme.breakpoints.down('md')]: {
        flex: '1 0 100%',
        order: '4',
        paddingRight: '0'
      }
    },
    '& > section:last-of-type' : {
      flex: '1 0 30%',
      marginBottom: '2em',
      [theme.breakpoints.down('md')]: {
        width: '90%',
        flex: '1 0 100%',
        display: 'flex',
        justifyContent: 'space-between',
        '& > div' : {
          flex: '0 0 45%',
        }
      }
    }
  },
  vectorOne: {
    position: 'absolute',
    zIndex: '-1',
    right: '0',
    top: '0',
  },
  vectorTwo: {
    position: 'absolute',
    zIndex: '-1',
    left: '0',
    bottom: '0',
  },
}))

const App = () => {
  
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <img className={classes.vectorOne} src={Bgvector} />
      <img className={classes.vectorTwo} src={Bgvector1} />
      <section><MainTaskBoard /></section>
      <section>
        <CurrentDate />
        <TaskAmount />
      </section>
    </main>
  );
}

export default App;