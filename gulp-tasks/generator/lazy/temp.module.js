import angular from 'angular';
import <%= nameSnakeCase %>Component from './<%= name %>.component';
import <%= nameSnakeCase %>Module from './index';

import <%= upCaseName %>Service from './<%= name %>.service';
<%= nameSnakeCase %>Module.service('<%= upCaseName %>Service', <%= upCaseName %>Service)
			.component('<%= nameSnakeCase %>', <%= nameSnakeCase %>Component);

export default <%= nameSnakeCase %>Module;