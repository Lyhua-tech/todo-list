import React from 'react'
import SearchBox from './components/SearchBox'
import TodoList from './components/TodoList'
import { useState } from 'react'
import './index.css'

const App = () => {
  const [list, setList] = useState([])
  const createList = (title) => {
    const newList = [
      ...list, {id: Math.floor(Math.random() * 9191) , title}
    ]
    setList(newList)
  }
  const deleteList = (id) => {
    const newList = list.filter(list => {
      return list.id !== id;
    })
    setList(newList);
  }
  const editList = (id, newCaption) => {
    let editTitle = list.map((lists) => {
      if (lists.id === id) {
        return {...lists, title: newCaption}
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