import _ from 'lodash';
import {
	MOUSE_DOWN_CONNECTION,
	MOUSE_UP_CONNECTION,
	MOUSE_MOVE_CONNECTION,
	MOUSE_MOVE_NODE,
	MOUSE_UP_NODE,
	MOUSE_DOWN_NODE,
	MOUSE_OUT_NODE,
	ADD_CONNECTION,
	UPDATE_CONNECTION
	
} from './../LWDIProps';
import {connectionId} from './../helpers/RandomIdGenerator';

const drawConnectionReducer  = (state = {
		  isDrawing: false,
		  targetFound: false,
		  src : {
			  x : 0,
			  y : 0
		  },
		  tgt : {
			  x : 0,
			  y : 0
		  },
		 connectionList : [],
		 nodeToConnectionMap : {}
		} ,action) => {
	
	
	switch(action.type){
		case MOUSE_DOWN_CONNECTION : 
			return {...state};
		case MOUSE_UP_CONNECTION : 
			if(!state.targetFound){
				return {...state,
				isDrawing : false,
				src : action.payload.src,
				tgt : action.payload.tgt
				  };
			}
			
			return {...state, isDrawing : false};
			
		case MOUSE_MOVE_CONNECTION : 
			if(state.isDrawing){
				return {...state, 
					tgt : action.payload.tgt
					}
			}
			//not returning {state} coz there is nothing to update
			return state;
		case MOUSE_MOVE_NODE : 
			if(state.isDrawing){
				return {...state, 
					targetFound : true
				}
			}
			return state;
		case MOUSE_UP_NODE :
			if(state.src){
				var cId = connectionId();
				var srcO = state.src;
				var scrId = srcO.nodeId;
				var tgtId = action.payload.tgt.nodeId;
				srcO.y = srcO.y -11.5;
				
				return {...state,
					isDrawing : false,
					src : {
						  x : 0,
						  y : 0
					  },
					  tgt : {
						  x : 0,
						  y : 0
					  },
					connectionList  : [...state.connectionList, {src : srcO , tgt : action.payload.tgt , connectionId :cId }],
					nodeToConnectionMap : {...state.nodeToConnectionMap , [scrId] : state.nodeToConnectionMap[scrId]?[...state.nodeToConnectionMap[scrId],cId]:[cId] , [tgtId] : state.nodeToConnectionMap[tgtId]?[...state.nodeToConnectionMap[tgtId],cId]:[cId] }
					
				};
			}
			return {...state,
					isDrawing : false,
					src : {
						  x : 0,
						  y : 0
					  },
					  tgt : {
						  x : 0,
						  y : 0
					  }
				};
			
		case MOUSE_DOWN_NODE :
			return {...state,
				isDrawing : true,
				src : action.payload.src,
				tgt : action.payload.tgt
			};
		case MOUSE_OUT_NODE : return {...state, targetFound : false};
		case UPDATE_CONNECTION : 
			console.log(action.payload)
			var connectionArr = state.connectionList;
			var updatedConn = [];
			var affectedConnArr = action.payload.listOfConnections;
			var nodeId = action.payload.nodeId;
			for(let i = 0 ;i < connectionArr.length ; i++ ){
				if(affectedConnArr.indexOf(connectionArr[i].connectionId)>-1){
					
					if(connectionArr[i].src.nodeId===nodeId){
						connectionArr[i].src.x=action.payload.srcX
						connectionArr[i].src.y=action.payload.srcY
					}
					if(connectionArr[i].tgt.nodeId===nodeId){
						connectionArr[i].tgt.x=action.payload.tgtX
						connectionArr[i].tgt.y=action.payload.srcY
					}
					
					
				}
				updatedConn.push(connectionArr[i]);
				
				
			}
			
			return {...state,connectionList : updatedConn }
		default : 
			return state;
	}
}

export {drawConnectionReducer};
