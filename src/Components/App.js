import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";



//React Component를 상속받은 컴포넌트는 반드시 render()를 재정의해주어야한다.
//Router 컴포넌트와 GlobalStyles를 차례로 실행한다.
//Global Styles는 앞으로 React를 통해서 Rendering 할 모든 요소들에 대해 기본 CSS를 적용시켜주는 라이브러리이다.

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;