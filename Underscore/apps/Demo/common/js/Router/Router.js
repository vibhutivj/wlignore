app.Router.Route=(function(){
	var __construct=function()
	{
		$(window).hashchange(hashchange);
		alert("new router instance");
		HomeViewobj=new app.Views.HomeView();
	}();
	function hashchange(e)
	{
		alert("hash"+location.hash+"e="+e);
		var hash=location.hash;
		switch(hash)
		{
		case "":
			alert(HomeViewobj);
			if(!HomeViewobj)
				{HomeViewobj=new app.Views.HomeView();}
			else{
				alert("router homeview else");
				HomeViewobj.initialize();
				navigator.globalization.getPreferredLanguage(
				// Get the string identifier for the client's current language

				// Success
				function onSuccess(language) {
					alert(JSON.stringify(language));
				},
				// (Optional) Failure
				function onError() {
					// Error getting language
				});
				}
		  	break;
		case "#AccountsView":
			alert(AccountsViewobj);
			if(!AccountsViewobj)
				{AccountsViewobj=new app.Views.AccountsView();}
			else{
				alert("router accountsview else");
				AccountsViewobj.initialize();
				}
			break;
		case "#ContactView"+ hash.slice("#ContactView".length):
			alert(ContactViewobj);
			var id=hash.slice("#ContactView".length);
			id=id.split('&');
			id=id[1];
			alert(id);
			if(!ContactViewobj)
				{ContactViewobj=new app.Views.ContactView(id);
				
				}
			else{
				alert("router contactview else");
				
				ContactViewobj.initialize(id);
				}
			break;
		default:
		  alert("router in default case");
		}
	}
});