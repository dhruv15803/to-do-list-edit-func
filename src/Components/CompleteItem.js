import React, { useState } from 'react'

const CompleteItem = ({task,description}) => {

    const [show,setShow] = useState(false);

  return (
    <>
    <div className="complete-list-item">
        <div className="complete-title-desc">
            <div className="complete-title">
                {task}
            </div>
            {show && <div className="complete-description">
                {description}
            </div>}
        </div>
        <div className="complete-arrow">
            {description.trim()!=='' && <i onClick={()=>setShow(!show)}  className={show ? 'fa-solid fa-chevron-up':'fa-solid fa-chevron-down'} style={{color:'#000000'}}></i>}
        </div>
    </div>
    </>
  )
}

export default CompleteItem