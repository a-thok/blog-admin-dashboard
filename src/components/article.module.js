import angular from 'angular';
import articleListTemplate from './article-list.html';
import articlePagerTemplate from './article-pager.html';
import articleFormTemplate from './article-form.html';
import './article-list.css';
import './article-pager.css';

angular.module('article', [])
  .component('articleList', {
    template: articleListTemplate,
    controller: ['$location', 'article', function controller($location, article) {
      this.$onInit = () => article.list()
        .then((res) => { this.articles = res.data.result; });

      this.editArticle = (id) => {
        $location.path(`/write/${id}`);
      };

      this.removeArticle = (id) => {
        if (confirm('确定要删除该文章？')) {
          article.remove(id)
            .then((res) => {
              if (res.data.success) {
                this.articles = this.articles.filter(item => item._id !== id);
              }
            });
        }
      };

      this.switchArticleOpenState = (id, open) => {
        article.update(id, { open });
      };
    }],
    controllerAs: '$ctrl',
  })
  // TODO: pagination functions
  .component('articlePager', {
    template: articlePagerTemplate,
  })
  .component('articleForm', {
    template: articleFormTemplate,
    controller: ['$location', 'article', function controller($location, article) {
      this.article = {
        title: '',
        content: '',
        tags: '',
      };

      const matchs = $location.$$path.match(/[^/]{6,}$/);
      if (matchs) {
        const id = matchs[0];

        article.one(id)
          .then((res) => {
            const { result } = res.data;
            angular.extend(this.article, result, {
              tags: result.tags.join(','),
            });
          });

        this.submit = (event) => {
          event.preventDefault();
          article.update(id, angular.extend(this.article, {
            tags: this.article.tags.split(','),
          }))
            .then((res) => {
              if (res.data.success) {
                alert('更新成功');
              } else {
                alert('更新失败');
              }
            });
        };
      } else {
        this.submit = (event) => {
          event.preventDefault();
          article.create(angular.extend(this.article, {
            tags: this.article.tags.split(','),
          }))
            .then((res) => {
              if (res.data.success) {
                alert('发布成功');
              } else {
                alert('发布失败');
              }
            });
        };
      }
    }],
    controllerAs: '$ctrl',
  });
