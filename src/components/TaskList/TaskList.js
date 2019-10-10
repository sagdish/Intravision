import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import { setState } from 'expect/build/jestMatchersObject';

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



export default function TaskList(props) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTasks()
      .then(response => 
        // console.log(response.data.value);
        response.value.map(task => {
          const { id, name, description, statusName, statusRgb} = task;
          // console.log(id, name, description, statusName, statusRgb)
          return { id, name, description, statusName, statusRgb }
        })
      )
      .then(tasks => {
        console.log(tasks);
        setTasks(tasks);
        setLoading(false);
      })
      .catch(err => console.log("error in effect hook: ", err));
  }, [])

  return (
    <div>
      task list will appear here
      {tasks.map(task=>
      <div key={task.id}>
        {task.id} {task.name}
      </div>
      )}
    </div>
  );
};