import template from './articles.html';
import './articles.css';

export const articlesComponent = {
  template,

  controller: class ArticlesComponent {
    constructor($state, ArticleService) {
      'ngInject';

      this.article = [];
      this.total = 0;
      this.page = 0;
      this.$state = $state;
      this.ArticleService = ArticleService;
    }

    get isFirstPage() {
      return this.page === 1;
    }

    get isLastPage() {
      const PER_PAGE = 15;
      return (this.page * PER_PAGE) >= this.total;
    }

    $onInit() {
      this.fetchArticles(1);
    }

    fetchArticles(pageChange) {
      this.page += pageChange;

      this.ArticleService
        .getArticles(this.page)
        .then((res) => {
          const { result, total } = res.data;
          this.articles = result;
          this.total = total;
        })
        .catch((error) => {
          console.log(error);
          this.page -= pageChange;
        });
    }

    nextPage(event) {
      event.preventDefault();
      this.fetchArticles(1);
    }

    prevPage(event) {
      event.preventDefault();
      this.fetchArticles(-1);
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
