import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container=styled.div`
padding : 10px;
`;


const TVPresenter =({topRated,
    airingToday,
    popular,
    error,loading})=>loading ? (<Loader />):
(<Container>
    <Helmet><title>Sidflix | TV</title></Helmet>

{topRated&&topRated.length>0&&                  //topRated 가 정상적으로 들어오면,  // return하는 부분만 span했어야지!! 
(<Section title ="TopRated Shows">              
{topRated.map(show=> 
                <Poster key={show.id} id={show.id} 
                title={show.original_name} rating={show.vote_average} 
                imageUrl={show.poster_path} 
                year={show.first_air_date&&show.first_air_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={false}/>)}
</Section>)}

{popular&&popular.length>0&&                //Section에 prop으로 title 과 Children 전달했다. 
(<Section title ="Popular Shows">   
{popular.map(show=> 
                <Poster key={show.id} id={show.id} 
                title={show.original_name} rating={show.vote_average} 
                imageUrl={show.poster_path} 
                year={show.first_air_date&&show.first_air_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={false}/>)}       
</Section>)}

{airingToday&&airingToday.length>0&&
(<Section title ="Airing Today">
{airingToday.map(show=>show.name)}
</Section>)}

{error&&(<Message color="#e74c3c" text={error} />)}            

</Container>);

//얘를 왜 반드시 객체로 싸 줘야되지????


TVPresenter.propTypes ={
    topRated : Proptypes.array,
    airingToday : Proptypes.array,
    popular : Proptypes.array,
    error : Proptypes.string,
    loading : Proptypes.bool.isRequired
}
export default TVPresenter;