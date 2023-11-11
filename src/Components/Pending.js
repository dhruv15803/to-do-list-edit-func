import React from 'react'


const Pending = ({clearPending,errorMsg,task,items,setTask,handleSubmit,completeTask,removeTask,editTask,isEdit,successMsg}) => {
  return (
    <>
    <div className="pending-outer-container">
        <form className="pending-form" onSubmit={handleSubmit}>
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" name="task" id="task" placeholder='Eg:- Get groceries' className='inputBox' />
            <button className="form-btn">{isEdit? 'Edit':'Submit'}</button>
        </form>
        <div className="success-error-message">
            <p className="success-message">{successMsg}</p>
            <p className="error-message">{errorMsg}</p>
        </div>
        <div className="pending-list-container">
            {items.map((item,i)=>{
                return <div className="pending-list-item">
                <div className="item-title">
                    {item}
                </div>
                <div className="item-btns">
                <i onClick={()=>completeTask(i)} className="fa-solid fa-check" style={{color:'#72a329'}}></i>
                <i onClick={()=>removeTask(i)} className="fa-solid fa-trash" style={{color:'#ff0000'}}></i>
                <i onClick={()=>editTask(i)} className="fa-regular fa-pen-to-square" style={{color:'#005eff'}}></i>
                </div>
            </div>
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