import React, { useEffect, useState } from 'react'
import './App.scss'
import PostForm from './components/PostForm.js';

function App() {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <div className="body">
      <span>QuizMeka_</span>
      <PostForm />
    </div>
  )
}

export default App
// <div>
// {(typeof backendData.users === 'undefined') ? (
//   <p>Loading...</p>
// ): (
//   backendData.users.map((user, i) => (
//     <p key={i}>{user}</p>
//   ))
// )}
// </div>