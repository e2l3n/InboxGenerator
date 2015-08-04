(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({
        create: function () {
                com.tomapopov.InboxGenerator.create(
                    // success callback function
                    function (result) {
                        alert("Successfully created inbox directory.");
                    },
                    // error callback function
                    function (error) {
                        alert("Failed to create inbox directory.");
                    }
                );
        },
        create: function () {
                com.tomapopov.InboxGenerator.erase (
                    // success callback function
                    function (result) {
                       alert("Successfully erased inbox directory.");
                    },
                    // error callback function
                    function (error) {
                        alert("Failed to erase inbox directory.");
                    }
                );
        }
        );
    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);