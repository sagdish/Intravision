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
          <div className="btnContainer">
            <button className="createButton">Создать заявку</button>
          </div>

          <div className="table">
            <div className="head">
                <p>ID</p>
                <p>Название</p>
                <p>Статус</p>
                <p>Исполнитель</p>
            </div>
            <div className="body">
              {data.tasks.map(task =>
                <div className="row" key={task.id}>
                  <p>{task.id}</p>
                  <p style={{width: "300px"}}>{task.name}</p>
                  <p>{task.statusName}</p>
                  <p>{task.executorName}</p>
                </div>
              )}
            </div>
          </div>



          {/* <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Статус</th>
                <th>Исполнитель</th>
              </tr>
            </thead>
            <tbody>
              {data.tasks.map(task =>
                <tr className="row" key={task.id} style={{border: "1px solid red"}}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.statusName}</td>
                  <td>{task.executorName}</td>
                </tr>
              )}
            </tbody>
          </table> */}
        </div>
      )}
    </>
  );
};