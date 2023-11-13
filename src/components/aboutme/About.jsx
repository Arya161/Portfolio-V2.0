import "./about.scss";
import {color, motion , useInView} from "framer-motion";
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

const About = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
    className="about"
    variants ={variants} 
    initial = "initial" 
    ref = {ref}
    animate = {isInView && "animate"}
    >
        <motion.div className="titleContainer" variants = {variants}>
            <div className="title">
            <p>
        I am a <motion.b whileHover={{color:"orange"}}>Final year Engineering Student</motion.b> and 
        am highly passionate about Coding Problems and competitive programming.
        <br/>
        <br/>
        • Interned as a Network Security Intern at  <motion.b whileHover={{color:"orange"}}>AKS IT PVT LTD</motion.b> and as a Developer at  <motion.b whileHover={{color:"orange"}}>Salesforce.</motion.b>
        <br/> 
        • Among  <motion.b whileHover={{color:"orange"}}>Top 20 coders</motion.b> at Manipal University Jaipur at GFG practice platform(5.1k registered Students)
        <br/>
        <br/>
        I am always keen to learn new advancements in technology and master skills & abilities relevant to my field.
        My interest lies in Front-end Web Development. 
        I am currently focusing on building my programming skills.
        <br/>
        <br/>
        Relevant links:
        <br/>
        <a href="https://auth.geeksforgeeks.org/user/arya404/">Geeksforgeeks</a>
        <br/>
        <a href="https://leetcode.com/Arya_Parolia/">Leetcode</a>
        <br/>
        <a href="https://github.com/Arya161">Github</a>
    </p>
            </div>
        </motion.div>
        </motion.div>
  )
}

export default About