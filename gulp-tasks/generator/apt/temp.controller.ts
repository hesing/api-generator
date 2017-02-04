namespace BDOLibraryManagementPortal {
    export class <%= upCaseName %>Ctrl extends BaseGridCtrl {

        //#region [ Fields ]
        isScopeTagDropDownOpened: boolean;
        classifications: any[];
        types: any[];
        signs: any[];
        scopings: any[];
        sortableOptions: any;
        selectedRowIndex: number;
        cycleItems: any[];
        deleteConfirmMessage: string;
        contextMenuHTML: string = `<<%= name %>-context-menu row-data="this" delete-confirm-message="{{ <%= name %>.deleteConfirmMessage }}"></<%= name %>-context-menu>`;
        scope: any;
        //#endregion

        //#region [ Properties ]
        public static $inject = [
            '$scope', '<%= upCaseName %>Service'
        ];
        //#endregion

        //#region [ ctor ]
        constructor(
            private $scope: any, private <%= upCaseName %>Service: <%= upCaseName %>Service) {
            super($scope);
            $scope.vm = this;
        }
        //#endregion

        //#region [ Public Methods ]    

        public initialiseGrid = (): void => {

        };

        public save = (): void => {
            let grid = this.$scope.grid;

        };

        $onInit(){
            this.initialiseGrid();
        }

        $onDestroy() {

        }

    //#endregion

}

angular.module('managementPortalApp')
    .controller('<%= upCaseName %>Ctrl', BDOLibraryManagementPortal.<%= upCaseName %>Ctrl)
}