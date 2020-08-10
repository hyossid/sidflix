import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;


//styled-component를 사용해서, router의 요소인 Link를 사용하는법.
//Router 본연의 기능인 Link에 style 을 append하여 사용하기위해서 SLINK라는 새로운 이름으로 처리하였다.
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


//withRouter은 Component를 감싸는 녀석이다.
//이 Header을 외부에서 부르면 default로 withRouter이 불리게되는데 부르는 놈의 props를 withRouter을 통해서 받아올 수 있다.
//따라서 부를시점의 pathname을 가져오면, 링크에따라 어떤 페이지를 렌더링 할지 알고리즘을 정할 수 있다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));