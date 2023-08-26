import React from 'react'

function TodoItem({title,desc,iscomp,time,updateHandler,deleteHandler, id,}) {
    return (
        <div className='todo'>

            <div>
                <h4>{title}</h4>
                <p>{desc}</p><br></br>
                <p>{time}</p>
            </div>

            <div>
                <input onChange={()=>updateHandler(id)} type='checkbox' checked={iscomp} />
                {/* <button onClick={()=>updateHandler(id)} className='btn'>Update</button> */}
                <button onClick={()=>deleteHandler(id)} className='btn'>Delete</button>
            </div>

        </div>
    )
}

export default TodoItem