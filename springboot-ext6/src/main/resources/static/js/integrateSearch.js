Ext.onReady(function(){
	var helloWindow = Ext.extend(Ext.Window,{
		title:'hello',
		width:500,
		height:300,
		initComponent:function(){
			helloWindow.superclass.initComponent.apply(this);
		}
	});
	
	var hwindow = new helloWindow({
		title:'hello there',
		items:{
			html:'<p>This is a window.</p>'
		}
	});
	hwindow.show('windowDiv');
	
});
