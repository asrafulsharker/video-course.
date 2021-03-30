import React,{Component} from 'react'
import fire from '../../../config/fire';
class Course extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    logout(){
        fire.auth().signOut();
    }
    render(){
        return (
            <div className="container" style={{padding:"100px 0px"}}>
               <h1 style={{textAlign:"center"}}>Your Course Here</h1>
                <button className="logout-btn" onClick={this.logout}>Logout</button>
            </div>
        )
    }

}

export default Course
