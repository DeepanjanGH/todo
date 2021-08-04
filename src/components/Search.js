import React, { useContext } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { TodoContext } from "../context/TodoContext";

const Search = () => {
  const { todoList, getSearchData } = useContext(TodoContext);
  const onSearch = (e) => {
    if (e.target.value.length > 0) {
      let tempArr = [...todoList];
      let filteredData = tempArr.filter((item) =>
        item.heading.includes(e.target.value)
      );
      console.log(`filteredData`, filteredData);
      getSearchData(filteredData, true);
    } else {
      getSearchData(todoList, false);
    }
  };

  return (
    <div className='search-container'>
      <InputGroup className='mb-3 search-input'>
        <FormControl
          className='search-input-box '
          placeholder='Search To Do'
          onChange={(e) => {
            onSearch(e);
          }}
        />
        <InputGroup.Text className='append' id='basic-addon2'>
          <span className='search-icon'></span>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Search;
