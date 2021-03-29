import './App.css';
import IntroPage from './pages/into'
import Footer from './pages/footer'
import Contact from './pages/contact'
import About from "./pages/about"
import Projects from "./pages/projects"


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
