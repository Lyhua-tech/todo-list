import React, { useState, useContext } from 'react';
import listContext from '../context/list';
import cancelIcon from '/src/assets/cancel.png';
import editIcon from '/src/assets/edit.png';
import ListEdit from './ListEdit';

const ShowList = ({ lists, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(listContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(lists.id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (newCaption) => {
    onEdit(lists.id, newCaption);
    setIsEditing(false);
  };

  let taskContent = (
    <div className="font-medium text-white font-mono text-xl">
      {lists.title}
    </div>
  );

  if (isEditing) {
    taskContent = <ListEdit handleUpdate={handleUpdate} list={lists} />;
  }

  return (
    <div className="bg-[#3e403c] p-4 rounded-md">
      <div className="flex items-center justify-between">
        <div>
          {count}
          <button onClick={incrementCount}>+</button>
        </div>
        {taskContent}
        <div className="flex items-center gap-3">
          <button onClick={toggleEdit} className="bg-gray-800 size-[30px] pl-1 rounded-md">
            <img src={editIcon} alt="Edit" className="w-6 h-6" />
          </button>
          <button onClick={handleDelete} className="bg-gray-500 size-[30px] pl-[3px] rounded-md">
            <img src={cancelIcon} alt="Cancel" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
