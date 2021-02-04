import React, {useState, useContext, useEffect} from 'react';
import {store} from './store.js';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import EventIcon from '@material-ui/icons/Event';
import CancelIcon from '@material-ui/icons/Cancel';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap'
    },
    '& > div:first-child': {
      flex: '1 0 70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > div:first-child': {
        flex: '1 0 10%'
      },
      '& > div:nth-child(2)': {
        flex: '1 0 70%'
      },
      '& > div:last-child': {
        flex: '1 0 20%',
        textAlign: 'right',
      },
    },
    '& > div:last-child': {
      flex: '1 0 10%',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        flex: '1 0 100%',
      }
    },
  },
  buttonGroup: {
    display: 'none',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '2em',
    [theme.breakpoints.down('sm')] : {
      justifyContent: 'center'
    }
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
    },
    '&:first-child': {
      marginLeft: '0'
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
  },
  cancel: {
    color: '#ff6159',
    transition: 'all 300ms ease',
    '&:hover': {
      color: '#000'
    }
  },
  calendar: {
    display: 'flex',
    alignContent: 'center',
    '& > span' : {
      marginRight: '5px',
    }
  },
  unfocused: {
    color: '#afafaf'
  }
}))

const TaskCard = (props) => {

  const classes = useStyles();
  const [priority, setPriority] = useState(props.priority);
  const [isExpand, setExpand] = useState(props.isExpanded);
  const [date, setDate] = useState(props.dueDate);
  const globalState = useContext(store);
  const {dispatch} = globalState;

  const handleChange = (category, value) => {
    const newList = [...globalState.state.tasks];
    switch(category){
      case 'check':
        newList[props.index].complete = newList[props.index].complete ? false : true;
        dispatch({type: 'tasks', payload: newList});
        break;
      case 'title':
        newList[props.index].title = value;
        break;
      case 'priority':
        setPriority(value);
        newList[props.index].priority = value;
        break;
      case 'date':
        setDate(value);
        newList[props.index].dueDate = value;
        break;
      case 'expand':
        newList[props.index].isExpanded = value;
        setExpand(newList[props.index].isExpanded);
      default:
        break;
    }

    localStorage.setItem('taskList',JSON.stringify(newList));
  }

  const removeSelf = () => {
    const newList = [...globalState.state.tasks];
    newList[props.index].removed = true;
    const filtered = newList.filter((task) => {
      return task.removed !== true;
    });
    dispatch({type: 'tasks', payload: filtered});
    localStorage.setItem('taskList',JSON.stringify(filtered));
  }

  const Calendar = React.forwardRef((props, ref) => {
    return(
      <div className={classes.calendar}>
        <span className={isExpand ? '' : classes.unfocused}>{props.value}</span>
        <EventIcon onClick={props.onClick}/>
      </div>
    )
  });

  useEffect(() => {
    localStorage.setItem('taskList',JSON.stringify(globalState.state.tasks))
  },[])

  return(
    <Paper className={classes.main}>
      <div className={classes.infoBar} onClick={() => {handleChange('expand', true)}}>
        <div>
          <Checkbox
            checked={props.complete}
            onChange={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleChange('check');
            }} 
          />
          <InputBase
            readOnly={isExpand ? false : true}
            defaultValue={props.title}
            inputProps={{'aria-label': 'naked'}}
            onChange={(e) => {
              handleChange('title', e.target.value);
            }}
          />
          <div className={isExpand ? '' : classes.hide}>
            <CancelIcon className={classes.cancel} onClick={(e) => {
              e.stopPropagation();
              removeSelf();
            }}/>
          </div>
        </div>
        <div>
          <DatePicker
            selected={date}
            customInput={<Calendar />}
            onChange={(newDate) => {
              handleChange('date', newDate);
            }}
            dateFormat="MMM d, yyyy"
          />
        </div>
      </div>
      <div className={`${classes.buttonGroup} ${isExpand ? classes.panel : ''}`} onClick={() => {handleChange('expand', false)}}>
        <div onClick={(e) => {e.stopPropagation(); handleChange('priority', 1)}} className={`${classes.buttons} ${priority === 1 ? classes.buttonOneActive : ''}`}>low</div>
        <div onClick={(e) => {e.stopPropagation(); handleChange('priority', 2)}} className={`${classes.buttons} ${priority === 2 ? classes.buttonTwoActive : ''}`}>medium</div>
        <div onClick={(e) => {e.stopPropagation(); handleChange('priority', 3)}} className={`${classes.buttons} ${priority === 3 ? classes.buttonThreeActive : ''}`}>high</div>
      </div>
    </Paper>
  )
}

export default TaskCard;
