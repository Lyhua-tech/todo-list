import React from 'react'
import { useState } from 'react'
import cancel from '/src/assets/cancel.png'
import editIcon from '/src/assets/edit.png'
import ListEdit from './ListEdit'

const ShowList = ({ lists, onDelete, handleEdit}) => {
  const [edit, setEdit] = useState(false)
  const handleDelete = () => {
    onDelete(lists.id)
  }
  const handleEdit2 = () => {
    setEdit(!edit)
  }
  const handleUpdate = (newCaption) => {
    handleEdit(lists.id, newCaption)
    setEdit(false)
  }
  let newTask = <div className="font-medium text-white font-mono text-xl">{lists.title}</div>
  if(edit) {
    newTask = <ListEdit handleUpdate={handleUpdate} list={lists}/>
  }
  return (
    <div className="bg-[#3e403c] p-4 rounded-md">
      <div className="flex items-center justify-between">
        {newTask}
        <div className='flex items-center gap-3'>
          <button onClick={handleEdit2} className="bg-gray-800 size-[30px] pl-1 rounded-md">
            <img src={editIcon} alt="Edit" className="w-6 h-6" />
          </button>
          <button onClick={handleDelete} className="bg-gray-500 size-[30px] pl-[3px] rounded-md">
            <img src={cancel} alt="Cancel" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowList