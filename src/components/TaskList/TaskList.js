import React, { useState, useContext } from 'react';

import Loader from '../Loader/Loader';
import './TaskList.css';
import { DataContext } from '../DataContext';

export default function TaskList(props) {
  const [ data, setData ] = useContext(DataContext);

  return (
    <>
      {/* if fetcing data, show loader first: */}
      {data.isLoading ? <Loader /> : (
        <div className="taskList">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Статус</th>
                <th>Исполнитель</th>
              </tr>
            </thead>
          {data.tasks.map(task=>
                <tbody key={task.id}>
                  <tr>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.statusName}</td>
                    <td>{task.executorName}</td>
                  </tr>
                </tbody>
          )}
          </table>
        </div>
      )}
    </>
  );
};