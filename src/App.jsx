import { useState } from 'react'
import taskIcon from './assets/task.png'
import add from './assets/add.png'

function App() {
  const [toDos, setToDos] = useState([])
  return (
   <div className="bg-sky-200 min-h-screen">
   <div className="header h-16 flex justify-center items-center">
   <img src={taskIcon} alt="Task Icon" className='h-full'/>
   <h1 className='font-bold italic text-3xl'>Tasks</h1>
   <div className=''><img src={add} alt="Add Icon" /></div>
   </div>
   <div className="input">
    <input type="text" name="" id="inputbox" />
   </div>
   <div className="todos"></div>
   </div>
  )
}

export default App
