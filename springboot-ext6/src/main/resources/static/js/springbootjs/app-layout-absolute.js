//通过X Y坐标定位布局
Ext.onReady(function() {

			var childPanel1 = Ext.create('Ext.Panel', {
						title : 'childPanel1',
						html : 'First Panel',
						x: 50,
               			y: 50
					});

			var childPanel2 = Ext.create('Ext.Panel', {
						title : 'childPanel2',
						html : 'Another Panel',
						x: 100,
               			y: 100
					});

			var childPanel3 = Ext.create('Ext.Panel', {
						title : 'childPanel3',
						html : 'Another Panel',
						x: 150,
               			y: 150
					});

			var childFormPanel = Ext.create('Ext.form.Panel', {
						title : 'childFormPanel',
						html : 'Another Panel',
						x: 200,
               			y: 200
					});

			var childTabPanel = Ext.create('Ext.tab.Panel', {
						title : 'childTabPanel',
						x: 250,
               			y: 250,
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
						layout : 'absolute',
						defaults : {
							collapsible : true,
							split : true,
							bodyStyle : 'padding:15px'
						},
						items : [childPanel1, childPanel2, childPanel3,
								childFormPanel, childTabPanel]
					});
		});