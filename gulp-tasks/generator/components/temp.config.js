function <%= upCaseName %>Config($stateProvider) {
  'ngInject';

  $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                title: '<%= upCaseName %>',
                templateUrl: 'app/components/<%= name %>/<%= name %>.html',
                controller: '<%= upCaseName %>Ctrl as <%= name %>vm',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/common/css/sub-header.css',
                                    'app/components/<%= name %>/<%= name %>.css'
                                ]
                            },
                            {
                                name: 'vendors',
                                insertBefore: '#vendors',
                                files: [
                                    'vendor/kendo.all.min.js'
                                ]
                            }, 
                            {
                                name: 'appFiles',
                                insertBefore: '#appScripts',
                                files: [
                                    'app/components/<%= name %>/<%= name %>.controller.js',
                                    'app/common/grid-action-group/grid-action-group.js'
                                ]
                            }
                            // {
                            //     name: 'breadcrumb',
                            //     insertBefore: '#vendors',
                            //     serie: true,
                            //     files: [
                            //         'app/components/app/common/screenfull/screenfull.js',
                            //         'app/components/app/common/breadcrumb/uiBreadcrumbs.js'
                            //     ]
                            // }
                        ]);
                    }
                }
            });

};

export default <%= upCaseName %>Config;
