import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const TaskAmount = (props) => {

  const useStyles = makeStyles({
    container: {
      padding: '1rem'
    }
  })
  
  const classes = useStyles();

  return(
    <div className={classes.container}>
    </div>
  )
}

export default TaskAmount;
