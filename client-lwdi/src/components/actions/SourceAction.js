import {nodeId} from './../helpers/RandomIdGenerator';
import {
	RENDER_SOURCES,
	ADD_SOURCE,
	LIST_WIDTH
	
} from './../LWDIProps';

export const fetchSources = () => {
	/* 
	
	currently hard code source list fetch the source list here.
	
	return async (dispatch,getState)=>{
		const userId = getState().auth.userId;
		const resp = await baseUrl.get("/sources");
		dispatch({
			type : "FETCH_SOURCES",
			payload : resp.data
		});
	} */
	
	return {
		type : RENDER_SOURCES,
		payload :{ sources : [
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
		]}
	}
}


export const addSource = (srcObj , e,w,h) =>  {
	return {
		type : ADD_SOURCE,
		payload : {...srcObj , nodeId : nodeId(),xPos : e.clientX - w,yPos : e.clientY - h}
	}
}

export const updateListWidth = (w,h) => {
	return {
		type : LIST_WIDTH,
		payload : {w,h}
	}
}