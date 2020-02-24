import React from 'react';

import './connections.css'
import {curve} from './curve';



class Connections extends React.Component{
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
		  },
		  connections : []
		  
		};
	}
	handleMouseDownOnNode = (e) =>{
		//e.mouseEvent.button
		console.log(e.target.getAttribute('test-attr'))
		e.preventDefault();
		this.setState({
			isDrawing : true,
			src : {
				  x : e.clientX,
				  y : e.clientY-10
			  },
			tgt : {
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
		const finalConnectionDetails = {src : this.state.src,tgt : this.state.tgt}
		
		this.setState({
			isDrawing : false,
			tgt : {
				  x : e.clientX,
				  y : e.clientY-10
			  },
			  connections : [...this.state.connections , finalConnectionDetails]
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
	renderExistingConnections = () => {
		var cList = [];
		this.state.connections.forEach((c,i)=>{
			 cList.push(
			 <svg key = {i} style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
					{/* Main line */}
					  <path
						d={curve({x:c.src.x,y:c.src.y}, {x:c.tgt.x,y:c.tgt.y})}
						stroke="yellow"
						strokeWidth="3"
						fill="none"
					  />
			</svg>
			);
		})
		return cList;
	}
	render(){
		return (
		   <div style  = {{width : "100%" , height : "300px"}}
				onMouseDown={this.handleMouseDown}
				onMouseMove={this.handleMouseMove}
				onMouseUp={this.handleMouseUp}>
				<div  style   = {{position : "absolute" , left : "400px" , top : "200px"}}
					className = "points"
					test-attr = "123123"
					onMouseDown={this.handleMouseDownOnNode}
					onMouseMove={this.handleMouseMoveOnNode}
					onMouseUp={this.handleMouseUpOnNode}
					onMouseOut={this.handleMouseOutOnNode}
				
				>
			   </div>
			   {this.renderExistingConnections()}
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
				test-attr = "123123222"
				onMouseDown={this.handleMouseDownOnNode}
				onMouseMove={this.handleMouseMoveOnNode}
				onMouseUp={this.handleMouseUpOnNode}
				onMouseOut={this.handleMouseOutOnNode}
				>
				</div>
				
				<div style   = {{position : "absolute" , left : "300px" , top : "100px"}}
				className = "points"
				test-attr = "123123222"
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

export default Connections;
