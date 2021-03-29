import './App.css';
import IntroPage from './pages/into'
import Footer from './pages/footer'

function App() {
  return (
    <div className="app">
      <div className="parallax-bg"/>
      <div className="content">
        <IntroPage></IntroPage>
        
        <div className="section-a">
          <h2>Section A</h2>
        </div>

        <div className="section-x">
          <h2>Section X</h2>
        </div>

        <Footer/>      
      </div>
    </div>
  );
}

export default App;
