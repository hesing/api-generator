import angular from 'angular';

function <%= upCaseName %>Config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('app.<%= name %>', {
            url: '/<%= name %>',
            template: '<<%= name %>></<%= name %>>',
            title: '<%= upCaseName %>',
            ncyBreadcrumb: {
                label: '<%= upCaseName %>'
            },
            resolve: {
                lazyLoad($q, $ocLazyLoad) {
                    "ngInject";

                    let deferred = $q.defer();

                    //
                    // Async require => Split point
                    require.ensure([], function() {

                        //
                        // All the code here, plus the required modules
                        // will be bundled in a separate file.

                        let module = require('./<%= name %>.module');
                        //
                        // OCLazyLoad's 'load' function loads the Angular module.
                        $ocLazyLoad.load({
                            name: module.default.name
                        });

                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }
            }
        });

};

export default <%= upCaseName %>Config;
