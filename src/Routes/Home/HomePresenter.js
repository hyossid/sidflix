
import React from 'react';
import Proptypes from 'prop-types';         //받아오는 props의 parameter형식을 받아옴.
import styled from 'styled-components';
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

    const Container = styled.div`
      padding: 20px;
      padding-top: 20px;
    `;
   

    //HomePresenter은 HomeContainer로부터 해당 parameter들을 props로 받아온 후 회면에 직접렌더링(상위레벨로 리턴)한다.
    const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
      loading ? <Loader /> : (                                                            //Loading이 False가되면!!!
        <Container>
            <Helmet><title>SidFlix | Movie</title></Helmet>
          {nowPlaying && nowPlaying.length > 0 && ( //nowPlaying값이 있고, nowPlaying의 길이가 길면, 
            <Section title="Now Playing">
              {nowPlaying.map(movie=>(
                //   <span key={movie.id}>
                //   {movie.title}
                //   </span>
                <Poster key={movie.id} id={movie.id} 
                title={movie.original_title} rating={movie.vote_average} 
                imageUrl={movie.poster_path} 
                year={movie.release_date&&movie.release_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={true}/>
              ))} 
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">
              {upcoming.map(movie => (
                //   <span key={movie.id}>
                //   {movie.title}
                //    </span> 
                <Poster key={movie.id} id={movie.id} 
                title={movie.original_title} rating={movie.vote_average} 
                imageUrl={movie.poster_path} 
                year={movie.release_date&&movie.release_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={true}/>
                  ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Movies">
                {popular.map(movie => (
              /* {popular.map(movie => movie.title)} */
              <Poster key={movie.id} id={movie.id} 
                title={movie.original_title} rating={movie.vote_average} 
                imageUrl={movie.poster_path} 
                year={movie.release_date&&movie.release_date.substring(0,4)}    // 반드시 이 변수가 null이 아니도록!
                isMovie={true}/>
                ))}
            </Section>
          )}
        {
            error&&(<Message color="#e74c3c" text={error} />)
        }
        </Container>
      );

HomePresenter.propTypes ={                          //반드시 여기서 대소문자를 잘지켜야한다.
    nowPlaying : Proptypes.array,
    upcoming : Proptypes.array,
    popular : Proptypes.array,
    error : Proptypes.string,
    loading : Proptypes.bool.isRequired
}

export default HomePresenter;       //반드시 HomePresenter Export 해주야지 이전에는 HomePresenter 이 없었으니까 그렇게 한거고


