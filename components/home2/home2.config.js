function Home2Config($stateProvider) {
  'ngInject';

  $stateProvider
            .state('home2', {
                url: '/home2',
                title: 'Home2',
                templateUrl: 'app/components/home2/home2.html',
                controller: 'Home2Ctrl as home2vm',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/common/css/sub-header.css',
                                    'app/components/home2/home2.css'
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
                                    'app/components/home2/home2.controller.js',
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

export default Home2Config;
