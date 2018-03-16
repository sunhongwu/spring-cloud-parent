Ext.onReady(function() {
	// 浏览器宽度
	var height = document.body.clientHeight;

	Ext.create('Ext.container.Viewport', {
		
		renderTo : Ext.getBody(),
		title : '404',
		html : '页面不存在',
		width : '100%',
		height : height,
		items : {
			xtype : 'box',
			width : '100%',
			height : height,
			autoEl : {
				tag : 'img',
				src : '/img/404.jpg'
			}
		}
	});
});
