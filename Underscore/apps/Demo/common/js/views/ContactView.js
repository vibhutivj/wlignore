app.Views.ContactView=(function(id){
	var htmldata="";
	var that=this;
	this.accountid=id;
	this.render=function(data)
	{
		alert(JSON.stringify(data));
		alert(data.Contact.length);
		htmldata=_.template(htmldata,data);
		$("#mainpage").html(htmldata);
		$("#mainpage").trigger('pagecreate');
	};
	this.sethtmlData=function(data)
	{
		htmldata=data;
		app.Connectivity.getContacts(that.accountid,that);
	};
	this.initialize=function(id)
	{
		that.accountid=id;
		alert("contact view initialize"+that.accountid);
		$.get("templates/ContactView.html",that.sethtmlData,'html');
	};
	var __construct=function()
	{
		alert("contact instance"+that.accountid);
		that.initialize(that.accountid);
	}();
});