import React from 'react';

import './connections.css'
import {curve} from './curve';



class Connections extends React.Component{
	onConnectionClick = (c) =>{
		
	}
	onConnectionHover = (c,e) =>{
		e.target.setAttribute('stroke-width',6)
	}
	onConnectionLeave = (c,e) =>{
		e.target.setAttribute('stroke-width',3)
	}
	render(){
		var {src , tgt , connectionId}  = this.props
		return (
		   
			    <svg id = {connectionId} key = {connectionId} style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
					{/* Main line */}
					  <path
						onClick = {()=>{this.onConnectionClick(connectionId)}}
						onMouseEnter = {(e)=>{this.onConnectionHover(connectionId,e)}}
						onMouseLeave = {(e)=>{this.onConnectionLeave(connectionId,e)}}
						d={curve({x:src.x,y:src.y}, {x:tgt.x,y:tgt.y})}
						stroke="blue"
						strokeWidth="3"
						fill="none"
					  />
				</svg>
				
				
		   
		   
		  );
	}
 
}

export default Connections;
