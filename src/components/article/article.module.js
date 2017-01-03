import angular from 'angular';
import { articleComponent } from './article.component';

export const articleModule = angular
  .module('article', [])
  .component('article', articleComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('article', {
        url: '/article',
        component: 'article',
      })
      .state('article.edit', {
        url: '/:id',
        component: 'article',
      });

    $urlRouterProvider.otherwise('/');
  })
  .name;
