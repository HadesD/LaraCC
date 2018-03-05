#include "http/controllers/ArticleController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "views/article.hpp"

namespace app::http::controllers
{

  ArticleController::ArticleController(cppcms::service& s) :
    app::core::Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->dispatcher().map("GET", "/?", &ArticleController::index, this);
      this->dispatcher().map("GET", "/(.*)", &ArticleController::read, this, 1);
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      try
      {
        app::views::Article articles;
      }
      catch (const app::database::ConnectorException&)
      {
        this->response().status(cppcms::http::response::not_found);
        this->response().out() << "Empty";
      }
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::read(const std::string& urlPath)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      try
      {
        app::views::Article v(urlPath);
        auto &article = v.article;

        const std::string &slug = article.getSlug();

        v.title = article.getTitle();

        this->render("article_read", v);
      }
      catch (const app::database::ConnectorException&)
      {
        this->response().status(cppcms::http::response::not_found);
        this->response().out() << "404";
      }
    }
    __APP_TRY_CATCH_END__
  }

}

