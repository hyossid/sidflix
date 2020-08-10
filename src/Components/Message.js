import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width : 100vw;
    display : flex;             //div는 기본적으로 display block인데
    justify-contents : center;   
`;

const Text = styled.span`

    color : &{props.color};         //color을 props를 통해서 받아왔다.
    font-weight : 600;
`;

const Error =({text,color}) => (

    <Container>
        <Text color={color}>{text}</Text>
    </Container>    
)


Error.propTypes={
    text:Proptypes.string.isRequired,
    color:Proptypes.string.isRequired
}

export default Error;