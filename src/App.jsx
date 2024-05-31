
import './App.css'

function App() {
  
  function handleclick(){
    alert('button click')
  }

  return (
    <>
     
      <h2>React component part 2</h2>
    <button onClick={handleclick}>Click me</button>
      
    </>
  )
}

export default App
