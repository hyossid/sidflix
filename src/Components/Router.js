import React from "react";
import {
  HashRouter as Router,  //Router 의 한 종류로, computer/science 이런식으로 페이지 라우팅이된다. HashRouter은 중간에#이들어감
  Route,    //Route 하는 페이지
  Redirect, //특정 주소로 접근하면 강제로 다른 설정한 페이지로 이동하게끔 만들어주는 녀석
  Switch    //Router내에서 반드시 한개의 Route만 렌더링 되게끔 해주는 Routing 도구
} from "react-router-dom";

//Header은 페이지 이동과 무관하므로 Router 안에 넣되, <Switch> 밖에 넣어서 동시에 Rendering 되게끔 한다.
import Header from "Components/Header";
//Routing 할 페이지들
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail"

//compnent={Home} 을 하면 폴더내의 index.js가 default로 불려진다.

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);