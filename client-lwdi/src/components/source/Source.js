import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import './source.css';

import {
		addSource,
		updateListWidth,
		mouseDownConnection,
		mouseUpConnection,
		mouseMoveConnection
	} from './../actions'

import {curve} from './../connections/curve';

import SourceList from './SourceList';
import SourceDetails from './SourceDetails';
import Connections from './../connections/Connections';


class Source extends React.Component{
	
	componentDidMount(){
		var elm = ReactDOM.findDOMNode(this.refs.entityListingContainer);
		this.props.updateListWidth(elm.clientWidth, ReactDOM.findDOMNode(this.refs.flowChartContainer).getBoundingClientRect().top);
	}
	
	onDragOver = (e)=>{
		e.preventDefault();
		
	}
	
	onDrop = (e,tgt) => {
		
		let id = e.dataTransfer.getData("id");
		if(id !=null && id !==""){
			this.props.addSource(this.props.sourceMap[id]);
		}
		e.dataTransfer.setData("id",null);
	}

	renderSourceDetails = () => {
		var srcArr = [];
		
		this.props.entities.forEach((s)=>{
			srcArr.push(
				<SourceDetails
					type  = {s.type}
					name  = {s.name}
					nodeId = {s.nodeId}
					key = {s.nodeId}
				
				></SourceDetails>
			)
		});
		
		return srcArr;
	}
	
	handleMouseDown = (e) =>{
		e.preventDefault();
	}
	handleMouseMove = (e) =>{
		e.preventDefault();
		//handle drop connections
		this.props.mouseMoveConnection(e,this.props.listWidth,this.props.listHeight);
		
	}
	
	handleMouseUp = (e) =>{
		//e.mouseEvent.button
		this.props.mouseUpConnection();
	}
	
	drawExistingConnections = () => {
		var c = [];
		
		this.props.connectionList.forEach((t)=>{
			
			
			c.push( <Connections 
				src = {t.src}
				tgt = {t.tgt}
				connectionId = {t.connectionId}>
			</Connections>  )
		});
		return c; 
	}
	
	render(){
		
		return (
			<div className = "entity-container">
				<div ref = "entityListingContainer" className = "droppable vfs-draggable" onDragOver = {(e)=>this.onDragOver(e)}>
					<h4 className = "headers">
						Entities
					</h4>
					<SourceList/>
				</div>
				<div className = "droppable vfs-flowchart">
					<h4 className = "headers">
						Flowchart
					</h4>
					
					<div
						ref = "flowChartContainer"
						className = "flowCharContainer"
						onDragOver = {(e)=>this.onDragOver(e)}
						onDrop = {(e)=>this.onDrop(e,"flowChart")}
						
						onMouseDown={this.handleMouseDown}
						onMouseMove={this.handleMouseMove}
						onMouseUp={this.handleMouseUp}
						
						>	
							<svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', top: 0, left: 0 }}>
								{/* Main line */}
								  <path
									d={curve({x:this.props.src.x,y:this.props.src.y}, {x:this.props.tgt.x,y:this.props.tgt.y})}
									stroke="red"
									strokeWidth="3"
									fill="none"
								  />
							</svg>
							{this.renderSourceDetails()}
							{this.drawExistingConnections()}
							
							
							
					</div>
				</div>
				
			</div>
		)
	}
	
}

const mapStateToProps = (state,ownState) =>{
	return {
		entities : state.flowChartSources?state.flowChartSources:[],
		sourceMap : state.sourceList.sourceMap?state.sourceList.sourceMap:{},
		src : state.connectionDetails.src ? state.connectionDetails.src : {x: 0 ,y : 0},
		tgt : state.connectionDetails.tgt ? state.connectionDetails.tgt : {x: 0 ,y : 0},
		connectionList :  state.connectionDetails.connectionList ? state.connectionDetails.connectionList : [],
		listWidth : state.listDim.w,
		listHeight : state.listDim.h
	}
}

export default connect(mapStateToProps,{
	addSource : addSource,
	mouseDownConnection : mouseDownConnection,
	mouseUpConnection : mouseUpConnection,
	mouseMoveConnection : mouseMoveConnection,
	updateListWidth : updateListWidth
})(Source);