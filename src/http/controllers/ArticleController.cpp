#include "app/http/controllers/ArticleController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>

#include "app/views/article.hpp"

namespace app { namespace http { namespace controllers {

  ArticleController::ArticleController(cppcms::service& s) :
    app::core::Controller(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(.*)", &ArticleController::read, this, 1);
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
        this->response().out() << "404";
      }
    }
    __APP_TRY_CATCH_END__
  }

} } }

