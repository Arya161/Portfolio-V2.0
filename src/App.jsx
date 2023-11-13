import Test from "./Test";
import "./app.scss"
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div>
   <section  id="Home">
      <Navbar/>
      <Hero/>
      </section>
      <section id="About">
        <About/>
        </section>
    <section id="Experience">
      <Parallax type="experience"/>
      </section>
    <section>
      <Experience/>
      </section>
    <section id="Projects">
      <Parallax type="portfolio"/>
      </section>
   <Portfolio/>
<section id="Contact Me">
  <Contact/>
</section>
{/*<Test/>
<Test/>*/}
  </div>;
};

export default App;
