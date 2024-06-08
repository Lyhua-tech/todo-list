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
  return (
    <div className='text-green-600'>
      <SearchBox onSubmit={createList}/>
      <TodoList lists={list}/>
    </div>
  )
}

export default App