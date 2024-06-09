import React from 'react'
import { useState } from 'react'

const ListEdit = ({ list, handleUpdate}) => {
  const [titlenew, setTitle] = useState(list.title)
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(titlenew)
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        onChange={handleChange}
        value={titlenew}
        className="flex-grow p-2 border border-neutral-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
      />
      <button
        type="submit"
        className="bg-neutral-600 text-white p-2 rounded-r-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
      >
        Save
      </button>
    </form>
  )
}

export default ListEdit