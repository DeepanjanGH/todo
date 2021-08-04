import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import { getActiveTodoDates, getdateColor } from '../utils';
import AddTodo from './AddTodo';

const ActiveTodoList = () => {
    return (
        <TodoContext.Consumer>
            {
                ({
                    todoList,
                    handleActiveTodos,
                    onSave,
                    onDelete,
                    onDuplicate
                }) => (
                    <div className="active-todo-container">
                        <div className="active-todo-container-header">
                            To Do
                        </div>
                        <div className="active-todo-container-body">
                            {
                                
                                todoList.length > 0 ?
                                todoList.map((item, index) => 
                                    <div className="todo-row" key={index}>
                                        <div className="row-left">
                                        <div className="circle" onClick={() => handleActiveTodos(item, index)}>
                                        </div>
                                        <div>
                                            <h6>{item.heading}</h6>
                                            <p>{item.description}</p>
                                            <span className="date">
                                                <span className={getdateColor(item.time)}></span>
                                                {getActiveTodoDates(item.time)}
                                            </span>
                                        </div>
                                        </div>
                                        <div className="options">
                                            <AddTodo
                                                isEdit={true}
                                                editData={item}
                                                editRowIndex={index}
                                                onSave={onSave}
                                            />
                                            <Dropdown>
                                                <Dropdown.Toggle className="toggle-button" variant="success" id="dropdown-basic">
                                                    
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onSelect={() => onDelete(index)}>Delete</Dropdown.Item>
                                                    <Dropdown.Item onSelect={() => onDuplicate(item, index)}>Duplicate</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Add Reminder</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Add Comment</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                ) : 
                                <div className="emptyData-msg">
                                    No Task Found
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        </TodoContext.Consumer>
        
    )
}

export default ActiveTodoList
