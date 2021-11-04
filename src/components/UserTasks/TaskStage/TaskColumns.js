import React, {useState} from 'react'
import TaskCard from '../Cards/TaskCard'

function TaskColumns({props}) {
    const [cards, setCards] = useState([])

    const addNewCards = () => {
        setCards(cards.concat(<TaskCard key={cards.length} />))
        console.log("Columns: "+ cards)
    }

    return (
        <form className="taskColumn" >
            <div className="taskColumnHeader">
                <input className="colTitle" type="text"  placeholder="Add Task Subject Here!"/>
            </div>

            {cards}
                <div className="addTaskCard activateButton" onClick={addNewCards}>Add a Task</div>
        </form>
    )
}

export default TaskColumns
