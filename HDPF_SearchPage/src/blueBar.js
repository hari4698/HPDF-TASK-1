import React from 'react'
import ReactDOM from 'react-dom'



const sty = {
padding: 10,
backgroundColor : '#1DA1F2',
color: 'white',
fontSize: 30,
fontWeight:'bold'

}

export default class BlueBar extends React.Component{
    render(){
        return(
            <div style={sty}><span style={{marginLeft:24}} > aadhaar </span>
                 
            </div>     
                )     ;
    }
}