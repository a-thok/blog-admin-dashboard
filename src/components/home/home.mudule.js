import angular from 'angular';
import { homeComponent } from './home.component';

export const homeModule = angular
  .module('home', [])
  .component('home', homeComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home',
      });

    $urlRouterProvider.otherwise('/');
  })
  .name;
