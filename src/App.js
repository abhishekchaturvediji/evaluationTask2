import React from 'react';
import  "./App.css";
import LoginForm from "./Components/Form";
import img  from "./Assets/Asset 2.png";

function App() {
  return (
    <div className="container">

      <div className="left">
        <img src={img} alt="" />
        <div className="text">
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsa doloribus sed optio a hic voluptate quod qui accusamus corporis illo minus magnam tempore sit repudiandae</p>
        </div>
      </div>
      <div className="right">
        <LoginForm/>
      </div>  

    </div>
  )
}

export default App
