const ID_LENGTH = 15;

export const nodeId = () => {
	return "n-"+id(ID_LENGTH)
}

export const connectionId = () => {
	return "c-"+id(ID_LENGTH)
}
const id = (length)=> {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

