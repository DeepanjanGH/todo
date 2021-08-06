import React, {useState} from 'react'


export const TodoContext = React.createContext();

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



export const TodoContextProvider = ({
    children
}) => {
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
    return (
        <TodoContext.Provider value={{
            todoList,
            completedList,
            getSearchData,
            onDelete: handleDelete,
            onDuplicate: handleDuplicate,
            handleActiveTodos,
            searchData,
            isSearchActive,
            onSave: handleAdd
        }}>
            {children}
        </TodoContext.Provider>
    )
}
