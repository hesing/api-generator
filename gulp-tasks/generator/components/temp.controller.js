(function() {

    function <%= upCaseName %>Ctrl(alerting) {
        var <%= name %>vm = this;

        <%= name %>vm.name = '<%= name %>';
    }

    angular.module('managementPortalApp')
        .controller('<%= upCaseName %>Ctrl', <%= upCaseName %>Ctrl);
})();

