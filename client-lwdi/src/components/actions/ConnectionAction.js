
import {
	MOUSE_DOWN_CONNECTION,
	MOUSE_UP_CONNECTION,
	MOUSE_MOVE_CONNECTION,
	MOUSE_MOVE_NODE,
	MOUSE_UP_NODE,
	MOUSE_DOWN_NODE,
	MOUSE_OUT_NODE,
	
} from './../LWDIProps';


export const mouseMoveNode = (e) => {
	
	return {
		type : MOUSE_MOVE_NODE,
		payload : {
			
				targetFound : true
			
		}
	}
};


export const mouseDownNode = (e, w , h) => {
	const rect = e.target.parentElement.parentElement.getBoundingClientRect();
	const elm = e.target.parentElement.parentElement;
	const yPos = rect.top+(elm.clientHeight/2)-h;
	const xPos = rect.left-w;
	
	return {
		type : MOUSE_DOWN_NODE,
		payload : {
			isDrawing : true,
			src : {
				  x : xPos,
				  y : yPos
			  },
			tgt : {
				  x : xPos ,
				  y : yPos
			  }
		}
	}
};

export const mouseUpNode = (e, w , h) => {
	const rect = e.target.parentElement.parentElement.getBoundingClientRect();
	const elm = e.target.parentElement.parentElement;
	const yPos = rect.top+(elm.clientHeight/2)-h;
	const xPos = rect.left-w;
	return {
		type : MOUSE_UP_NODE,
		payload : {
			
			isDrawing : false,
			tgt : {
				  x : xPos,
				  y : yPos-11.5
			  }
		}
	}
};


export const mouseOutNode = (e) => {
	return {
		type : MOUSE_OUT_NODE,
		payload : {
				targetFound : false
		}
	}
};

export const mouseDownConnection = (e) => {
	return {
		type : MOUSE_DOWN_CONNECTION,
	}
}

export const mouseUpConnection = (e) => {
	return {
		type : MOUSE_UP_CONNECTION,
		payload : {
			isDrawing : false
		}
	}
}


export const mouseMoveConnection = (e,w,h) => {
	return {
		
		type : MOUSE_MOVE_CONNECTION,
		payload : {
			tgt : {
					x : e.clientX-10-w,
					y : e.clientY - h
			}
			
		}
	}
}
