import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";


//DetailContainer도 Component이므로 render()을 반드시 재정의해줘야한다.
export default class extends React.Component {


    
constructor(props){
        super(props);   //super(props)를 사용해서 부모 컴포넌트인 React의 Component props를 받아온것이다.
        const {location:{pathname}} =props;
//       console.log(props);                //router의 props임. 지금 현재위치를 때려잡아줄수있음 (어렵긴하네) 
//       console.log(this.props);           //똑같긴하더라
        this.state = {                              //constructor 안에서는 this.state을 해줘야한다. 
            result: null,
            error: null,
            loading: true,
            isMovie : pathname.includes("/movie/")
        }
  };

  async componentDidMount(){
 //   console.log(this.props);
    const {match:{params:{id}}, history : {push},
    } =this.props
    const {isMovie} = this.state;
//    const isMovie = pathname.includes("movie");
    const intgerID = parseInt(id);
    if(isNaN(intgerID)){
        //일단 return을 안하면 사용자를 다른페이지로 보내버리고 자바스크립트는 아래 있는 내용들을 실행해버린다.
        //push 는 react router 의 기능임!!!!!!!!!
        return push("/");        //이렇게 함으로써 깔끔하게 함수가 재시작 되도록 한다. 근데 정확히 시점이 어떻게되지? push가 url 넣고 render해주나?
    }


    let results = null; //movie 든 tv든 계속 덮어쓸것이기때문에
    try {
        if(isMovie){
 //           const request = await moviesApi.movieDetail(intgerID);
            ({data : results}=await moviesApi.movieDetail(intgerID)) //  이거 한줄로 처리도 가능 (let을 object destruct  하기)
 //           results = request.data;

        }else{
//            ({data:results}=await tvApi.showDetail(intgerID));
           const request = await tvApi.showDetail(intgerID);
           results = request.data;
        }
        
    } catch (error) {
        this.setState({
            error: "Can't find movies information."
          });
    }finally{
        this.setState({loading :false, results}); //results를 덮어쓴다.
    }



  }

  render() {
    const { results, error, loading } = this.state;
    return <DetailPresenter results={results} error={error} loading={loading} />;
  }
}

//아름이 안맞아서 개고생..results...

