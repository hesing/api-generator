(function() {

    function Home1Ctrl(alerting) {
        var home1vm = this;

        home1vm.name = 'home1';
    }

    angular.module('managementPortalApp')
        .controller('Home1Ctrl', Home1Ctrl);
})();

