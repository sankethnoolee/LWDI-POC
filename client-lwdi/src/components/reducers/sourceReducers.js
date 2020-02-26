import _ from 'lodash';

import {
	RENDER_SOURCES,
	ADD_SOURCE,
	MOVE_SOURCE,
	LIST_WIDTH
	
} from './../LWDIProps';


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
		var flowChartSources = state?state : []
			return [...flowChartSources,action.payload];
		case MOVE_SOURCE:
		return {state}
		default : 
			return state;
	}
}

const updateListWidth = (state = {w : 0, h : 0}, action) => {
	switch(action.type){
		case LIST_WIDTH:
		return action.payload;
		default : 
			return state;
	}
}

export {sourceListReducer, sourceDetailReducer, updateListWidth};
