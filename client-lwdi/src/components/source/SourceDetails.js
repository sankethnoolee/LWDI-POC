import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'react-redux';
import _ from 'lodash';
import './source.css';

import {
	CLASS_MAP_FOR_SOURCES
	
} from './../LWDIProps';
const classMapForSources = CLASS_MAP_FOR_SOURCES



class SourceDetail extends React.Component {
	
	render(){
		var {type , name , nodeId} = this.props;
		return (
			<Draggable 
						defaultPosition={{x: 0, y: 0}}
						bounds = "parent"
						key = {nodeId}
						>
						<div 
						className = {classMapForSources[type]}
						>
						 <div className  = "vfs-entity-header">
							<div className  = "vfs-entity-name">{name}</div>
							<div> <i className = "icon cogs"></i></div>
						</div>
						<div className = "additional-info">{nodeId}</div>
						
						</div>
			</Draggable>
		
		);
	}
	
}
export default SourceDetail;