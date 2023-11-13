import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className = "navbar">
         {/*Sidebar*/}
         <Sidebar/>
         <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5,}}>
              Portfolio
              </motion.span>
            <div className="social">
            <a href="https://www.linkedin.com/in/arya-parolia-4766bb206/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="" /></a>
            <a href="https://auth.geeksforgeeks.org/user/arya404" target="_blank" rel="noreferrer"><img src="/gfg.png" alt="" /></a>
            <a href="https://leetcode.com/Arya_Parolia/" target="_blank" rel="noreferrer"><img src="/leetcode.png" alt="" /></a>
            <a href="https://github.com/Arya161" target="_blank" rel="noreferrer"><img src="/github.png" alt="" /></a>
            <a href="https://www.instagram.com/arya._.404/" target="_blank" rel="noreferrer"><img src="/instagram.png" alt="" /></a>
            </div>
         </div>
    </div>

  )
}

export default Navbar
