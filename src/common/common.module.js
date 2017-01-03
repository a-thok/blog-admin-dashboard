import angular from 'angular';
import { navModule } from './nav/nav.module';

export const commonModule = angular
  .module('app.common', [
    navModule,
  ])
  .name;
