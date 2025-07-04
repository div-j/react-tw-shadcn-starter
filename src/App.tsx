import React from 'react'
import { Button } from './components/ui/button'

export default function App() {
  return (
    <div className='p-30'>
      <div className="animate-in slide-in-from-top duration-900">
        Welcome to This this project 
      </div>

      <Button variant={"outline"} className='bg-me '>Hi</Button>
    </div>
  )
}
