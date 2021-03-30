import React, { Component } from 'react'
import fire from '../../config/fire';
import Course from '../pages/Course/Course';
import Login from './Login';
class auth extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            user: {}
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
            else{
                this.setState({user : null})
            }
        })
    }
    render(){
        return (
            <div>
                {this.state.user ? (<Course/>) : (<Login/>)}
            </div>
        )
    }

}

export default auth
