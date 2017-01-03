import angular from 'angular';
import { settingsComponent } from './settings.component';

export const settingsModule = angular
  .module('settings', [])
  .component('settings', settingsComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('settings', {
        url: '/settings',
        component: 'settings',
      });

    $urlRouterProvider.otherwise('/');
  })
  .name;
