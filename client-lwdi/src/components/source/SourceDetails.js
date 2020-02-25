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
		mouseDownConnection,
		mouseUpConnection,
		mouseMoveConnection
	} from './../actions'
const classMapForSources = CLASS_MAP_FOR_SOURCES



class SourceDetail extends React.Component {
	//connection functions remove it after testing
	
	handleMouseDownOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.props.mouseDownNode(e);
		
	}
	handleMouseMoveOnNode = (e) =>{
		//handle drop connections
		e.preventDefault();
		this.props.mouseMoveNode(e);
	}
	
	handleMouseUpOnNode = (e) =>{
		//e.mouseEvent.button
		e.preventDefault();
		this.props.mouseUpNode(e);
		
		
	}
	
	handleMouseOutOnNode = (e) =>{
		e.preventDefault();
		this.props.mouseOutNode(e);
	}
	
	handleMouseDown = (e) =>{
		e.preventDefault();
	}
	handleMouseMove = (e) =>{
		e.preventDefault();
		//handle drop connections
		this.props.mouseMoveConnection(e)
		
	}
	
	handleMouseUp = (e) =>{
		//e.mouseEvent.button
		this.props.mouseUpConnection();
	}
	
	
	
	render(){
		var {type , name , nodeId} = this.props;
		return (
			<Draggable cancel = "div.connection-input-parent"
						start={{ left: 0, right: 0}}
						defaultPosition={{x: 0, y: 0}}
						bounds = "parent"
						key = {nodeId}
			>
						<div className = "drag-container">
							<div className = "connection-input-parent"
							
								onMouseDown={this.handleMouseDownOnNode}
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
							<div className = "connection-output-parent"
							
								onMouseDown={this.handleMouseDownOnNode}
								onMouseMove={this.handleMouseMoveOnNode}
								onMouseUp={this.handleMouseUpOnNode}
								onMouseOut={this.handleMouseOutOnNode}
							
							><div className="output-connection"></div></div>
						</div>
			</Draggable>
		
		);
	}
	
}

const mapStateToProps = (state ,  ownState) => {
	return {
		
	}
}

export default connect(mapStateToProps,{
	mouseMoveNode : mouseMoveNode,
	mouseDownNode : mouseDownNode,
	mouseUpNode : mouseUpNode,
	mouseOutNode : mouseOutNode,
	mouseDownConnection : mouseDownConnection,
	mouseUpConnection : mouseUpConnection,
	mouseMoveConnection : mouseMoveConnection
	
})(SourceDetail);