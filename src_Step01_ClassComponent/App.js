// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <h1>index page</h1>
//     </div>
//   );
// }

class App extends Component{
  // render() 메소드에서 리턴해주는 jsx를 활용해서 화면구성이됨

  

  render(){
    const boxStyle ={
      width:"100px",
      height:"100px",
      border:"1px solid red",
      backgroundColor:"blue",
      marginTop:"10px"
    }
    let myName = "kimmmm"
    return (
      <div className="container">
        <h1>index page</h1>
        <p>my name is <strong>{myName}</strong></p>
        <button onClick={()=>{
          alert("button click!!")
        }}>click this button</button>
        <div style={boxStyle}></div>
      </div>
    )
  }
  
}

export default App;
