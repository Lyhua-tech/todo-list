import React from 'react'
import ShowList from './ShowList.jsx'
const TodoList = ({ lists }) => {
  const myList = lists.map(item => {
    return <ShowList key={item.id} lists={item} />
  })
  return (
    <div className='p-4 text-black flex flex-col-reverse'>{myList}</div>
  )
}

export default TodoList