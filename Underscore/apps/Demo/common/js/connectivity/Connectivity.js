
app.Connectivity.getAccounts= (function(callback)
{
	var callback1=callback;
	var busyind=new WL.BusyIndicator('content',{text: 'Fetching Accounts'});
	busyind.show();
	    var invocationData = {
	            adapter: 'CRMAdapter',
	            procedure: 'getAccounts',
	            parameters: []
	    };
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : getAccountSuccess,
	        onFailure : getAccountFailed,
	        timeout : 30000
	    });
	    
	    function getAccountSuccess(response)
	    {
	    	busyind.hide();
	    	alert("acount success");
	    	alert("accounts success callback context"+callback1);
	    	if(response.invocationResult.isSuccessful)
	    	{
	    		callback1.render(response.invocationResult.objects);
	    	}
	    	else{alert("Crm returned error");}
	    }
	    function getAccountFailed(error)
	    {
	    	busyind.hide();
	    	console.log("Account failed::"+error);
	    	alert("Crm failed");
	    }
});
app.Connectivity.getContacts= (function(id,callback)
{
	var callback1=callback;
	var busyind=new WL.BusyIndicator('content',{text: 'Fetching details'});
	busyind.show();
//	showBusy('loading.....');
	    var invocationData = {
	            adapter: 'CRMAdapter',
	            procedure: 'getContacts',
	            parameters: [id]
	    };
	    WL.Client.invokeProcedure(invocationData, {
	        onSuccess : getContactSuccess,
	        onFailure : getContactFailed,
	        timeout : 30000
	    });
	    
	    function getContactSuccess(response)
	    {
	    	busyind.hide();
	    	alert("contact success");
	    	if(response.invocationResult.isSuccessful)
	    	{
	    		callback1.render(response.invocationResult.objects);
	    	}
	    	else{alert("Crm returned error");}
	    }
	    function getContactFailed(error)
	    {
	    	busyind.hide();
	    	console.log("contact failed::"+error);
	    	alert("Crm failed");
	    }
});
