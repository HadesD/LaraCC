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

} } } }

