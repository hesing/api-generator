(function() {

    function Home2Ctrl(alerting) {
        var home2vm = this;

        home2vm.name = 'home2';
    }

    angular.module('managementPortalApp')
        .controller('Home2Ctrl', Home2Ctrl);
})();

