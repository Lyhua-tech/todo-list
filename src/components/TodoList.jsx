import React from 'react'
import ShowList from './ShowList.jsx'
const TodoList = ({ lists, onDelete, handleEdit }) => {
  const myList = lists.map(item => {
    return <ShowList key={item.id} lists={item} onDelete={onDelete} handleEdit={handleEdit}/>
  })
  return (
    <div className='py-4 text-black flex flex-col-reverse gap-3'>{myList}</div>
  )
}

export default TodoList