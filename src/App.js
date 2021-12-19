import React from 'react'

function App() {
  
  const date = new Date().toLocaleDateString();
  
  return (
    <>
      <h1>Today's Date :-</h1>
      <h3> {date} </h3>
    </>
  )
}
export default App
