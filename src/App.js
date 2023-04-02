import {useState, useEffect} from 'react';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main'
import Header from './Components/Header/Header';
import React from 'react';



function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) 


  


  return <div className="wrapper">
<Header />
<Main tasks={tasks} setTasks={setTasks} />
<Footer tasks={tasks} />
  </div>;
}

export default App;
