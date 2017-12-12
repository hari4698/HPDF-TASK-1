import React from 'react';
import ReactDOM from 'react-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import curry from './images/curry.jpg'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import messi from './images/messi.jpg'
import messi1 from './images/messi1.jpg'
import ozil from './images/ozil.jpg'
import ronaldoBall from './images/ozil1.jpg'
import CommentIcon from 'material-ui/svg-icons/communication/comment'
import {orange500, blue500, red500, green500} from 'material-ui/styles/colors';
import RetweetIcon from 'material-ui/svg-icons/av/repeat';
import LikeIcon from 'material-ui/svg-icons/action/thumb-up';
import griezmann from './images/griezmann.jpg'
import ronaldo from './images/ronaldo.jpg'
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
  height: 200,
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
    fontWeight:'bold'
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
  online:'none'
}  


const CardExampleWithAvatar = () => (
  <div  style={{overflow:'hidden',clear:'right'}}>
    <div  style={{float:'left',width:'26%'}}>
          <Paper style={firstPaper} zDepth={1} >
            <div style={{backgroundColor:'#1DA1F2',width:275,height:100}}>
                <div><Avatar src={curry} style={{marginLeft:5,marginTop:73,border: 0, objectFit: 'cover'}} size={50} /></div>
            </div>
            <div className='list'>
              <h4 style={{textAlign:'center',marginTop:5,marginLeft:10,marginBottom:8,lineHeight:'90%'}} >Stephen Curry</h4>
              <span style={{textAlign:'center',margin:0, display:'block',lineHeight:'0%',paddingRight:0, fontSize: 13,color:'B2B2B2'}} >@StephenCurry30</span>
            </div>
            <div style={{marginTop:20,marginLeft:20,fontSize: 13}} >
              <div className='list' style={{float:'left',width:'33%',color:'#939393'}} >Tweets<br/><span style={{textAlign:'left',marginTop:10, display:'block',lineHeight:'0%',paddingRight:14, fontSize: 18,color:blue500}} >6,819</span></div>
              <div className='list' style={{display:'inline-block',width:'33%',color:'#939393'}} >Following<br/><span style={{textAlign:'left',marginTop:10, display:'block',lineHeight:'0%',paddingRight:18, fontSize: 20,color:blue500}} >713</span></div>
              <div className='list' style={{float:'right',width:'33%',color:'#939393',onHover:blue500}} >Followers<br/><span style={{textAlign:'left',marginTop:10, display:'block',lineHeight:'0%',paddingRight:18, fontSize: 20,color:blue500}} >11.7M</span></div>
            </div>
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
    <div style={{display:'inline-block',width:'16%',marginRight:0}} >
          <Paper style={whatsHappeningPaper} zDepth={1} > 
              <Avatar src={curry}  size={30} style={{marginLeft:15,marginTop:10,border: 0, objectFit: 'cover'}} />
              <input type="text" placeholder="What's happening?" style={inputElement}/>
          </Paper> 
          <Card style={{width:650,border: 0, objectFit: 'cover'}}>
            <CardHeader
              title="Lionel Messi"
              subtitle="@TeamMessi"
              avatar={messi}
              showExpandableButton={true}
                          />
            <CardText>
            Lace up like Leo.<br/>
The ultimate stage awaits.⚽⚡ <br/>
<span className='list'>#NEMEZIZ #HereToCreate</span>
            </CardText>              
            <CardMedia>
              <img src={messi1} alt="" />
            </CardMedia>
            
            <CardActions>
              <CommentIcon hoverColor={blue500} style={{marginLeft:25,marginRight:30}}/>
              <RetweetIcon hoverColor={green500} style={{marginLeft:15,marginRight:30}}/>
              <LikeIcon hoverColor={red500} style={{marginLeft:15,marginRight:30}}/>
            </CardActions>
          </Card>
          <Card style={{width:650}}>
            <CardHeader
              title="Mesut Ozil"
              subtitle="@MesutOzil1088"
              avatar={ozil}
              showExpandableButton={true}
                          />
            <CardText>
            YA GUNNERS YA! 😎 Massive derby win 👊🏼💥 NORTH LONDON. IS. RED. 🔴 #COYG @Arsenal @premierleague
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
    </div>
    <div id="whotofollow"  style={{float:'right',width:'25%',marginLeft:20,marginRight:0}}>
        <Paper style={style3} zDepth={1} >
        <span style={{marginBottom:10,marginLeft:15,marginTop:20,fontSize:20,fontWeight:'bold',display:'inline-block'}}>Who to follow</span>
                <span style={{fontSize:12,color:'#1DA1F2',marginLeft:5}} className='list'  >Refresh  </span>
        <List>
          <ListItem
            primaryText="Cristiano Ronaldo"
            leftAvatar={<Avatar src={ronaldo} style={{border: 0, objectFit: 'cover'}} size={40} />}
           />
          <Divider />
          <ListItem
            primaryText="Mesut Ozil"
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