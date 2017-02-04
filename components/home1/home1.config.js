function Home1Config($stateProvider) {
  'ngInject';

  $stateProvider
            .state('home1', {
                url: '/home1',
                title: 'Home1',
                templateUrl: 'app/components/home1/home1.html',
                controller: 'Home1Ctrl as home1vm',
                resolve: {
                    loadPlugin: function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                                name: 'appCss',
                                insertBefore: 'appStyles',
                                files: [
                                    'app/common/css/sub-header.css',
                                    'app/components/home1/home1.css'
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
                                    'app/components/home1/home1.controller.js',
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

export default Home1Config;
