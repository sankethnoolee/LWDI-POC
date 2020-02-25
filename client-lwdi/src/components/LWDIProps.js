/*
	
	DONOT CHANGE THIS
	these are actions and reducers keys
	kindly update those respective files if there are any changes

*/

export const RENDER_SOURCES = "RENDER_SOURCES";
export const ADD_SOURCE = "ADD_SOURCE";
export const MOVE_SOURCE = "MOVE_SOURCE";
export const DELETE_SOURCE = "DELETE_SOURCE";
export const DRAW_CONNECTION = "DRAW_CONNECTION";
export const ADD_CONNECTION = "ADD_CONNECTION";
export const UPDATE_CONNECTION = "UPDATE_CONNECTION";
export const MOUSE_DOWN_CONNECTION = "MOUSE_DOWN_CONNECTION";
export const MOUSE_UP_CONNECTION = "MOUSE_UP_CONNECTION";
export const MOUSE_MOVE_CONNECTION = "MOUSE_MOVE_CONNECTION";
export const MOUSE_MOVE_NODE = "MOUSE_MOVE_NODE";
export const MOUSE_UP_NODE = "MOUSE_UP_NODE";
export const MOUSE_DOWN_NODE = "MOUSE_DOWN_NODE";
export const MOUSE_OUT_NODE = "MOUSE_OUT_NODE";







//styling props
export const CLASS_MAP_FOR_SOURCES = {
	"RETURN" : "vfs-source-return",
	"CSV" : "vfs-source-csv",
	"DB_TABLE" : "vfs-source-db-table"
}
export const CLASS_MAP_FOR_SOURCES_SHORT = {
	"RETURN" : "vfs-source-return-short",
	"CSV" : "vfs-source-csv-short",
	"DB_TABLE" : "vfs-source-db-table-short"
}



//connection props and styling
export const C_COLOR = "red";
export const C_WIDTH = 3;
export const C_FILL  = "none";