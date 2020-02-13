import baseUrl from './../apis/BaseUrl';


const fetchSources = () => {
	return async (dispatch,getState)=>{
		const userId = getState().auth.userId;
		const resp = await baseUrl.get("/sources");
		dispatch({
			type : "FETCH_SOURCES",
			payload : resp.data
		});
	}
}