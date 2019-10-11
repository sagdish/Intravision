import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const DataContext = createContext();

async function getTasks() {
  try {
    const response = await axios.get("http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=fb46e052-aee1-49c0-a975-5be572d900ef")
    // console.log(response);
    return response.data
  }
  catch(err) {
    console.error("error fetching places: ", err)
  }
}


export const DataProvider = (props) => {
  const [data, setData] = useState({tasks: [], isLoading: true});

  useEffect(() => {
    getTasks()
      .then(response => 
          response.value.map(task => {
          // console.log(task);
          // get associated data in its own variables:
          const { id, name, description, statusName, statusRgb, executorName } = task;
          // console.log(id, name, description, statusName, statusRgb, executorName)
          return { id, name, description, statusName, statusRgb, executorName };
        })
      )
      .then(tasks => {
        console.log(tasks);
        // set data to state:
        setData({tasks, isLoading: false});
      })
      .catch(err => console.log("error in effect hook: ", err));
  }, [])

  return (
    <div>
      <DataContext.Provider value={[ data, setData ]}>
        {props.children}
      </DataContext.Provider>
    </div>
  )
}