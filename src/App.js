import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import a from './assets/image/Electrical.jpg'
function App() {
  return (
    <div style={{ padding: 5 }}>
      <Navbar />
      <div >
      <div className="App">
      <h2>My first Project of react</h2>
      </div>
        <img src={a} alt="Not display" style={{backgroundSize:'cover',width:'100%'}}/>
      </div>
      
    <aside style={{textAlign: 'right'}} >
      You can search
    </aside>
    
    <h2 style={{textAlign: 'left', border: '2px solid Tomato'}}>
      Electrical:-
    </h2>
    <p style={{textAlign: 'left', border: '2px solid DodgerBlue'}} >
      This is the page for support the students to easy to understand electrical problems.
      <br/>You can also take gauidance and motivation about Electrical Engineering. 
    </p>
      
    </div>
    
  );
}

export default App;
