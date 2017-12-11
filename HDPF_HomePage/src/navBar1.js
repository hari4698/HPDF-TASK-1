import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import {orange500, blue500} from 'material-ui/styles/colors';

const sty = {
    backgroundColor : 'white',
      
    }

 const NavBar1 = () => (
     <div style={sty} >
        <Tabs style={{width: '35%'}} inkBarStyle={{backgroundColor:'#1DA1F2'}} >
                <Tab label="Top"
                contentContainerStyle={{width: '35%'}}
                style={{backgroundColor:'white',color:'#c7c7c7',width: '35%',}}
                >
                </Tab>
                
                <Tab label="Latest"contentContainerStyle={{width: '35%'}}
                style={{backgroundColor:'white',color:'#c7c7c7',width: '35%'}} >
                </Tab>
                <Tab label="People"contentContainerStyle={{width: '35%'}}
                style={{backgroundColor:'white',color:'#c7c7c7',width: '35%'}} >
                </Tab>
                <Tab label="Photos"contentContainerStyle={{width: '35%'}} 
                style={{backgroundColor:'white',color:'#c7c7c7',width: '35%'}}>
                </Tab>
                <Tab label="Vidoes"tabItemContainerStyle={{width: '35%'}}
                style={{backgroundColor:'white',color:'#c7c7c7',width: '35%'}} >
                </Tab>
        </Tabs> 
    </div>      
); 

export default NavBar1;