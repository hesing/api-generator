import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= nameSnakeCase %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '<%= nameSnakeCase %>vm'
};

export default <%= nameSnakeCase %>Component;
