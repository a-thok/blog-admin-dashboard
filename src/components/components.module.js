import angular from 'angular';
import { homeModule } from './home/home.mudule';
import { articlesModule } from './articles/articles.module';
import { articleModule } from './article/article.module';
import { settingsModule } from './settings/settings.module';

export const componentsModule = angular
  .module('app.components', [
    homeModule,
    articlesModule,
    articleModule,
    settingsModule,
  ])
  .name;
