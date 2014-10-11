define(["store/ExportsStore"], function(){
	return Firebrick.create("MyApp.controller.app.ExportsController", {
		extend:"Firebrick.controller.Base",
		init:function(){
			var me = this;

			Firebrick.addListener("startview_app_Exports", function(){
				me.start();
			});
			
			me.callParent();
		},
		
		start: function(){
			this.initView();
			Firebrick.fireEvent("updateBreadcrumb", "exp_title");
		},
		
		initView:function(){
			var me = this;
			Firebrick.createStore("MyApp.store.ExportsStore").load({
				callback:function(store){
					var view = Firebrick.get("MyApp.view.app.Exports");
					if(!view){
						Firebrick.createView("MyApp.view.app.Exports", {
							target:"#main-content",
							store:store,
							listeners:{
								"ready": function(){
									Firebrick.fireEvent("showLoadDone");
								}
							}
						});
					}else{
						view.render();
						Firebrick.fireEvent("showLoadDone");
					}
					
				}
			})
			
		}
		
	});
});