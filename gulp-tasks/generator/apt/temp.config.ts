namespace BDOLibraryManagementPortal {
    angular.module('managementPortalApp')
        .config(($stateProvider) => {
            $stateProvider
                .state('<%= name %>',
                {
                    url: '/<%= name %>',
                    templateUrl: 'js/components/<%= name %>/<%= name %>.html',
                    controller: '<%= upCaseName %>Ctrl as <%= name %>vm',
                    title: '<%= upCaseName %> Screen',
                    resolve: {
                        loadPlugin($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    name: 'appCss',
                                    insertBefore: 'appStyles',
                                    files: [
                                        'js/components/common/css/sub-header.css',
                                        'js/components/<%= name %>/<%= name %>.css'
                                    ]
                                }, {
                                    name: 'appFiles',
                                    insertBefore: '#appScripts',
                                    serie: true,
                                    files: [
                                        'vendor/kendo.all.min.js',
                                        'js/components/common/utilities/utilities.js',
                                        'js/components/common/grid-action-group/grid-action-group.js',
                                        'js/components/common/kendo-utility/reusable-components/bdo-text.js',
                                        'js/components/common/kendo-utility/reusable-components/bdo-checkbox.js',
                                        'js/components/<%= name %>/<%= name %>.constants.js',
                                        'js/components/<%= name %>/<%= name %>.resources.js',
                                        'js/components/<%= name %>/context-menu/context-menu.js',
                                        'js/components/<%= name %>/<%= name %>.service.js',
                                        'js/components/<%= name %>/<%= name %>.controller.js'
                                    ]
                                }
                            ]);
                        }
                    }
                });
        });
}