#include "http/controllers/home/ArticleController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "views/home/Article.hpp"

namespace app::http::controllers::home
{

  ArticleController::ArticleController(cppcms::service& s) :
    app::core::Controller(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(.*)", &ArticleController::read, this, 1);
  }

  void ArticleController::index()
  {
    try
    {
      app::views::home::Article articles;
    }
    catch (const app::database::ConnectorException&)
    {
      this->response().status(cppcms::http::response::not_found);
      this->response().out() << "Empty";
    }
  }

  void ArticleController::read(const std::string& urlPath)
  {
    try
    {
      app::views::home::Article v(urlPath);
      auto &article = v.article;

      const std::string &slug = article.getSlug();

      v.title = article.getTitle();

      this->render("article_read", v);
    }
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::not_found);
      this->response().out() << e.what();
    }
  }

}

