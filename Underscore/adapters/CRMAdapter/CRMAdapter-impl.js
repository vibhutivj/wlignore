function getAccounts(){
	
	var input = {
			method  : 'get',
			appName : 'myApp',
		//	requestType: 'https',
			path : '/env/Development/getAccounts',			
			returnedContentType : 'text/xml; charset=utf-8'
	};
	return WL.Server.invokeCastIron(input);
}

function getContacts(Id){
	
	var input = {
			method  : 'get',
			appName : 'myApp',
			path : '/env/Development/getContacts',			
			returnedContentType : 'text/xml; charset=utf-8',
			parameters:{'id':Id}
	};
	return WL.Server.invokeCastIron(input);
}