import React, { useState } from 'react';
import AddTodo from '../components/AddTodo'
import ActiveTodoList from '../components/ActiveTodoList';
import CompletedTodoList from '../components/CompletedTodoList';
import Search from '../components/Search';


const initalTodoList = [
    {
        heading: "Review Journey Build UI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        id: Math.floor(100000 + Math.random() * 900000),
        isEdited: false,
        time: 1626863161000
    },
    {
        heading: "Weekyly Scrum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        id: Math.floor(100000 + Math.random() * 900000),
        isEdited: false,
        time: 1626782401000
    },
    {
        heading: "User Interview",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        id: Math.floor(100000 + Math.random() * 900000),
        isEdited: false,
        time: 1626693361000
    },
    
]


const initialCompletedList = [
    {
        heading: "Review Journey UI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: Math.floor(100000 + Math.random() * 900000),
        isEdited: false,
        time: 1626621961000
    },
    {
        heading: "Select the current candidate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: Math.floor(100000 + Math.random() * 900000),
        isEdited: false,
        time: 1626621961000
    }
]




const TodoContainer = () => {
    const [todoList, setTodoList] = useState([...initalTodoList])
    const [completedList, setCompletedList] = useState([...initialCompletedList]);
    const [searchData, setSearchData] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false)
    const handleAdd = (data, isEdit, index) => {
        console.log(`data, isEdit, index`, data, isEdit, index)
        if(!isEdit) {
            setTodoList([data, ...todoList])
        } else {
            let tempArr = [...todoList];
            tempArr[index] = {...data}
            setTodoList([...tempArr])

        }
        
    }
    const getSearchData = (data, searchActive) => {
        setSearchData([...data]);
        setIsSearchActive(searchActive)
    }
    const handleDelete = (index) => {
        let tempArr = [...todoList];
        tempArr.splice(index, 1)
        setTodoList([...tempArr])
    }
    const handleDuplicate = (data, index) => {
        let tempArr = [...todoList];
        tempArr.splice(index + 1, 0, data);
        setTodoList([...tempArr])
    }
    const handleActiveTodos = (item, index) => {
        console.log(`item, index`, item, index);
        const tempArr = [...todoList];
        tempArr.splice(index,1);
        setTodoList([...tempArr]);
        setCompletedList([...completedList, item])

    }
    console.log(`completedList`, completedList)

    
    return (
        <>
        <div className="todo-container">
            <div className="todo-header">
                <span>To Do List</span>
                <AddTodo
                onSave={handleAdd}
                />
            </div>
            <Search 
                data={todoList}
                getSearchData={getSearchData}
            />
            <ActiveTodoList
                todoList={isSearchActive ? searchData :  todoList}
                handleActiveTodos={handleActiveTodos}
                AddTodo={AddTodo}
                onSave={handleAdd}
                onDelete={handleDelete}
                onDuplicate={handleDuplicate}
            />
            <hr></hr>
            <CompletedTodoList 
                completedList={completedList}
            />
        </div>
        
        </>
    )
}

export default TodoContainer
