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
    <form onSubmit={handleSubmit} className="bg-neutral-400 p-4 rounded-md">
      <label className="block font-medium mb-2">What are your Task today?</label>
      <div className="flex gap-1">
        <input 
          type="text" 
          onChange={handleChange} 
          value={title} 
          className="flex-grow p-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-neutral-600 text-neutral-600 text-[22px] font-mono bg-neutral-300"
          placeholder="Enter your task"
        />
        <button className="btn btn-active btn-neutra text-xl font-mono" type="submit">Add</button>
      </div>
    </form>
  )
}

export default SearchBox