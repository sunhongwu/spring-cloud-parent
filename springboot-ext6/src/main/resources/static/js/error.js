Ext.onReady(function() {
	// 浏览器宽度
	var height = document.body.clientHeight;

	Ext.create('Ext.panel.Panel', {
		renderTo : Ext.getBody(),
//		title : '综合查询',
		html : '页面不存在',
		width : '100%',
		height : height,
		items : {
            
            xtype:'box',
            width : '100%',
    		height : height,
            autoEl:{
                tag:'img',
                src:'/img/404.jpg'
            }
         
        }
	});
});