export default class <%= upCaseName %>Service {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    // Retrieve a user's data
    get() {
        return this.$http({
            url: 'http://jsonplaceholder.typicode.com/<%= name %>',
            method: 'GET'
        })
        .then((res) => res.data);  
    }

}
