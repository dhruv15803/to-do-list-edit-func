import React, { useState } from 'react'


const PendingItem = ({task,description,i,completeTask,removeTask,editTask}) => {

    const [showDesc,setShowDesc] = useState(false);
    const [arrow,setArrow] = useState('fa-solid fa-chevron-down');


    const showDescFn = ()=>{
        setShowDesc(!showDesc);
        if(arrow==='fa-solid fa-chevron-down'){
            setArrow('fa-solid fa-chevron-up')
        }
        else{
            setArrow('fa-solid fa-chevron-down');
        }
    }

  return (
    <>
    <div className="pending-list-item">
                <div className="item-title-desc">
                    <div className="item-title">
                        {task}
                    </div>
                    {showDesc && <div className="item-desc">
                        {description}
                    </div>}
                </div>
                <div className="item-btns">
                {description.trim()!=='' && <i onClick={showDescFn} className={arrow} style={{color:'#000000'}}></i>}
                <i onClick={()=>completeTask(i)} className="fa-solid fa-check" style={{color:'#72a329'}}></i>
                <i onClick={()=>removeTask(i)} className="fa-solid fa-trash" style={{color:'#ff0000'}}></i>
                <i onClick={()=>editTask(i)} className="fa-regular fa-pen-to-square" style={{color:'#005eff'}}></i>
                </div>
    </div>
    </>
  )
}

export default PendingItem