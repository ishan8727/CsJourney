import './App.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router';
import Landing from './public/Landing';
import Programs from './public/Programs';
import Exam from './public/Exam';
import StudyMaterials from './public/StudyMaterials';
import ErrorPage from './public/ErrorPage';
import logo from './assets/icon.jpg'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>} >
            <Route index element={<Landing />} />
            <Route path='programs' element={<Programs/>} />
            <Route path='exams' element={<Exam/>} />
            <Route path='study-material' element={<StudyMaterials/>} />
          </Route>
            <Route path='*' element={<ErrorPage/ >} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const navbarStyle = {
  // background:"green",
  marginLeft:30,
  marginRight:30,
  fontSize: 30
}

function Navbar(){
  return (
    <div style={{
      padding: 2, display: 'flex', background: '', alignItems: "center"}}>
      <img src={logo} style={{ width: 60, marginRight: 12, marginLeft: 12 }} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background:'#D3D3D3', borderRadius:10 }}>
        <Link to={'exams'} style={navbarStyle} >Exams</Link>
        <Link to={'programs'} style={navbarStyle} >Programs</Link>
        <Link to={'study-material'} style={navbarStyle} >Study Material</Link>
      </div>
  </div>
  )
}

function Layout(){
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
