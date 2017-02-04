import angular from 'angular';
import uiRouter from 'angular-ui-router';

let <%= nameSnakeCase %>Module = angular.module('<%= name %>', [
  uiRouter
]);

// Include our UI-Router config settings
import <%= upCaseName %>Config from './<%= name %>.config';
<%= nameSnakeCase %>Module.config(<%= upCaseName %>Config);


export default <%= nameSnakeCase %>Module;
