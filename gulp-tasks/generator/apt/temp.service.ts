namespace BDOLibraryManagementPortal {
    export class <%= upCaseName %>Service {
        public static $inject = ['DataService'];
        constructor(private dataService: DataService) {

        }
    }
    angular.module('managementPortalApp')
        .service("<%= upCaseName %>Service", <%= upCaseName %>Service);

}