#include "app/http/controllers/dashboard/ArticleController.hpp"

#include <cppcms/http_response.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "app/views/dashboard/Article.hpp"

namespace app { namespace http { namespace controllers { namespace dashboard {

  ArticleController::ArticleController(cppcms::service& s) :
    Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->dispatcher().map("GET", "/?", &ArticleController::index, this);
      this->dispatcher().map("GET", "/new", &ArticleController::createNew, this);
      this->dispatcher().map(
        "GET", "/(\\d)/edit",
        &ArticleController::edit, this, 1
        );
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      app::views::dashboard::Article v;
      v.title = _("Root :: Articles");

      this->render("dashboard_article_index", v);
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::edit(const int id)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      app::views::dashboard::Article v;
      v.title = _("Root :: Articles :: Edit");

      this->render("dashboard_article_index", v);
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::createNew()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      app::views::dashboard::Article v;
      v.title = _("Root :: Articles :: New");

      this->render("dashboard_article_index", v);
    }
    __APP_TRY_CATCH_END__
  }

} } } }

