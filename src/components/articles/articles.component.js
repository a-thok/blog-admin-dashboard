import template from './articles.html';
import './articles.css';

// TODO: pagination functions
export const articlesComponent = {
  template,

  controller: class ArticlesComponent {
    constructor($state, ArticleService) {
      'ngInject';

      this.$state = $state;
      this.ArticleService = ArticleService;
    }

    $onInit() {
      this.ArticleService
        .getArticles()
        .then((res) => { this.articles = res.data.result; });
    }

    editArticle(id) {
      this.$state.go('article.edit', { id });
    }

    removeArticle(id) {
      if (confirm('确定要删除该文章？')) {
        this.ArticleService
          .removeArticle(id)
          .then((res) => {
            if (res.data.success) {
              this.articles = this.articles.filter(item => item._id !== id);
            }
          });
      }
    }

    switchArticleOpenState(id, open) {
      this.ArticleService
        .updateArticle(id, { open });
    }
  },
};
