import React from "react";
 import SearchPresenter from "./SearchPresenter";
 import { moviesApi, tvApi } from "../../api";

 export default class extends React.Component {
   state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
     error: null,
   };

   //handleSubmit 이라는 함수를 Presenter한테 넘겨줌으로써 Search기능이 불려지도록 구현하였다. !!!!!
   //handleSubmit 은 React의 event 로 인해서 불리는 함수이기 때문에, 특정 event가 handleSubmit으로 날아오게될 것이 자명하다.
   handleSubmit = (event) => {
     event.preventDefault(); //Submit시에 자동으로 날아가는것(refresh)이 Default였지만 그것을 막아버림
     const { searchTerm } = this.state; //Search Container의 Props를 가져와서
     if (searchTerm !== "") {
       this.searchByTerm(); //반칸이 아니면 SearchByTerm 호출
     }
   };

//updateTerm함수가 불릴때마다, 한글자한글자마다 state의 searchTerm에다가 넣어서 저장하게된다. 그래서 두글자 이상이 input창에 입력될수 있는것이다.
   updateTerm =(event)=>{
    const {target:{value}}=event;
    console.log(value); 
      this.setState({
        searchTerm:value
      })
    };

   //0806 당연한거... ComponentDidMount를 해야지 이 SearchContainer Component가 생성이될때 SearchByTerm이 불리지.. 안그러면 안불려..
   /*componentDidMount(){
     this.searchByTerm();
   }
   */

   searchByTerm = async () => {
     const { searchTerm } = this.state; //Props:SearchTerm 가져와서

     this.setState({ loading: true });

     try {
       const {
         data: { results: movieResults }
       } = await moviesApi.search(searchTerm);

       const {
         data: { results: tvResults }
       } = await tvApi.search(searchTerm);

       this.setState({
         movieResults,
         tvResults
       });
     } catch {
       this.setState({ error: "Can't find results." });
     } finally {
       this.setState({ loading: false });
     }
   };

   render() {
     const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    
 //    console.log(this.state);
     return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
         searchTerm={searchTerm}
         loading={loading}
         error={error}
         handleSubmit={this.handleSubmit}
         updateTerm={this.updateTerm}
       />
     );
   }
  }