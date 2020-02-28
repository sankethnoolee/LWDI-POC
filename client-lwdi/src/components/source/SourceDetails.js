import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'react-redux';
import _ from 'lodash';
import './source.css';

import {
	CLASS_MAP_FOR_SOURCES
	
} from './../LWDIProps';
import {
		mouseMoveNode,
		mouseDownNode,
		mouseUpNode,
		mouseOutNode,
		updateConnections
	} from './../actions'
const classMapForSources = CLASS_MAP_FOR_SOURCES



class SourceDetail extends React.Component {
	
	/*
	TODO : 
	
	currently on drop of target is removed 
	and on start from src is removed
	
	
	ideal way to handle back flush auto connect to src n targets if the node is matched
		
	
	*/
	
	
	//connection functions remove it after testing
	componentDidMount(){
		
		this.setState({nodeId : this.props.nodeId})
	}
	
	handleMouseDownOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.props.mouseDownNode(e, this.props.listWidth ,this.props.listHeight);
		
	}
	handleMouseMoveOnNode = (e) =>{
		//handle drop connections
		e.preventDefault();
		this.props.mouseMoveNode(e , this.props.listWidth,this.props.listHeight);
	}
	
	handleMouseUpOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.props.mouseUpNode(e , this.props.listWidth,this.props.listHeight);
		
		
	}
	
	handleMouseOutOnNode = (e) =>{
		e.preventDefault();
		this.props.mouseOutNode(e , this.props.listWidth,this.props.listHeight);
	}
	
	  onStart = (nid) => {
		//console.log(nid);
	  };

	  onStop = (nid) => {
		//console.log(nid);
	  };
	  
	  onDrag = (nid,e) => {

		this.props.updateConnections(this.props.connections,nid,e , this.props.listWidth,this.props.listHeight, document.getElementById(nid).getBoundingClientRect(),document.getElementById(nid));
	  };
	
	
	render(){
		var {type , name , nodeId , yInit , xInit} = this.props;
		const dragHandlers = {onStart: ()=>{this.onStart(nodeId)}, onStop: ()=>{this.onStop(nodeId)} , onDrag : (e)=>{this.onDrag(nodeId,e)}};
		return (
			<Draggable {...dragHandlers} 
						cancel = "div.connection-input-parent,div.connection-output-parent"
						
						key = {nodeId}
			>
						<div id  = {nodeId} className = "drag-container" style = {{position: 'absolute', top: yInit+"px", left: xInit+"px"}}>
							<div node-id = {nodeId} className = "connection-input-parent"
							
								//onMouseDown={this.handleMouseDownOnNode}
								onMouseMove={this.handleMouseMoveOnNode}
								onMouseUp={this.handleMouseUpOnNode}
								onMouseOut={this.handleMouseOutOnNode}
							
							><div className="input-connection"></div></div>
							<div 
								className = {classMapForSources[type]}
							>
								 <div className  = "vfs-entity-header">
									<div className  = "vfs-entity-name">{name}</div>
									<div> <i className = "icon cogs"></i></div>
								</div>
								<div className = "additional-info">{nodeId}</div>
							
							</div>
							<div node-id = {nodeId} className = "connection-output-parent"
							
								onMouseDown={this.handleMouseDownOnNode}
								//onMouseMove={this.handleMouseMoveOnNode}
								//onMouseUp={this.handleMouseUpOnNode}
								onMouseOut={this.handleMouseOutOnNode}
							
							><div className="output-connection"></div></div>
						</div>
			</Draggable>
		
		);
	}
	
}

const mapStateToProps = (state ,  ownState) => {
	return {
		listWidth : state.listDim.w,
		listHeight : state.listDim.h,
		connections : state.connectionDetails.nodeToConnectionMap?state.connectionDetails.nodeToConnectionMap[ownState.nodeId] : []
		
	}
}

export default connect(mapStateToProps,{
	mouseMoveNode : mouseMoveNode,
	mouseDownNode : mouseDownNode,
	mouseUpNode : mouseUpNode,
	mouseOutNode : mouseOutNode,
	updateConnections : updateConnections
	
})(SourceDetail);