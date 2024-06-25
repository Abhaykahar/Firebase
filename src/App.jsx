import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import View from "./Pages/View"
import Add from "./Pages/Add"

function App() {


  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/view" element={<View/>}/>
        <Route path="/" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
