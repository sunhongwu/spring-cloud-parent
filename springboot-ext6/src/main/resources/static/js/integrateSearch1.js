Ext.onReady(function() {
	// 浏览器宽度
	var height = document.body.clientHeight;
	// 查询条件明细
	var searchs = [ {
		columnWidth : 0.19,
		layout : 'form',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		style : 'margin:0px 0px 0px 0px;',
		autoHeight : true,
		defaultType : 'textfield',
		items : [ {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		}, {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		} ]
	}, {
		columnWidth : .2,
		layout : 'form',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		autoHeight : true,
		defaultType : 'textfield',
		items : [ {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		}, {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		} ]
	}, {
		columnWidth : .2,
		layout : 'form',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		autoHeight : true,
		defaultType : 'textfield',
		items : [ {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		}, {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		} ]
	}, {
		columnWidth : .2,
		layout : 'form',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		autoHeight : true,
		defaultType : 'textfield',
		items : [ {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		}, {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		} ]
	}, {
		columnWidth : .2,
		layout : 'form',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		autoHeight : true,
		defaultType : 'textfield',
		items : [ {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		}, {
			fieldLabel : "First Name",
			emptyText : "First Name",
			name : "firstname"
		} ]
	} ];

	// 查询条件panel
	var searchDetails = {
		layout : 'column',
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		style : 'margin:0px 0px 0px 0px;',
		autoHeight : true,
		items : searchs
	};
	// 按钮panel
	var buttons = {
		xtype : 'panel',
		baseCls : 'my-panel-no-border',
		autoHeight : true,
		layout : 'column',
		items : [ {
			text : "确定",
			xtype : "button",
			style : {
				marginBottom : '0px',// 距底部高度
				marginLeft : '10px',// 距左边宽度
				marginRight : '20px'// 距右边宽度
			},
			handler : function() {
				var formValues = childPanel1.getForm().getValues();
				alert(formValues["firstname"]);
				console.log(formValues);
			}
		}, {
			text : "取消",
			xtype : "button",
			style : {
				marginBottom : '0px',// 距底部高度
				marginLeft : '0px',// 距左边宽度
				marginRight : '20px'// 距右边宽度
			},
			handler : function() {
				var formValues = childPanel1.getForm().getValues();
				alert(formValues["firstname"]);
				console.log(formValues);
			}
		} ]
	};
	/**
	 * 创建查询面板
	 */
	var childPanel1 = Ext.create('Ext.form.Panel', {
		layout : 'form',
		buttonAlign : 'left',
		width : '100%',
		items : [ {
			xtype : "fieldset",
			style : 'margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;',
			frame : true,
			title : "查询条件",
			collapsed : false,
			collapsible : true,
			width : '100%',
//			height : document.body.clientHeight/100*25,
			layout : 'form',
			items : [ searchDetails, buttons ]
		} ]
	});

	/**
	 * 创建数据展示grid
	 */
	var childPanel2 = Ext.create('Ext.grid.Panel', {
		title : 'grid',
		html : 'Another Panel',
		width : document.body.clientWidth,
	// height : document.body.clientHeight/100*80,
	// collapsed : false,
	// collapsible : true

	});

	/**
	 * 创建数据模型
	 */
	Ext.define('UserList', {
		extend : 'Ext.data.Model',
		fields : [ 'userName', 'passWord', 'email', 'nickName', 'regTime' ]
	});

	/**
	 * 创建json
	 */
	var userStore = Ext.create('Ext.data.Store', {
		proxy : new Ext.data.HttpProxy({
			url : '/get',
			getMethod: function(){ return 'POST'; }//亮点，设置请求方式,默认为GET 
		}),
		reader : new Ext.data.JsonReader({
			model : 'UserList'
		})
	});

	userStore.load();

	/**
	 * 定义分页页脚
	 */
	var pagebar = Ext.create("Ext.toolbar.Paging", {
		store : userStore,
		displayInfo : true,
		displayMsg : "显示{0}-{1}条,共计{2}条",
		emptyMsg : "没有数据"

	});

	/**
	 * 创建数据展示grid
	 */
	var childPanel3 = Ext.create('Ext.grid.Panel', {
		title : 'grid',
		html : 'Another Panel',
		width : document.body.clientWidth,
		selType : 'rowmodel',// 'cellmodel',
		autoHeight : true,
		plugins : [ {
			ptype : 'rowediting',
			clicksToEdit : 1
		} ],
		store : userStore,
		columnLines : true,
		forceFit : true,
		fixed : true,
//		height : 500,
//		height : document.body.clientHeight/100*75,

		columns : [ {
			text : '用户名',
			width : 200,
			dataIndex : 'userName',
			editor : 'textfield'
		}, {
			text : '密码',
			width : 200,
			dataIndex : 'passWord',
			editor : 'textfield'
		}, {
			text : 'email',
			width : 250,
			dataIndex : 'email',
			editor : {
				xtype : 'textfield',
				allowBlank : false
			}
		}, {
			text : '客户名称',
			width : 250,
			dataIndex : 'nickName',
			editor : 'datefield'
		}, {
			text : '时间',
			width : 250,
			dataIndex : 'regTime',
			editor : 'datefield'
		} ],
		// 分页功能
		bbar: pagebar
		// 分页功能-效果同上
//		dockedItems : [ {
//			xtype : 'pagingtoolbar',
//			store : userStore,
//			dock : 'bottom',
//			displayInfo : true,
//		} ]
	});

	Ext.create('Ext.panel.Panel', {
		renderTo : Ext.getBody(),
		// title : '综合查询',
		width : '100%',
		height : height,
//		layout : 'border',
		border : true,
		frame : true,
		items : [ childPanel1, childPanel3 ]
	});
});