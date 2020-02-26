import React from 'react';

import './connections.css'
import {curve} from './curve';



class Connections extends React.Component{
	
	render(){
		var {src , tgt , connectionId}  = this.props
		return (
		   
			    <svg id = {connectionId} style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
					{/* Main line */}
					  <path
						d={curve({x:src.x,y:src.y}, {x:tgt.x,y:tgt.y})}
						stroke="blue"
						strokeWidth="3"
						fill="none"
					  />
				</svg>
				
				
		   
		   
		  );
	}
 
}

export default Connections;
