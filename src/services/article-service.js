import angular from 'angular';

angular.module('articleService', [])
  .service('article', ['$http', function Article($http) {
    this.list = () => $http.get('/article/json?page=1');
    this.one = id => $http.get(`/article/json/${id}`);
    this.create = body => $http.post('/article', body);
    this.update = (id, body) => $http.patch(`/article?id=${id}`, body);
    this.remove = id => $http.delete(`/article/${id}`);
  }]);
