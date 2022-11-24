import {Route,Routes} from "react-router-dom"
import {Home} from "../Pages/Home"
import {Project} from "../Pages/Project"
import {Skill} from "../Pages/Skill"
import {Contact} from "../Pages/Contact"
import {AboutPortfolio} from "../Pages/AboutPortfolio"
import {Error} from "../Component/Error"
import {Profile} from "../Pages/Profile"

export const AllRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/aboutportfolio" element={<AboutPortfolio/>}></Route>
            <Route path="/skill" element={<Skill/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
  )
}
