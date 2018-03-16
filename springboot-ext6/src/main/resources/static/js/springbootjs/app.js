Ext.onReady(function() {

			var childPanel1 = Ext.create('Ext.Panel', {
						title : 'childPanel1',
						html : 'First Panel'
					});

			var childPanel2 = Ext.create('Ext.Panel', {
						title : 'childPanel2',
						html : 'Another Panel'
					});

			var childPanel3 = Ext.create('Ext.Panel', {
						title : 'childPanel3',
						html : 'Another Panel'
					});

			var childFormPanel = Ext.create('Ext.form.Panel', {
						title : 'childFormPanel',
						html : 'Another Panel'
					});

			var childTabPanel = Ext.create('Ext.tab.Panel', {
						title : 'childTabPanel',
						items : [{
							xtype : 'panel',
							title : 'Tab One',
							html : 'The first tab',
							listeners : {
								render : function() {
									Ext.MessageBox.alert('Tab one',
											'Tab One was clicked.');
								}
							}
						}, {
							title : 'Tab Two',
							html : 'The second tab',
							listeners : {
								render : function() {
									Ext.MessageBox.alert('Tab two',
											'Tab Two was clicked.');
								}
							}
						}]
					});

			Ext.create('Ext.container.Viewport', {
						renderTo : Ext.getBody(),
						// width : '100%',
						// height : window.innerHeight,
						// border : true,
						// frame : true,
						// absolute 绝对定位，通过x，y坐标
						// accordion 手风琴方式
						// anchor 相对于容器设置组件的大小 anchor : '-100,1500' anchor :
						// '1500' anchor : '100%'
						// border 上下左右中五种布局方式  region : 'north',
						layout : 'border',
						defaults : {
							collapsible : true,
							split : true,
							bodyStyle : 'padding:15px'
						},
						items : [childPanel1, childPanel2, childPanel3,
								childFormPanel, childTabPanel]
					});
		});