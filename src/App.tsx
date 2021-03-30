import './App.css';
import IntroPage from './pages/into/into'
import Footer from './pages/footer/footer'
import Contact from './pages/contact/contact'
import About from "./pages/about/about"
import Projects from "./pages/projects/projects"


function App() {
  return (
    <div className="app">
      <div className="parallax-bg"/>
      <div className="content">
        <IntroPage/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>      
      </div>
    </div>
  );
}

export default App;
