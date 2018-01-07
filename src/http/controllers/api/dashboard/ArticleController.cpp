#include "app/http/controllers/api/dashboard/ArticleController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  ArticleController::ArticleController(cppcms::service& s) :
    app::http::controllers::api::ApiController(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value r;
      r["success"] = 1;
      r["success"]["data"] = 1;

      this->response().out() << r;
    }
    __APP_TRY_CATCH_END__
  }

} } } } }

