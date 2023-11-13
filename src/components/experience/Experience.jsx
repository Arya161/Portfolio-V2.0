import "./experience.scss";
import {motion , useInView} from "framer-motion";
import {useRef} from "react";

const variants = {
    initial:{
        x:-100,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    },
};

const Experience = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
    className="experience" 
    variants ={variants} 
    initial = "initial" 
    ref = {ref}
    animate = {isInView && "animate"}
    >
        <motion.div className="textContainer" variants = {variants}>
            <p>I focus on making your brand grow 
                <br/>and develop</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants = {variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Viable and Profitable</motion.b> Solutions
                    </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
            </div>
            <button><h2>Tech and Tools</h2></button>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div 
            className="box"
            whileHover={{background:"orange", color :"black", fontWeight :"1000"}}
            >
                <p>
                  • C++<br/>  
                  • JavaScript<br/> 
                  • Node <br/>
                  • React JS<br/>
                  • Framer - Motion<br/>
                  </p>
            </motion.div>
            <motion.div 
            className="box"
            whileHover={{background:"orange", color :"black", fontWeight :"1000"}}
            >
                <p>
                  • Git<br/>
                  • Linux<br/>
                  • Jquery<br/>
                  • Jenkins Automation<br/>
                  • Network Security</p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Experience
