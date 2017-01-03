import angular from 'angular';
import adminHeaderTemplate from './app-nav.html';
import './app-nav.css';

angular.module('appNav', [])
  .constant('routes', [
    {
      path: '/',
      name: '首页',
      icon: 'fa-navicon',
    },
    {
      path: '/article',
      name: '文章管理',
      icon: 'fa-sticky-note-o',
    },
    {
      path: '/write',
      name: '撰写文章',
      icon: 'fa-edit',
    },
    {
      path: '/settings',
      name: '口令设置',
      icon: 'fa-gear',
    },
  ])
  .component('appNav', {
    bindings: {
      isAdmin: '<',
    },
    template: adminHeaderTemplate,
    controller: ['$location', 'routes', function controller($location, routes) {
      this.$onChanges = (changes) => {
        if (changes.isAdmin.currentValue) {
          this.routes = routes;
        } else {
          this.routes = routes.slice(0, 1);
        }
      };

      this.isCurrentRoute = path => $location.$$path === path;
    }],
    controllerAs: '$ctrl',
  });
