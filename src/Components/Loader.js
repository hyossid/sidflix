import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

height :100vh;
width:100vw;
display:flex;
justify-contents:center;

`;

export default ()=>
<Container>
<span role="img" aria-label="Loading">
   "Loading!!!!!!!" 
</span>
</Container>



//load 가 항상되야함 .length, .map 같은건 반드시 stage 를 loading,loaded 두단계로 생각을하자!!!

