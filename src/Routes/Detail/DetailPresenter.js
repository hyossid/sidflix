import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import {Link} from "react-router-dom";
//import YouTube from 'react-youtube';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;
const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
   border-radius: 5px;
 `;

 const Data = styled.div`
   width: 70%;
   margin-left: 10px;
 `;

 const Title = styled.h3`
   font-size: 32px;
 `;

 const ItemContainer = styled.div`
   margin: 20px 0;
 `;

 const Item = styled.span``;

 const Divider = styled.span`
   margin: 0 10px;
 `;

 const Overview = styled.p`
   font-size: 12px;
   opacity: 0.7;
   line-height: 1.5;
   width: 50%;
 `;
 const VideoLinkButton=styled.div`
 width: 250px;
 background-image: url(${props => props.bgImage});
 background-position: right bottom;
 background-size: cover;
 height: 300px;
  border-radius: 5px;
  opacity:1;
 `;

 const DetailPresenter = ({ results, loading, error }) =>
   loading ? (
     <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${results.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            results.poster_path
              ? `https://image.tmdb.org/t/p/original${results.poster_path}`
               : require("../../assets/freak.jpg")
           }
         />
         <Data>
           <Title>
             {results.original_title
               ? results.original_title
               : results.original_name}
           </Title>
           <ItemContainer>
             <Item>
               {results.release_date
                 ? results.release_date.substring(0, 4)
                 : results.first_air_date.substring(0, 4)}
             </Item>
             <Divider>•</Divider>
             <Item>
               {results.runtime ? results.runtime : results.episode_run_time[0]} min
             </Item>
             <Divider>•</Divider>
             <Item>
               {results.genres &&
                 results.genres.map((genre, index) =>
                   index === results.genres.length - 1
                     ? genre.name
                     : `${genre.name} / `
                 )}
             </Item>
             <Divider>•</Divider>
             <Item>
                 {                      // 변수와 문자를 같이 출력하고싶을때 항상이런식으로!!!! 백틱과$
                     results.vote_average?` ⭐️  ${results.vote_average} / 10` :<span>no votes</span>
                 }
            </Item>
           </ItemContainer>
           <Overview>{results.overview}</Overview>
           {/* <Link to="https://www.naver.com">
           <VideoLinkButton bgImage={
            results.production_companies.logo_path
 //             ? `https://image.tmdb.org/t/p/w300${results.production_companies.logo_path}`
                require("../../assets/freak.jpg")
           }/>
           </Link> */}
         </Data>
       </Content>
     </Container>
   );

   export default DetailPresenter;