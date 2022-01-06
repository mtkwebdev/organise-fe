import React, {useState, useEffect} from 'react'
// eslint-disable-next-line 
// import { useDispatch, useSelector} from 'react-redux'
// eslint-disable-next-line 
import { addCard } from '../../../features/kambanSlice'
import {Card} from 'react-bootstrap'
import './TaskCards.scss'

function TaskCard({props}) {
  // eslint-disable-next-line 
  const [cardTask, setCardTask] = useState([])
  // const dispatch = useDispatch();
  // const tasks = useSelector(state => {return state.kambanBoard.cards})
  
  useEffect(() => {
    console.log("Card Content"+cardTask)
  }, [cardTask])
  
  const collectTasks = (e) => {
    setCardTask(cardTask.concat({[e.target.id]: e.target.value}))
  }
  // dispatch(addCard(cardTask));

    return (
        <> 
            <Card className=" taskCard">
                <input name="taskCardText" id="taskCardText" className="taskCardText" rows="1" placeholder="Add your task here!" onBlur={e=>{collectTasks(e)}}></input>
                <div className="cardActionsBottom">
              <div className="taskCardPriority cardPriorityLow" >Low</div>
                <div className="cardSoftwareActions"  >Completed</div>
                <div className="cardSoftwareActions" >Archive</div>
              </div>
            </Card>
      </>
    )
}

export default TaskCard