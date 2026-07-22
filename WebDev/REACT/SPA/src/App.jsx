import {BrowserRouter, Route , Routes} from 'react-router-dom';

const App = () => {
  return (
    <div>
        <h1>
            NAVBAR COMMON
              <br /><br />
        </h1>
      <BrowserRouter>
        <Routes>
                  <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
            <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
            <Route path='/' element={<Landing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Class11Program(){
    return(<>
        <h1>Class 11th Program here!</h1>
    </>)
}

function Class12Program() {
    return (<>
        <h1>This is Class 12th Program here!</h1>
    </>)
}

function Landing(){
    return(
        <div>
            <h1>Welcome to Allen Coaching!</h1>
        </div>
    )
}

export default App
