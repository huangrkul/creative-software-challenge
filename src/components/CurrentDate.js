import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const CurrentDate = (props) => {

  const d = new Date();
  const dayOfWeek = d.toLocaleString('default', {weekday: 'long'});
  const month = d.toLocaleString('default', {month: 'long'});
  const dayOfMonth = d.getDate();
  const year = d.getFullYear();

  const useStyles = makeStyles({
    container: {
      padding: '1em',
      marginBottom: '2em',
      maxWidth: '250px',
      borderRadius: '1em',
      '& > div:first-child': {
        fontSize: '2em',
        color: '#545454'
      },
      '& > div:nth-child(2)': {
        fontSize: '2.4em',
        lineHeight: '0.6em',
      },
      '& > div:last-child' : {
        fontSize: '1.5em',
        color: '#afafaf',
        lineHeight: '2em'
      }

    }
  })
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
