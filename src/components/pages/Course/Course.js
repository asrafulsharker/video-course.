import React,{Component} from 'react';
import { Card, Avatar ,Row} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import fire from '../../../config/fire';
import Logo from '../../../pondith1.png'
import 'antd/dist/antd.css'; 
const { Meta } = Card;
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
                <Row style={{marginTop:"30px"}}>
                <Card
                    style={{ width: 600 }}
                    cover={
                    <iframe src="https://drive.google.com/file/d/1C7KhhpcmX3hEvl4PF_yobgyqWbyMNxor/preview" height="300px"></iframe>
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<img style={{backgroundColor:"black",borderRadius:"50%",width:"40px",height:"40px" , padding:"8px"}} src={Logo}/>}
                    title="AI Batch1 Class(1)"
                    description="Pondith Online Learners"
                    />
                </Card>
                <Card
                    style={{ width: "600px",marginLeft:"auto" }}
                    cover={
                    <iframe src="https://drive.google.com/file/d/1C7KhhpcmX3hEvl4PF_yobgyqWbyMNxor/preview" height="300px"></iframe>
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                   avatar={<img style={{backgroundColor:"black",borderRadius:"50%",width:"40px",height:"40px" , padding:"8px"}} src={Logo}/>}
                    title="AI Batch1 Class(1)"
                    description="Pondith Online Learners"
                    />
                </Card>
                </Row>
                <Row style={{marginTop:"30px"}}>
                <Card
                    style={{ width: 600 }}
                    cover={
                    <iframe src="https://drive.google.com/file/d/1C7KhhpcmX3hEvl4PF_yobgyqWbyMNxor/preview" height="300px"></iframe>
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<img style={{backgroundColor:"black",borderRadius:"50%",width:"40px",height:"40px" , padding:"8px"}} src={Logo}/>}
                    title="AI Batch1 Class(1)"
                    description="Pondith Online Learners"
                    />
                </Card>
                <Card
                    style={{ width: "600px",marginLeft:"auto" }}
                    cover={
                    <iframe src="https://drive.google.com/file/d/1C7KhhpcmX3hEvl4PF_yobgyqWbyMNxor/preview" height="300px"></iframe>
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    
                    <Meta
                    avatar={<img style={{backgroundColor:"black",borderRadius:"50%",width:"40px",height:"40px" , padding:"8px"}} src={Logo}/>}
                    title="AI Batch1 Class(1)"
                    description="Pondith Online Learners"
                    />
                </Card>
                </Row>
                

                <button className="logout-btn" onClick={this.logout}>Logout</button>
            </div>
        )
    }

}

export default Course
