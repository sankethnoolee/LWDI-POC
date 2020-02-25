import React from 'react';
import {connect} from 'react-redux';

import {curve} from './curve';


class DrawConnection extends React.Component{
	
	render(){
		
		const {src , tgt} = this.props;
		
		return (
		
			<svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
					{/* Main line */}
				  <path
					d={curve({x:src.x,y:src.y}, {x:tgt.x,y:tgt.y})}
					stroke="red"
					strokeWidth="3"
					fill="none"
				  />
			</svg>
		
		)
	}
	
}

const mapStateToProps = (state , ownState) =>{
	return {
		src : state.src,
		tgt : state.tgt
	}
}

export default connect(mapStateToProps , {
	
})(DrawConnection);