
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


export const mouseDownNode = (e) => {
	
	return {
		type : MOUSE_DOWN_NODE,
		payload : {
			isDrawing : true,
			src : {
				  x : e.clientX - 341,
				  y : e.clientY-10
			  },
			tgt : {
				  x : e.clientX - 341 ,
				  y : e.clientY-10
			  }
		}
	}
};

export const mouseUpNode = (e) => {
	
	return {
		type : MOUSE_UP_NODE,
		payload : {
			
			isDrawing : false,
			tgt : {
				  x : e.clientX - 341,
				  y : e.clientY-10
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


export const mouseMoveConnection = (e) => {
	
	return {
		type : MOUSE_MOVE_CONNECTION,
		payload : {
			tgt : {
					x : e.clientX - 341,
					y : e.clientY-10
			}
			
		}
	}
}
