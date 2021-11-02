import React from 'react'

function App() {
  const name = "Vansh Chitlangia";
  const date = new Date().toLocaleDateString();
  // const time = new.Date().toLocaleTimeString();
  
  return (
    <>
      <h1>Date and Time by {name} :-</h1>
      <h3>Today's Date - {date}</h3>
      {/* <h3>Current Time - {time}</h3> */}
    </>
  )
}
export default App
