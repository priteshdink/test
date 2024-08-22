sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                // var sPath = sap.ui.require.toUrl("sap/m/sample/UploadSet/items.json");
                var model = new sap.ui.model.json.JSONModel({})
                this.getView().setModel(model);
            },
            handleSelectionChange: function (oEvent) {
                var oItem = oEvent.getParameter("item");
                var oUploadSet = this.byId("UploadSet");
                oUploadSet.setDirectory(false);
                // if (oItem) {
                // 	switch (oItem.getText()) {
                // 		case "File Mode":
                // 			oUploadSet.setDirectory(false);
                // 			break;
                // 		case "Directory Mode":
                // 			oUploadSet.setDirectory(true);
                // 			break;
                // 		default:
                // 			break;
                // 	}
                // }

            },
            onComp:function(oEvent)
            {

               
           // this.getView().byId("UploadSet"),setItems( this.getView().byId("UploadSet").getItems())
            },
            onPress:function()
            {

            }

        });
    });
