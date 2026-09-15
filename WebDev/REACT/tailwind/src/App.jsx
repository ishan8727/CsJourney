import './App.css'

function App() {
  return(
    <>
    <div className='grid sm:grid-cols-10 grid-cols-1'>
        <div className="first bg-amber-300 sm:col-span-5 col-span-1">Hi from first div</div>
        <div className="second bg-red-600 sm:col-span-4 col-span-1">Hi from Sencond div</div>
        <div className="third bg-blue-700 sm:col-span-1 col-span-1">Hi from the Third One</div>
    </div>
    </>
  )
}

export default App
