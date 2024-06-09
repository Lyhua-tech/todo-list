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
      <div className="flex">
        <input 
          type="text" 
          onChange={handleChange} 
          value={title} 
          className="flex-grow p-2 border border-neutral-400 rounded-l-md focus:outline-none focus:ring-neutral-600 text-neutral-600 text-2xl font-mono bg-neutral-300"
          placeholder="Enter your task"
        />
        <button 
          type="submit" 
          className="bg-neutral-600 text-white p-2 px-4 rounded-r-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600 font-mono text-xl"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default SearchBox