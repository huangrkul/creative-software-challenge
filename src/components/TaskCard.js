import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';

const TaskCard = (props) => {

  const useStyles = makeStyles({
    main: {
      backgroundColor: '#fff',
      border: '1px solid #bbb',
      padding: '1em',
      marginBottom: '1em',
      cursor: 'pointer',
    },
    infoBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div:first-child': {
        flex: '1 0 70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > div:first-child': {
          flex: '1 0 10%'
        },
        '& > div:nth-child(2)': {
          flex: '1 0 80%'
        },
        '& > div:last-child': {
          flex: '1 0 10%',
          paddingRight: '0.5em'
        },
      },
      '& > div:last-child': {
        flex: '1 0 30%',
      },
    },
    buttonGroup: {
      display: 'none',
      width: '100%',
      justifyContent: 'flex-end',
      marginTop: '2em'
    },
    buttons: {
      backgroundColor: '#eee',
      border: '0.5em solid #eee',
      borderRadius: '1.5em',
      padding: '0 1em 0 1em',
      fontSize: '0.8em',
      marginLeft: '1em',
      cursor: 'pointer',
      transition: 'all 300ms ease-in-out',
      '&:hover':{
        backgroundColor: '#ddd',
        border: '0.5em solid #ddd',
      }
    },
    buttonOneActive: {
      backgroundColor: '#5fcd8d',
      border: '0.5em solid #5fcd8d',
      '&:hover': {
        backgroundColor: '#5fcd8d',
        border: '0.5em solid #5fcd8d',
      }
    },
    buttonTwoActive: {
      backgroundColor: '#fb8333',
      border: '0.5em solid #fb8333',
      '&:hover': {
        backgroundColor: '#fb8333',
        border: '0.5em solid #fb8333',
      }
    },
    buttonThreeActive: {
      backgroundColor: '#ff6159',
      border: '0.5em solid #ff6159',
      '&:hover': {
        backgroundColor: '#ff6159',
        border: '0.5em solid #ff6159',
      }
    },
    panel: {
      display: 'flex'
    },
    hide: {
      display: 'none'
    }
  })

  const classes = useStyles();

  const [priority, setPriority] = useState(0);
  const [isExpand, setExpand] = useState(false);

  return(
    <Paper className={classes.main}>
      <div className={classes.infoBar} onClick={() => {setExpand(true)}}>
        <div>
          <Checkbox />
          <InputBase
            readOnly={isExpand ? false : true}
            defaultValue={props.title}
            inputProps={{'aria-label': 'naked'}}
          />
          <div className={isExpand ? '' : classes.hide} onClick={
            (e) => {
              e.stopPropagation();
              setExpand(false)
            }}><CancelIcon /></div>
        </div>
        <div>
          <TextField
            readOnly={isExpand ? false : true}
            type='date'
            defaultValue='2021-01-01'
          />
        </div>
      </div>
      <div className={`${classes.buttonGroup} ${isExpand ? classes.panel : ''}`}>
        <div onClick={() => {setPriority(1)}} className={`${classes.buttons} ${priority === 1 ? classes.buttonOneActive : ''}`}>low</div>
        <div onClick={() => {setPriority(2)}} className={`${classes.buttons} ${priority === 2 ? classes.buttonTwoActive : ''}`}>medium</div>
        <div onClick={() => {setPriority(3)}} className={`${classes.buttons} ${priority === 3 ? classes.buttonThreeActive : ''}`}>high</div>
      </div>
    </Paper>
  )
}

export default TaskCard;
