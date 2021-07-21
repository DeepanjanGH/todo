import React from 'react'
import { getDay, getMonth } from '../utils'

const CompletedTodoList = ({
    completedList
}) => {
    return (
        <div className="active-todo-container">
            <div className="active-todo-container-header">
                Completed
            </div>
            <div className="active-todo-container-body">
                {
                    completedList.length > 0 ?
                    completedList.slice(0).reverse().map((item, index) => {
                        return (
                        <div className="completed-row" key={index}>
                            <div className="completed-tick"></div>
                            <span className="completed-heading">{item.heading}</span>
                            <span className="dot"></span>
                            <span className="task-finished-date">{`Task finished on ${getDay(item.time)} ${getMonth(item.time)}`} </span>
                        </div>
                        )
                    }) :
                    <div className="emptyData-msg">
                        No Task Found
                    </div>
                }
            </div>
        </div>
    )
}

export default CompletedTodoList
