import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App() {
  
  return (
    <div className='bg-slate-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
  
}

export default App