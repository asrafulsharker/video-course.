import React,{Component} from 'react';
import fire from '../../config/fire';
import './Login.css';
class Login extends Component{
    constructor(props)
    {
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password: "",
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="container" style={{padding:"100px 0px" }}>
                <form>
                                     <input 
                                     
                                        onChange={this.handleChange}
                                        className="reg-type" 
                                        name="email"
                                        type="email" 
                                        placeholder="Email"
                                        value={this.state.email}
                                        />
                                        <input 
                                        onChange={this.handleChange}
                                        className="reg-type" 
                                        name="password"
                                        type="password"
                                        onChange={this.handleChange}
                                        id="Password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        />
                    <button className="log-btn" onClick={this.login}>Login</button>
                    <button className="reg-btn" onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}

export default Login;