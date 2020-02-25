import {combineReducers} from 'redux';

//for form use this.

//import {reducer as formReducer} from 'redux-form';
import {sourceListReducer,
		sourceDetailReducer
	} from './sourceReducers';
import {
	drawConnectionReducer,
	addConnection
	} from './connectionReducers';



//redux form shoild be assigned with the key form

export default combineReducers({
	sourceList : sourceListReducer,
	flowChartSources : sourceDetailReducer,
	connectionDetails : drawConnectionReducer,
})