#include "app/http/controllers/DashboardController.h"

#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "app/views/dashboard.h"
#include "app/views/dashboard/login.hpp"

#include "app/models/Account.h"

namespace app { namespace http { namespace controllers {

  DashboardController::DashboardController(cppcms::service &s) : Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__

    dispatcher().assign("/login", &DashboardController::login, this);
    mapper().assign("login","/login");

    dispatcher().assign("", &DashboardController::index, this);
    mapper().assign("root", "");

    mapper().root("/root");

    __APP_TRY_CATCH_END__
  }

  void DashboardController::index()
  {
    // response().set_redirect_header(url("login"), 301);
    app::views::Dashboard v;
    v.title = _("Root :: Login");

    render("dashboard", v);
  }

  void DashboardController::login()
  {
    app::views::dashboard::Login v;
    v.title = _("Root :: Login");

    render("dashboard_login", v);
  }

} } }

