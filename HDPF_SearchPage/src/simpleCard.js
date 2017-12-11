import React from 'react';
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import img from './images/nbalogo.png'
import curry from './images/curry.jpg'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import messi from './images/messi.jpg'
import ozil from './images/download.png'
import ronaldoBall from './images/old.jpg'
import CommentIcon from 'material-ui/svg-icons/communication/comment'
import {orange500, blue500, red500, green500} from 'material-ui/styles/colors';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import LikeIcon from 'material-ui/svg-icons/action/thumb-up';
import griezmann from './images/griezmann.jpg'
import ronaldo from './images/ronaldo.jpg'
import aadhar from './images/aadhar.jpg'
import './style.css';

const rowStyle = {
  width:420,
   left:20,
    display: 'inline-block',
     marginRight: 40
}

const style2 = {
  height: 300,
  width: 275,
  marginLeft: 30,
  marginRight:0,
  
  display: 'inline-block',
};
const style3 = {
  height: 300,
  width: 250,
  marginLeft: 50,
  marginRight:0,
  marginTop:15,
  display: 'inline-block',
};
const firstPaper = {
  height: 220,
  width: 275,
  marginLeft: 30,
  marginRight:0,
  marginBottom:15,marginTop:15
};
const serPaper = {
  height: 50,
  width: 275,
  marginLeft: 30,
  marginRight:0,
  marginBottom:15,marginTop:15
};

const whatsHappeningPaper = {
  height: 50,
  width: 650,
  marginTop:15,
  backgroundColor:'#F2FAFE'
};
const timelinePaper = {
  width: 650,
  height:450
}
const liHashStyle = {
    color: '#1DA1F2',
    fontWeight:'bold',
    fontSize:13
}
const liTweetStyle = {
    fontSize: 10
  }
const inputElement = {
  color:'#66b3ff',
 position: 'absolute',  
 borderRadius:7,
 border: '#CBF0FE',
 marginTop:15,
 marginLeft:20,
  height:20,
  width:550,
  
}  


const CardExampleWithAvatar = () => (
  <div  style={{overflow:'hidden'}}>
    <div  style={{float:'left',width:'25%'}}>
              <Paper style={serPaper} zDepth={1} >
              <div style={{paddingTop:10}}>
                <span style={{marginBottom:0,marginLeft:10,marginTop:25,paddingTop:20,fontSize:20,fontWeight:'bold'}}>Search filters.</span>
                <span style={{fontSize:10,color:'#1DA1F2',marginLeft:5}} className='list'  >show </span>
                </div>
              </Paper>
              <Paper style={firstPaper} zDepth={1} >
              <h3 style={{marginBottom:0,marginLeft:10,marginTop:15,paddingTop:15}}>Related searches</h3>
              <ul  style={{listStyleType: 'none',
                marginLeft:5 ,
                padding: 0,
                float:'left'}}>
                <li className='list' style={liHashStyle}>Arsenal</li>
                
                <br/>
                <li className='list' style={liHashStyle}>Ozil</li>
                
                <br/>
                <li className='list' style={liHashStyle}>CR7</li>
                
                <br/>
                <li className='list' style={liHashStyle}>Laca</li>
                
                <br/>
                <li className='list' style={liHashStyle}>Messi</li>
                
              </ul>
            </Paper>

          <Paper style={style2} zDepth={1} >
            <h3 style={{marginBottom:0,marginLeft:10}}>Treads for you</h3>
            <ul  style={{listStyleType: 'none',
              marginLeft:5 ,
              padding: 0,
              float:'left'}}>
              <li className='list' style={liHashStyle}>#Arsenal</li>
              <li style={liTweetStyle}>100.9k Tweets</li>
              <br/>
              <li className='list' style={liHashStyle}>#Ozil</li>
              <li style={liTweetStyle}>60.7k Tweets</li>
              <br/>
              <li className='list' style={liHashStyle}>#CR7</li>
              <li style={liTweetStyle}>20.7k Tweets</li>
              <br/>
              <li className='list' style={liHashStyle}>#Laca</li>
              <li style={liTweetStyle}>30.7k Tweets</li>
              <br/>
              <li className='list' style={liHashStyle}>#Messi</li>
              <li style={liTweetStyle}>70.7k Tweets </li>
            </ul>
          </Paper>
    </div> 
    <div style={{display:'inline-block',width:'18%',marginRight:0}} >
          
          <Card style={{width:650,marginTop:15}}>
            <CardHeader
              title="Beebom"
              subtitle="@beebomco"
              avatar={ozil}
              showExpandableButton={true}
                          />
            <CardText>
            65-year-old Sajidha Begum has lost her sight and fingers, and she has no way of submitting the necessary fingerprints and iris scans.
<br/>In August, however, the Indian government sent a letter to her saying her pension was being taken away unless it was linked to an <b>Aadhaar</b> card. 
            </CardText>              
            <CardMedia>
              <img src={ronaldoBall} alt="" />
            </CardMedia>
            
            <CardActions>
              <CommentIcon hoverColor={blue500} style={{marginLeft:25,marginRight:30}}/>
              <RetweetIcon hoverColor={green500} style={{marginLeft:15,marginRight:30}}/>
              <LikeIcon hoverColor={red500} style={{marginLeft:15,marginRight:30}}/>
            </CardActions>
          </Card>
          <Card style={{width:650}}>
            <CardHeader
              title="Kiran Jonna"
              subtitle="@jackerHacker"
              avatar={ozil}
              showExpandableButton={true}
                          />
            <CardText>
            What’s this? UIDAI is finally admitting that the technology they’ve used ALL these years was putting the privacy of residents at risk?<br/>
            
            News flash: even the new registered device mechanism doesn’t do much to mitigate the privacy risk of biometrics in <b>Aadhaar</b>.
            </CardText>              
            <CardMedia>
              <img src={aadhar} alt="" />
            </CardMedia>
            <CardActions>
              <CommentIcon hoverColor={blue500} style={{marginLeft:25,marginRight:30}}/>
              <RetweetIcon hoverColor={green500} style={{marginLeft:15,marginRight:30}}/>
              <LikeIcon hoverColor={red500} style={{marginLeft:15,marginRight:30}}/>
            </CardActions>
          </Card>
    </div>
    <div  style={{float:'right',width:'26%',marginLeft:0}}>
        <Paper style={style3} zDepth={1} >
        <h3 style={{marginBottom:0,marginLeft:10}}>Who to follow</h3>
        <List>
          <ListItem
            primaryText="Cristiano Ronaldo"
            leftAvatar={<Avatar src={ronaldo} style={{border: 0, objectFit: 'cover'}} size={40} />}
           
          />
          <Divider />
          <ListItem
            primaryText="Beebom"
            leftAvatar={<Avatar src={ozil} style={{border: 0, objectFit: 'cover'}} size={40} />}
            
          />
          <Divider />
          <ListItem
            primaryText="Antonie Griezmann"
            leftAvatar={<Avatar src={griezmann} style={{border: 0, objectFit: 'cover'}} size={40} />}
            
          />
          <Divider />
          <ListItem
            primaryText="Lionel Messi"
            leftAvatar={<Avatar src={messi} style={{border: 0, objectFit: 'cover'}} size={40} />}
            
          />
          
        </List>
      
      </Paper>
    
    
    </div>    
     
  </div>
);




export default CardExampleWithAvatar;