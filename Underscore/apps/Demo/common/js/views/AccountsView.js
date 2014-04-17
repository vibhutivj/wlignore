app.Views.AccountsView=(function(){
	var that=this;
	var htmldata="";
	this.render=function(data)
	{
		alert("accounts view render"+JSON.stringify(data)+"html::"+htmldata);
		//data=_.object(data);alert(JSON.stringify(data));
		htmldata=_.template(htmldata,data);
		$("#mainpage").html(htmldata);
		$("#mainpage").trigger('pagecreate');
	};
	this.sethtmlData=function(data)
	{
		htmldata=data;
		app.Connectivity.getAccounts(that);
	};
	this.initialize=function()
	{
		$.get("templates/AccountsView.html",that.sethtmlData,'html');
		
	};
	var __construct=function()
	{
		alert("accounts instance");
		that.initialize();
		
	}();
});