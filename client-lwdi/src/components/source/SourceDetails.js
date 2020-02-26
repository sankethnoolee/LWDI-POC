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
		mouseOutNode
	} from './../actions'
const classMapForSources = CLASS_MAP_FOR_SOURCES



class SourceDetail extends React.Component {
	//connection functions remove it after testing
	
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
	
	
	render(){
		var {type , name , nodeId} = this.props;
		return (
			<Draggable cancel = "div.connection-input-parent"
						start={{ left: 0, right: 0}}
						defaultPosition={{x: 0, y: 0}}
						bounds = "parent"
						key = {nodeId}
			>
						<div className = "drag-container" style = {{position: 'absolute', top: '0px', left: '0px'}}>
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
		listWidth : state.listDim.w,
		listHeight : state.listDim.h
	}
}

export default connect(mapStateToProps,{
	mouseMoveNode : mouseMoveNode,
	mouseDownNode : mouseDownNode,
	mouseUpNode : mouseUpNode,
	mouseOutNode : mouseOutNode
	
})(SourceDetail);