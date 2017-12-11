import React from 'react'
import ReactDOM from 'react-dom'
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import HomeIcon from 'material-ui/svg-icons/communication/message'
import Twitter from './images/icons8-twitter.svg'
import Search from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import curry from './images/curry.jpg'
import Avatar from 'material-ui/Avatar';

const sty = {
    backgroundColor : 'white',
    height: 50
    }

 const style1 = {
        backgroundColor:'#40b5f0',
        float: 'right'
    };

    const style = {
        marginRight:0,
        marginTop:10,
        marginBottom:5,
        float: 'right',
        };

export default class NavBar extends React.Component{
    render(){
        return(
            <div style={sty}>
            
                <IconButton tooltip="Home" style={{marginLeft:15,marginRight:30}}>
                        <ActionHome hoverColor={blue500} style={{marginLeft:15,marginRight:30}}/>
                    </IconButton>
                 <IconButton tooltip="Notifications" style={{marginLeft:15,marginRight:30}}>
                        <NotificationsIcon hoverColor={blue500} style={{marginLeft:15,marginRight:30}}/>
                    </IconButton>
                    <IconButton tooltip="Messages" style={{marginLeft:15,marginRight:30}}>
                        <HomeIcon hoverColor={blue500} style={{marginLeft:15,marginRight:30}} />
                    </IconButton>
                    
                    <img src={Twitter}  style={{marginLeft: 300,marginRight:0,marginTop:10}}/>
                    <RaisedButton label="tweet"   primary={true} style={style} />
                    <IconMenu
                         iconButtonElement={<IconButton tooltip="Profile &amp; Settings"><MoreVertIcon hoverColor={blue500} /></IconButton>}
                         anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
                         targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                         style = {style}
                         
                     >
                        
                        <MenuItem primaryText="Profile" />
                        <MenuItem primaryText="Lists" />
                        <MenuItem primaryText="Moments" />
                        <Divider  />
                        <MenuItem primaryText="Twitter ads" />
                        <MenuItem primaryText="Analytics" />
                        <Divider  />
                        <MenuItem primaryText="Help Center" />
                        <MenuItem primaryText="Settings and privacy" />
                        <MenuItem primaryText="Keyboard shortcuts" />
                        <MenuItem primaryText="Log out" /> 
                    </IconMenu>
                    
                    <TextField
                        hintText="Search"
                        underlineStyle={{borderColor: blue500}}
                        style={{float: 'right'}}/> 
                          
          </div>
        );
    }
}

