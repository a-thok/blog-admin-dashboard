import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// componets
import { appComponent } from './app.component';
import { commonModule } from './common/common.module';
import { componentsModule } from './components/components.module';
// services
import { AdminService } from './services/admin.service';
import { ArticleService } from './services/article.service';
// style
import './app.css';

angular
  .module('app', [
    'ui.router',
    commonModule,
    componentsModule,
  ])
  .component('app', appComponent)
  .service('AdminService', AdminService)
  .service('ArticleService', ArticleService);
