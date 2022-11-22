import {Route,Routes} from "react-router-dom"

export const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<div>Home</div>}></Route>
            <Route path="/contact" element={<div>Home</div>}></Route>
            <Route path="/project" element={<div>Home</div>}></Route>
            <Route path="/profile" element={<div>Home</div>}></Route>
            <Route path="/aboutportfolio" element={<div>Home</div>}></Route>
            <Route path="/skill" element={<div>Home</div>}></Route>
            <Route path="*" element={<div>Home</div>}></Route>
        </Routes>
  )
}
