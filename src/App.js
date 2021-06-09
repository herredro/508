import pic_side from './img/508_side.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <img 
          className="home_pic" 
          src={pic_side} 
          width={"300px"} 
        />
      </header>
      <div className='body'>
      </div>
      
    </div>
  );
}

export default App;
