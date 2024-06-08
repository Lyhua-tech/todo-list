import { useState } from "react"
import React from 'react'

const SearchBox = ({ onSubmit }) => {
  const [title , setTitle] = useState('')
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title)
    setTitle('')
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <label>What are your Task today ?</label>
      <input type="text" onChange={handleChange} value={title}/>
      <button>Add</button>
    </form>
  )
}

export default SearchBox