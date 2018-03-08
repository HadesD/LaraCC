#include "http/controllers/dashboard/ArticleController.hpp"

#include <cppcms/http_response.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "views/dashboard/Article.hpp"
#include "models/Article.hpp"

namespace app::http::controllers::dashboard
{

  ArticleController::ArticleController(cppcms::service& s) :
    Controller(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/new", &ArticleController::createNew, this);
    this->dispatcher().map(
      "GET", "/(\\d)",
      (void(ArticleController::*)(const int))
      &ArticleController::update,
      this, 1
      );
    this->dispatcher().map(
      "GET", "/(\\s+)",
      (void(ArticleController::*)(const std::string&))
      &ArticleController::update,
      this, 1
      );
  }

  void ArticleController::index()
  {
    app::views::dashboard::Article v;
    v.title = _("Root :: Articles");

    this->render("dashboard_article_index", v);
  }

  void ArticleController::update(const std::string& slug)
  {
    app::models::Article article(slug);

    this->response().set_redirect_header(
      "/root/articles/"
      + std::to_string(article.getId())
      );
  }

  void ArticleController::update(const int id)
  {
    app::views::dashboard::Article v;
    v.title = _("Root :: Articles :: Edit");

    this->render("dashboard_article_index", v);
  }

  void ArticleController::createNew()
  {
    app::views::dashboard::Article v;
    v.title = _("Root :: Articles :: New");

    this->render("dashboard_article_index", v);
  }

}

