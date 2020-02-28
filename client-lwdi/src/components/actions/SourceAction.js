import {nodeId} from './../helpers/RandomIdGenerator';
import {
	RENDER_SOURCES,
	ADD_SOURCE,
	LIST_WIDTH,
	UPDATE_CONNECTION
	
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

export const updateConnections = (listOfConnections = [],nodeId, e,w,h,rect,elm) => {
	var translate = elm.style.transform.split("translate(").join("").split(")").join("").split(",");
	var tY = Number(translate[1].split("px").join(""))
	var tX = Number(translate[0].split("px").join(""))
	var srcY=Number(elm.style.top.split("px").join("")) +(tY)+(elm.clientHeight/2)-11.5
	var srcX=Number(elm.style.left.split("px").join("")) +(tX)+ elm.clientWidth
	
	console.log(elm.style)
	var tgtX=Number(elm.style.left.split("px").join("")) +(tX)
	return {
		type : UPDATE_CONNECTION,
		payload : {listOfConnections,
					nodeId,srcY,srcX,tgtX
		}
	}
}