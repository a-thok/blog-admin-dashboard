import angular from 'angular';
import { navComponent } from './nav.component';
import './nav.css';

export const navModule = angular
  .module('appNav', [])
  .constant('ROUTES', [
    {
      state: 'home',
      name: '首页',
      icon: 'fa-navicon',
    },
    {
      state: 'articles',
      name: '文章管理',
      icon: 'fa-sticky-note-o',
    },
    {
      state: 'article',
      name: '撰写文章',
      icon: 'fa-edit',
    },
    {
      state: 'settings',
      name: '口令设置',
      icon: 'fa-gear',
    },
  ])
  .component('appNav', navComponent)
  .name;
