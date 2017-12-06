#include "app/routes/Web.hpp"

#include "app/http/controllers/HomeController.h"
#include "app/http/controllers/DashboardController.h"
#include "app/http/controllers/auth/LoginController.h"
#include "app/http/controllers/auth/SignUpController.h"

namespace app { namespace routes {

  Web::Web(cppcms::service &s) : app::core::ServiceProvider(s)
  {
    __APP_TRY_CATCH_BEGIN__

      attach(
        new app::http::controllers::HomeController(s),
        "home",
        "{1}",
        "/",
        1
        );

    attach(
      new app::http::controllers::DashboardController(s),
      "dashboar",
      "/dashboar{1}",
      "/dashboar((/?.*))",
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

    __APP_TRY_CATCH_END__
  }

} }
