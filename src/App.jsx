import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App =() => {
  const [formData, setFormData] = useState ({
    firstName: '',
    lastName: ''
  })

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
  <form
  onSubmit={(e) => {
    e.preventDefault();
    console.log(formData)
  }}>
    <label htmlFor='firtName'>First Name:</label>
    <input 
    name='firstName'
    value={formData.firstName}

    onChange= {e => {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      })
    }}
    />
    <br></br>
    <label htmlFor='lastName'>Last Name:</label>
    <input 
    name='lastName'
    value={formData.lastName}

    onChange= {e => {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.value
      })
    }}
    />
    <button type='submit'>Submit</button>
  </form>

  )
}

export default App
