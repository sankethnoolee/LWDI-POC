import React from 'react';

import {connect} from 'react-redux';
import {fetchSources} from './../actions';

import './source.css';

import _ from 'lodash';
import {
	CLASS_MAP_FOR_SOURCES_SHORT
	
} from './../LWDIProps';
const classMapForSourcesShort = CLASS_MAP_FOR_SOURCES_SHORT


class SourceList extends React.Component{
	
	componentDidMount() {
		this.props.fetchSources();
		var sourceMap =  _.keyBy(this.props.sources,"id");
		this.setState({
			...this.state , sourceMap : sourceMap
		});
	}
	
	onDragOver = (e)=>{
		e.preventDefault();
		
	}
	onDragStart = (e,id)=>{
		//ie fix required.
		//check prod build using ie polyfills
		e.dataTransfer.setData("id",id);
		
	}
	
	renderSourceList = () => {
		var elmArr = [];
		 this.props.sources.forEach((t)=>{
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
		}) ;  
		return elmArr;
	}
	
	
	
	render(){
		//console.log(this.props);
		return (
			<>
				{this.renderSourceList()}
			</>
			
		);
	}
}

const mapStateToProps = (state,oldState)=>{
	return {
		sources : state.sourceList.sources?state.sourceList.sources:[]
	}
}

export default connect(mapStateToProps,{
	fetchSources : fetchSources
})(SourceList);