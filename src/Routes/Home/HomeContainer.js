import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

 export default class extends React.Component {
   state = {
     loading: true
   };

   async componentDidMount() {

     try {
       const {
         data: { results: nowPlaying }      //results 라는 props의 이름을 nowPlaying으로 바꿨음
       } = await moviesApi.nowPlaying();    //async-await 하면 자바스크립트가 api 결과가 리턴될때까지(그것이 성공이든 실패든) 기다려준다.
       const {
           data: { results: upcoming }
        } = await moviesApi.upcoming();
        const {
            data: { results: popular }
        } = await moviesApi.popular();
        
        
        //받아온 api값으로 state로 
            this.setState({
              nowPlaying,
              upcoming,
              popular
            });
     } catch {
       this.setState({
         error: "Can't find movies information."
       });
     } finally {
       this.setState({
         loading: false
       });
     }
   }

   render() {
       //state로부터 변수값들을 받아온다음에, Home Presenter로 값을 넘겨버린다.
     const { nowPlaying, upcoming, popular, error, loading } = this.state;
     return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }


}