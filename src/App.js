import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Pending from './Components/Pending';
import { useEffect, useState } from 'react';
import Complete from './Components/Complete';

function App() {

  let pendingTasks = JSON.parse(localStorage.getItem('pendingTasks'));
  let completedTasks = JSON.parse(localStorage.getItem('completedTasks'));

  if(pendingTasks===null || pendingTasks===undefined){
    pendingTasks=[];
  }

  if(completedTasks===null || completedTasks===undefined){
    completedTasks=[];
  }

  const [task,setTask] = useState('');
  const [items,setItems] = useState(pendingTasks);
  const [complete,setComplete]= useState(completedTasks);
  const [isEdit,setIsEdit] = useState(false);
  const [editIndex,setEditIndex] = useState(null);
  const [successMsg,setSuccessMsg] = useState('');
  const [errorMsg,setErrorMsg] = useState('');


  const handleSubmit = (event)=>{
    event.preventDefault();

    if(task.trim()===''){
      setErrorMsg('Please enter a task');
      setTimeout(()=>{
        setErrorMsg('');
      },2000)
      return;
    }

    if(isEdit===false){
      setItems(prevItems=>[...prevItems,task]);
      setTask('');
      setSuccessMsg('Added to list');
      setTimeout(()=>{
        setSuccessMsg('');
      },2000)
    }
    else{
      const newItems = items.map((val,i)=>{
        if(i===editIndex){
          return task;
        }
        else{
          return val;
        }
      })
      setItems(newItems);
      setTask('');
      setEditIndex(null);
      setIsEdit(false);
      setSuccessMsg('Edited the list');
      setTimeout(()=>{
        setSuccessMsg('');
      },2000)
    }
  }

  const completeTask = (index)=>{
    setComplete(prevComplete=>[...prevComplete,items[index]])
    const temp = [...items]
    temp.splice(index,1);
    setItems(temp);
    setSuccessMsg('Completed the task');
    setTimeout(()=>{
      setSuccessMsg('');
    },2000)
  }

  const removeTask = (index)=>{
    const temp = [...items];
    temp.splice(index,1);
    setItems(temp);
    setSuccessMsg('removed from the list');
    setTimeout(()=>{
      setSuccessMsg('');
    },2000)
  }

  const editTask = (index)=>{
    setTask(items[index]);
    setEditIndex(index);
    setIsEdit(true);
  }

  const clearCompleted = ()=>{
    setComplete([]);
  }
  
  const clearPending = ()=>{
    setItems([]);
  }

  useEffect(()=>{
    localStorage.setItem('completedTasks',JSON.stringify(complete));
  },[complete])

  useEffect(()=>{
    localStorage.setItem('pendingTasks',JSON.stringify(items));
  },[items])

  return (
    <>
    <Router>
    <Navbar complete={complete}/>
    <Routes>
      <Route path='/' element={<Pending
       handleSubmit={handleSubmit}
       setTask={setTask} 
      task={task}
       items={items}
       completeTask={completeTask}
       removeTask={removeTask}
       editTask={editTask}
       isEdit={isEdit}
       successMsg={successMsg}
       errorMsg={errorMsg}
       clearPending={clearPending}
      />}/>
      <Route path='/complete' element={<Complete clearCompleted={clearCompleted} complete={complete}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
