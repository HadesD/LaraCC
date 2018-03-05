#include "routes/Api.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>
#include <cppcms/json.h>

#include "http/controllers/api/ArticleController.hpp"
#include "http/controllers/api/dashboard/LoginController.hpp"
#include "http/controllers/api/dashboard/ArticleController.hpp"

namespace app::routes
{

  Api::Api(cppcms::service &s) : app::core::ServiceProvider(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      std::string dashboard_root = "/root";
      attach(
        new app::http::controllers::api::dashboard::Login(s),
        "dashboard_login",
        "{1}",
        dashboard_root + "/login",
        1
        );

      attach(
        new app::http::controllers::api::dashboard::ArticleController(s),
        "dashboard_article",
        "{1}",
        dashboard_root + "/articles(/?.*)",
        1
        );

      attach(
        new app::http::controllers::api::ArticleController(s),
        "articles",
        "{1}",
        "/articles(/?.*)",
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

}

