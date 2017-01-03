import angular from 'angular';

angular.module('adminService', [])
  .service('admin', ['$http', function Admin($http) {
    this.login = password => $http.post('/admin/login', { password });
    this.update = password => $http.patch('/admin', { password });
  }]);
