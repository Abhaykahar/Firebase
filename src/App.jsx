import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import View from "./Pages/View"
import Add from "./Pages/Add"
import Edit from "./Pages/Edit"

function App() {


  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/view" element={<View/>}/>
        <Route path="/" element={<Add/>}/>
        <Route path="/edit/:editid" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
