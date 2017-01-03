import angular from 'angular';
import homeView from '../views/home.html';
import articleView from '../views/article.html';
import writeView from '../views/write.html';
import settingsView from '../views/settings.html';

angular.module('app')
  .config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        bindings: {
          a: '@',
        },
        template: homeView,
        controller: 'appCtrl',
        controllerAs: '$ctrl',
      })
      .when('/article', {
        template: articleView,
      })
      .when('/write', {
        template: writeView,
      })
      .when('/write/:id', {
        template: writeView,
      })
      .when('/settings', {
        template: settingsView,
        controller: 'appCtrl',
        controllerAs: '$ctrl',
      });
  }]);
