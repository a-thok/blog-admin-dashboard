import angular from 'angular';
import { articlesComponent } from './articles.component';

export const articlesModule = angular
  .module('articles', [])
  .component('articles', articlesComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('articles', {
        url: '/articles',
        component: 'articles',
      });

    $urlRouterProvider.otherwise('/');
  })
  .name;
