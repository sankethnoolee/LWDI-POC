import React from 'react';
import './App.css';
import Draggable from 'react-draggable';
import _ from 'lodash';

import {nodeId} from './helpers/RandomIdGenerator';

const classMapForSources = {
	"RETURN" : "vfs-source-return",
	"CSV" : "vfs-source-csv",
	"DB_TABLE" : "vfs-source-db-table"
}
const classMapForSourcesShort = {
	"RETURN" : "vfs-source-return-short",
	"CSV" : "vfs-source-csv-short",
	"DB_TABLE" : "vfs-source-db-table-short"
}

class App extends React.Component{
	state = {
		sources : [
			{
				id : 1,
				name : "SBF",
				type : "RETURN"
			},{
				id : 2,
				name : "LCR",
				type : "RETURN"
			},{
				id : 3,
				name : "QMA",
				type : "RETURN"
			},{
				id : 4,
				name : "sample1.csv",
				type : "CSV"
			},{
				id : 5,
				name : "sample2.csv",
				type : "CSV"
			},{
				id : 6,
				name : "USERS",
				type : "DB_TABLE"
			},{
				id : 7,
				name : "C_FILE",
				type : "DB_TABLE"
			},
		],
		entities : [],
		connections : [],
		sourceMap : {},
		otherProps : []
		}
	onDragOver = (e)=>{
		e.preventDefault();
		
	}
	onDragStart = (e,id)=>{
		//ie fix required.
		//check prod build using ie polyfills
		e.dataTransfer.setData("id",id);
		
	}
	
	onDrop = (e,tgt) => {
		let id = e.dataTransfer.getData("id");
		this.setState({
			...this.state , entities : [...this.state.entities, {...this.state.sourceMap[Number(id)],"nodeId" :nodeId() }]
		});
		
	}
	
	
	renderSourceList = () => {
		var elmArr = [];
		this.state.sources.forEach((t)=>{
			 elmArr.push(
				<div 
					key = {t.id}
					onDragStart = {e=>this.onDragStart(e,t.id)} 
					draggable
					className = {`draggable entity-short ${classMapForSourcesShort[t.type]}`}
					>
					
					{t.name}
				</div>
			)
		}); 
		return elmArr;
	}
	
	componentDidMount(){
		var sourceMap =  _.keyBy(this.state.sources,"id");
		this.setState({
			...this.state , sourceMap : sourceMap
		});
	}
	render(){
		var flowchartDetails = {
			connections : [],
			entities : []
		}
		this.state.entities.forEach((t)=>{
				flowchartDetails.entities.push(
					<Draggable 
						bounds = "parent"
						key = {t.nodeId}>
						<div 
						className = {classMapForSources[t.type]}
						>
						 <div className  = "vfs-entity-header">
							<div className  = "vfs-entity-name">{t.name}</div>
							<div> <i className = "icon cogs"></i></div>
						</div>
						<div className = "additional-info">{t.nodeId}</div>
						
						</div>
					</Draggable>
				)
			
		});
		return (
			<div className = "entity-container">
				<div className = "droppable vfs-draggable" onDragOver = {(e)=>this.onDragOver(e)}>
					<h4 className = "headers">
						Entities
					</h4>
					{this.renderSourceList()}
				</div>
				<div className = "droppable vfs-flowchart">
					<h4 className = "headers">
						Flowchart
					</h4>
					<div
						onDragOver = {(e)=>this.onDragOver(e)}
						onDrop = {(e)=>this.onDrop(e,"flowChart")}
						style={{ position: 'relative', overflow: 'auto', padding: '10px', height : "80%", width : "100%"}}>
							{flowchartDetails.entities}
					</div>
					
				</div>
				
			</div>
		
		);
	}
	
}

export default App;