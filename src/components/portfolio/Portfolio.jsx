import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const items = [
    {
        id:1,
        title : "COZA STORE",
        img : "cozastore.png",
        desc:"Developed a dynamic website, deployed client and server-side operations. Hosted on Xammp server and maintained on MySQL database.",
        link : "https://github.com/Arya161/E-commerce-Website"
    },
    {
        id:2,
        title : "Netflix 2019 Clone ",
        img : "Netflix.png",
        desc:"In this project I re-created the Netflix(2019) landing page using HTML, CSS and a bit of JavaScript for the tabs using modern CSS3+ techniques like Grid, Flex, overlays & shadows.",
        link : "https://github.com/Arya161/Netflix-2019-Clone"
    },
    {
        id:3,
        title : "Login Application with Express Node",
        img : "Nodelogin.png",
        desc:"Developed a secure login app with Node.js and Express, optimizing authentication and enabling responsive frontend-backend communication.",
        link : "https://github.com/Arya161/Login-Application-with-Express-Node"
    },
    {
        id:4,
        title : "HTML Login Page",
        img : "loginapp.png",
        desc:"Wrote Basic HTML and CSS to develop a simple Login Page",
        link : "https://login-ap.netlify.app/"
    },
    {
        id:5,
        title : "Stock Price Prediction - ML",
        img : "stock.png",
        desc:"Utilized diverse data of major stocks, applied Linear Regression, LSTM, and Yahoo Finance data. Achieved an impressive 94% average accuracy in testing and evaluating trained models.",
        link :"https://github.com/Arya161/Stock_Market_Prediction_Analysis-Machine_Learning"
    },
];

const Single = ({item}) =>{

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
   // offset : ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-100,100]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref = {ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noreferrer"><button>Explore</button></a>
            </motion.div>
            </div>
        </div>
        </section>
};

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end" , "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio" ref = {ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item = {item} key = {item.id}/>
        ))}
    </div>
  )
}

export default Portfolio