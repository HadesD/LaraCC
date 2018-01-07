#include "app/routes/Web.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>
#include <cppcms/json.h>

#include "app/http/controllers/HomeController.hpp"
#include "app/http/controllers/ArticleController.hpp"
#include "app/http/controllers/DashboardController.hpp"
#include "app/http/controllers/auth/LoginController.hpp"
#include "app/http/controllers/auth/SignUpController.hpp"

namespace app { namespace routes {

  Web::Web(cppcms::service &s) : app::core::ServiceProvider(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      // Home
      attach(
        new app::http::controllers::HomeController(s),
        "home",
        "{1}",
        "/",
        1
        );

      // Article
      attach(
        new app::http::controllers::ArticleController(s),
        "articles",
        "{1}",
        "/articles((.*))",
        1
        );

      // Authors
      attach(
        new app::http::controllers::HomeController(s),
        "accounts",
        "{1}",
        "/accounts((/?.*))",
        1
        );

      // Categories
      attach(
        new app::http::controllers::HomeController(s),
        "categories",
        "{1}",
        "/categories((/?.*))",
        1
        );

      // Tags
      attach(
        new app::http::controllers::HomeController(s),
        "tags",
        "{1}",
        "/tags((/?.*))",
        1
        );

      // Dashboard
      attach(
        new app::http::controllers::DashboardController(s),
        "root",
        "/root{1}",
        "/root((/?.*))",
        1
        );

      attach(
        new app::http::controllers::auth::LoginController(s),
        "login",
        "{1}",
        "/login",
        1
        );

      attach(
        new app::http::controllers::auth::SignUpController(s),
        "sign_up",
        "{1}",
        "/signup",
        1
        );
    }
    __APP_TRY_CATCH_END__
  }

  void Web::main(const std::string url)
  {
    if (!this->dispatcher().dispatch(url))
    {
      this->response().status(cppcms::http::response::not_found);
    }
  }

} }

