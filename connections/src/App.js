import React from 'react';

import './App.css'
import {curve} from './curve';


class App extends React.Component{
	constructor(){
		super();
		//state init
		this.state = {
		  isDrawing: false,
		  targetFound: false,
		  src : {
			  x : 0,
			  y : 0
		  },
		  tgt : {
			  x : 0,
			  y : 0
		  }
		  
		};
	}
	handleMouseDownOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.setState({
			isDrawing : true,
			src : {
				  x : e.clientX,
				  y : e.clientY-10
			  }
		})
		
	}
	handleMouseMoveOnNode = (e) =>{
		//handle drop connections
		e.preventDefault();
		if(this.state.isDrawing){
			this.setState({
				targetFound : true
			})
		}
	}
	
	handleMouseUpOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.setState({
			isDrawing : false,
			tgt : {
				  x : e.clientX,
				  y : e.clientY-10
			  }
		});
		
	}
	
	handleMouseOutOnNode = (e) =>{
		e.preventDefault();
		if(this.state.isDrawing){
			this.setState({
				targetFound : false
			})
		}
	}
	
	handleMouseDown = (e) =>{
		e.preventDefault();
	}
	handleMouseMove = (e) =>{
		e.preventDefault();
		//handle drop connections
		if(this.state.isDrawing){
			this.setState({
				tgt : {
					  x : e.clientX,
					  y : e.clientY-10
				  }
			});
			
		}
		
	}
	
	handleMouseUp = (e) =>{
		//e.mouseEvent.button
		this.setState({
			isDrawing : false
		})
		if(!this.state.targetFound){
			this.setState({
				src : {
					  x : 0,
					  y : 0
				  },
				tgt : {
					  x : 0,
					  y : 0
				  }
			});
		}
	}
	render(){
		return (
		   <div style  = {{width : "100%" , height : "300px"}}
				onMouseDown={this.handleMouseDown}
				onMouseMove={this.handleMouseMove}
				onMouseUp={this.handleMouseUp}>
				<div 
				className = "points"
				onMouseDown={this.handleMouseDownOnNode}
				onMouseMove={this.handleMouseMoveOnNode}
				onMouseUp={this.handleMouseUpOnNode}
				onMouseOut={this.handleMouseOutOnNode}
				
				>
			   </div>
			    <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
					{/* Main line */}
					  <path
						d={curve({x:this.state.src.x,y:this.state.src.y}, {x:this.state.tgt.x,y:this.state.tgt.y})}
						stroke="red"
						strokeWidth="3"
						fill="none"
					  />
				</svg>
				
				<div style   = {{position : "absolute" , left : "100px" , top : "100px"}}
				className = "points"
				onMouseDown={this.handleMouseDownOnNode}
				onMouseMove={this.handleMouseMoveOnNode}
				onMouseUp={this.handleMouseUpOnNode}
				onMouseOut={this.handleMouseOutOnNode}
				>
				</div>
			
		   </div>
		   
		   
		  );
	}
 
}

export default App;
