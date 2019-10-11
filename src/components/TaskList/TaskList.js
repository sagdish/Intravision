import React, { useState, useContext } from 'react';

import Loader from '../Loader/Loader';
import './TaskList.css';
import { DataContext } from '../DataContext';

export default function TaskList(props) {
  const [ data, setData ] = useContext(DataContext);

  return (
    <>
      {/* if fetcing data show loader first: */}
      {data.isLoading ? <Loader /> : (
        <div className="taskList">
            {data.tasks.map(task=>
            <div key={task.id}>
              {task.id} {task.name} {task.statusName}
            </div>
          )}
        </div>
      )}
    </>
  );
};