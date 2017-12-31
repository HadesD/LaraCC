#include "app/routes/Api.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>
#include <cppcms/json.h>

#include "app/http/controllers/api/dashboard/Login.hpp"
#include "app/http/controllers/api/ArticleController.hpp"

namespace app { namespace routes {

  Api::Api(cppcms::service &s) : app::core::ServiceProvider(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      attach(
        new app::http::controllers::api::dashboard::Login(s),
        "dashboard_login",
        "{1}",
        "/root/login",
        1
        );

      attach(
        new app::http::controllers::api::ArticleController(s),
        "articles",
        "{1}",
        "/articles((/?).*)",
        1
        );
    }
    __APP_TRY_CATCH_END__
  }

  void Api::main(const std::string url)
  {
    if (!this->dispatcher().dispatch(url))
    {
      this->response().status(cppcms::http::response::not_found);
      cppcms::json::value res;

      res["error"] = "API not found";

      this->response().out() << res;
    }
  }

} }

