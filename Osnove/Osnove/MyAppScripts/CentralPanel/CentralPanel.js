MyApp.CentralPanel = {
   
    init: function () {
        var self = this;
        self.container = $('.app-panel');
        self._loadTemplate();
        self._bindEvents();
        self._loadDetails();
    },

    _loadTemplate: function (callback) {
        var self = this;
        $.ajax({
            url: "MyAppScripts/CentralPanel/templates/centralPanelTemplate.htm",
            data: {},
            success: function (data) {
                self.listTemplate = data;
            }
        });
    },

    _loadDetails: function()
    {

    },

    _loadDetailsCompleted: function () {
        
    },

    _bindEvents: function () {
       
    }
}


//bind to application start event!
MyApp.events.subscribe('appStart', function () { MyApp.CentralPanel.init() });