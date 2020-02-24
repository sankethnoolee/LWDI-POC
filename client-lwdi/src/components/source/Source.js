import React from 'react';
import {connect} from 'react-redux';
import './source.css';

import {addSource} from './../actions/SourceAction'


import SourceList from './SourceList';
import SourceDetails from './SourceDetails';


class Source extends React.Component{
	onDragOver = (e)=>{
		e.preventDefault();
		
	}
	
	onDrop = (e,tgt) => {
		let id = e.dataTransfer.getData("id");
		
		this.props.addSource(this.props.sourceMap[id]);
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
	
	render(){
		return (
			<div className = "entity-container">
				<div className = "droppable vfs-draggable" onDragOver = {(e)=>this.onDragOver(e)}>
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
						className = "flowCharContainer"
						onDragOver = {(e)=>this.onDragOver(e)}
						onDrop = {(e)=>this.onDrop(e,"flowChart")}>
							{this.renderSourceDetails()}
					</div>
				</div>
				
			</div>
		)
	}
	
}

const mapStateToProps = (state,ownState) =>{
	return {
		entities : state.flowChartSources?state.flowChartSources:[],
		sourceMap : state.sourceList.sourceMap?state.sourceList.sourceMap:{}
	}
}

export default connect(mapStateToProps,{
	addSource : addSource
})(Source);