import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from "Components/App";
import "./api";

//console.dir(Component);


//ReactDOM, 즉 흔히 말하는 React는 APP Component를 실행한다. 
//프로젝트의 메인 html 파일은 비어있는데, 그 비어있는 html파일의 body에는 div root가있다. 
//React는 그 div root에 Rendering을 시작한다.

ReactDOM.render(
    <App />,
  document.getElementById('root') //react
);
