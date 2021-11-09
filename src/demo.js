import React from "react";
import ReactDOM from "react-dom";

const Header =(
  <header>header</header>
)
const Header2 = function(props){
  return(
    <header>
      header{props.name}
    </header>
  )
}

const div = (
  <div>
    {Header}
    <Header2 name='我是head'/>
    <p>
      <span>'这是一段话‘</span>
    </p>
  </div>
)

ReactDOM.render(div,document.getElementById('root')) 