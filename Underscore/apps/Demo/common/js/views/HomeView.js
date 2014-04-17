app.Views.HomeView=(function(){
	var that=this;
	this.render=function(data)
	{
		$("#mainpage").html(data);
		$("#mainpage").trigger('pagecreate');
	};
	this.initialize=function()
	{
		alert("home view initialize");
		console.log(this);
		$.get("templates/HomeView.html",that.render,'html');
	};
	var __construct=function()
	{
		alert("homneview instance");
		that.initialize();
	}();
	
});