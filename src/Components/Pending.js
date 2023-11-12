import React from 'react'
import PendingItem from './PendingItem'


const Pending = ({description,setDescription,clearPending,errorMsg,task,items,setTask,handleSubmit,completeTask,removeTask,editTask,isEdit,successMsg}) => {


  return (
    <>
    <div className="pending-outer-container">
        <form className="pending-form" onSubmit={handleSubmit}>
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="task" id="task" placeholder='Eg:- Get groceries' className='inputBox' />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name="description" id="description" placeholder='Enter description' className='inputBox' />
            <button className="form-btn">{isEdit? 'Edit':'Submit'}</button>
        </form>
        <div className="success-error-message">
            <p className="success-message">{successMsg}</p>
            <p className="error-message">{errorMsg}</p>
        </div>
        <div className="pending-list-container">
            {items.map((item,i)=>{
                return <PendingItem 
                task={item.task}
                description={item.description} 
                i={i} 
                completeTask={completeTask} 
                removeTask={removeTask} 
                editTask={editTask}
                />
            })}
        </div>
        {items.length!==0 && <div className="clear-pending">
            <button className="form-btn" onClick={clearPending}>Clear tasks</button>
        </div>}
    </div>
    </>
  )
}

export default Pending