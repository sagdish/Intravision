import React, { useState, useContext } from 'react';

import { DataContext } from '../DataContext';

export default function TaskList(props) {
  const [ data, setData ] = useContext(DataContext);

  return (
    <div>
      task list will appear here
      {data.tasks.map(task=>
      <div key={task.id}>
        {task.id} {task.name} {task.statusName}
      </div>
      )}
    </div>
  );
};