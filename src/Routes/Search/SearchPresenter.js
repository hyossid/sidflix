import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
    padding : 0px 20px;
`;
const Form = styled.form`
    margin-bottom : 50px;
    width: 100%;
`;
const Input = styled.input`
    all: unset;     //input 에 unset 하면 background color 기본값 제거
    font-size : 30px;
    width: 100%;
`;


//만약 value에 searchTerm을 주지 않았더라면, 자바스크립트로 SearchTerm들을 컨트롤 하지 못하게 된다.
const SearchPresenter =({movieResults,
    tvResults,
    searchTerm,
    error,
    loading,
    handleSubmit,
    updateTerm
})=>(
<Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows.." value={searchTerm} onChange={updateTerm}/> 
    
    </Form>
    {loading ? (
       <Loader />
     ) : (
       <>
         {movieResults && movieResults.length > 0 && (
           <Section title="Movie Results">
               <Helmet><title>Sidflix | Movie Search</title></Helmet>
             {movieResults.map(movie => (
                <Poster key={movie.id} id={movie.id} 
                title={movie.original_title} rating={movie.vote_average} 
                imageUrl={movie.poster_path} 
                year={movie.release_date&&movie.release_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={true}/>
             ))}
           </Section>
         )}
         {tvResults && tvResults.length > 0 && (
           <Section title="TV Show Results">
               <Helmet><title>Sidflix | TV Search</title></Helmet>
             {tvResults.map(show =>  <Poster key={show.id} id={show.id} 
                title={show.original_name} rating={show.vote_average} 
                imageUrl={show.poster_path} 
                year={show.first_air_date&&show.first_air_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={false}/>)}
           </Section>
         )}
         {error&&(<Message color="#e74c3c" text={error} />)}

         {tvResults&& movieResults &&
           tvResults.length === 0 &&
           movieResults.length === 0 && (
             <Message text="Nothing found" color="#95a5a6" />
           )}
       </>
     )}
</Container>

);


SearchPresenter.propTypes ={
    movieResults : Proptypes.array,
    tvResults : Proptypes.array,
    searchTerm : Proptypes.string,
    error : Proptypes.string,
    loading : Proptypes.bool.isRequired,
    handleSubmit : Proptypes.func.isRequired,
    updateTerm : Proptypes.func.isRequired
}
export default SearchPresenter;