import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1em',
    marginBottom: '2em',
    maxWidth: '282px',
    borderRadius: '1em',
    '& > div:first-child': {
      fontSize: '1.75em',
      color: '#545454',
      [theme.breakpoints.down('xs')] : {
        fontSize: '1.5em'
      }
    },
    '& > div:nth-child(2)': {
      fontSize: '2.25em',
      lineHeight: '0.75em',
      [theme.breakpoints.down('xs')] : {
        fontSize: '1.6em'
      } 
    },
    '& > div:last-child' : {
      fontSize: '1.75em',
      color: '#afafaf',
      lineHeight: '1.75em',
      [theme.breakpoints.down('xs')] : {
        fontSize: '1.5em',
        lineHeight: '1.4em'
      } 
    }

  }
}))

const CurrentDate = (props) => {

  const d = new Date();
  const dayOfWeek = d.toLocaleString('default', {weekday: 'long'});
  const month = d.toLocaleString('default', {month: 'long'});
  const dayOfMonth = d.getDate();
  const year = d.getFullYear();
  const classes = useStyles();

  return(
    <Paper className={classes.container} elevation={3}>
      <div>{dayOfWeek}</div>
      <div>{month}, {dayOfMonth}</div>
      <div>{year}</div>
    </Paper>
  )
}

export default CurrentDate;
