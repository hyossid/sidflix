import React from "react";
import TVPresenter from "./TVPresenter.js";
import {tvApi} from "api";

export default class extends React.Component{

    state={
        topRated:null,
        airingToday:null,
        popular:null,
        error: null,
        loading: true
    }

    async componentDidMount(){

        try {
            // lst 를 가져오기 
            const {data :{results : topRated}} = await tvApi.topRated();    //state 안의 값들에 데이터를 직접 넣었구나.
            const {data :{results : airingToday}} = await tvApi.airingToday();
            const {data :{results : popular}} = await tvApi.popular();
//            throw Error();

            this.setState(
                {topRated : topRated,
                    airingToday : airingToday,
                    popular : popular
                 }
            )
     
        } catch (error) {
            this.setState(
                {
                    error : "Something not gone correct"
                }
            )
        } finally{
            this.setState(
                {
                    loading : false
                }
            )
        }

    }

    render(){
        const {topRated, airingToday, popular,error,loading}=this.state;
        console.log(this.state);
        return <TVPresenter 
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
        />
    }

}