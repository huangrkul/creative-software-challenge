import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const TaskCard = (props) => {

  const useStyles = makeStyles({
  
  })

  const classes = useStyles();

  return(
    <div>
      <div>
        <div><Checkbox /></div>
        <div>{props.title}</div>
        <div>
          <TextField
            type='date'
            defaultValue='2010-01-01'
          />
        </div>
      </div>
    </div>
  )
}

export default TaskCard;
