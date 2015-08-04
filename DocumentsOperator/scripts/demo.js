(function (global) {
    var DemoViewModel,
    app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        js_listDocuments: function () {
            window.plugins.DocumentsOperator.listDocuments();                    
        },
        js_listInbox: function () {
            window.plugins.DocumentsOperator.listInbox();                    
        },
        js_eraseInbox: function () {
            window.plugins.DocumentsOperator.erase();                    
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);