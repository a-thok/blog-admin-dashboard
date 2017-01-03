import angular from 'angular';
import template from './article.html';

export const articleComponent = {
  template,

  controller: class ArticleComponent {
    constructor($state, ArticleService) {
      'ngInject';

      this.article = {
        title: '',
        content: '',
        tags: '',
      };
      this.id = $state.params.id;
      this.ArticleService = ArticleService;

      if (this.id) {
        ArticleService
          .getArticle(this.id)
          .then((res) => {
            const { result } = res.data;
            angular.extend(this.article, result, {
              tags: result.tags.join(','),
            });
          });
      }
    }

    submit(event) {
      event.preventDefault();

      const body = angular.extend(this.article, {
        tags: this.article.tags.split(','),
      });

      const request = this.id ?
        this.ArticleService.updateArticle(this.id, body) : this.ArticleService.createArticle(body);

      request
        .then((res) => {
          if (res.data.success) {
            alert('操作成功');
          } else {
            alert('操作失败');
          }
        });
    }
  },
};
