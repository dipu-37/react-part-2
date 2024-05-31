
import './App.css'

function App() {
  
  function handleclick(){
    alert('button click')
  }

  const handleclick2 = (num)=> {
    alert(4 +num)
  }
  return (
    <>
     
      <h2>React component part 2</h2>
    <button onClick={handleclick}>Click me</button>
    <button onClick={ () => handleclick2(5)}>click me bro</button>
      
    </>
  )
}

export default App
