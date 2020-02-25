import _ from 'lodash';

import {
	RENDER_SOURCES,
	ADD_SOURCE,
	MOVE_SOURCE
	
} from './../LWDIProps';
import {nodeId} from './../helpers/RandomIdGenerator';


const sourceListReducer  = (state = {} ,action) => {
	switch(action.type){
		case RENDER_SOURCES: 
			return {...state,
					sources:action.payload.sources,
					sourceMap : _.keyBy(action.payload.sources,"id")
					};
			
		default : 
			return state;
	}
}

const sourceDetailReducer  = (state = [] ,action) => {
	switch(action.type){
		case ADD_SOURCE:
		console.log(action)
		var flowChartSources = state?state : []
			return [...flowChartSources,action.payload];
		case MOVE_SOURCE:
		return {state}
		default : 
			return state;
	}
}

export {sourceListReducer, sourceDetailReducer};
