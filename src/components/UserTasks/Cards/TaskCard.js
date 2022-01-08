import React, {useState, useEffect} from 'react'
// eslint-disable-next-line 
// import { useDispatch, useSelector} from 'react-redux'
// eslint-disable-next-line 
import { addCard } from '../../../features/kambanSlice'
import {Card} from 'react-bootstrap'
import './TaskCards.scss'

function TaskCard({taskData}) {

  for (let i1 = 0; i1 < taskData.length; i1++ ){
    // console.log(taskData[i1].task)
    const allTasks = taskData[i1].task
    for (let i2 = 0; i2 < allTasks[i1].length; i2++ ){
      console.log(taskData.length)
    }
  }

    return (
            <>
                {/* {console.log(taskData)} */}
                {/* {taskData} */}
            </>
    )
}

export default TaskCard