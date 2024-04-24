import './App.css'

function App() {
  const today = new Date()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  const ampm = hours < 12 ? 'AM' : 'PM'

  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? `0${minutes}` : minutes


  return (
    <div>
      <h1 className='text-type-primary'>{hours}:{minutes} {ampm}</h1>
    </div>
  )
}

export default App
