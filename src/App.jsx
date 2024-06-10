import React from 'react'
import SearchBox from './components/SearchBox'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const App = () => {
  const [list, setList] = useState([])
  const createList = async(title) => {
    const response = await axios.post('http://localhost:3002/list', {
      title
    });
    const newList = [
      ...list, response.data
    ]
    setList(newList)
  }
  const deleteList = async (id) => {
    await axios.delete(`http://localhost:3002/list/${id}`)
    const newList = list.filter(list => {
      return list.id !== id;
    })
    setList(newList);
  }
  const fetchList = async () => {
    const response = await axios.get('http://localhost:3002/list');
    setList(response.data)
  }
  useEffect(() => {
    fetchList();
  }, []);
  const editList = async (id, newCaption) => {
    const response = await axios.put(`http://localhost:3002/list/${id}`, {
      title: newCaption
    })
    let editTitle = list.map((lists) => {
      if (lists.id === id) {
        return {...lists, ...response.data}
      }
      return lists
    })
    setList(editTitle)
  } 
  return (
    <div className='max-w-[1000px] mx-auto text-2xl font-mono text-neutral-700'>
      <SearchBox onSubmit={createList}/>
      <TodoList lists={list} onDelete={deleteList} handleEdit={editList}/>
    </div>
  )
}

export default App