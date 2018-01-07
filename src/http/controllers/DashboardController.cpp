#include "app/http/controllers/DashboardController.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "app/views/dashboard.hpp"
#include "app/views/dashboard/Login.hpp"
#include "app/views/dashboard/Index.hpp"

#include "app/http/controllers/dashboard/ArticleController.hpp"

namespace app { namespace http { namespace controllers {

  DashboardController::DashboardController(cppcms::service &s) : Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      dispatcher().assign("/login", &DashboardController::login, this);
      mapper().assign("login","/login");

      dispatcher().assign("", &DashboardController::index, this);
      mapper().assign("root", "");

      attach(
        new app::http::controllers::dashboard::ArticleController(s),
        "articles",
        "{1}",
        "/articles((.*))",
        1
        );

      mapper().root("/root");
    }
    __APP_TRY_CATCH_END__
  }

  void DashboardController::index()
  {
    app::views::dashboard::Index v;
    v.title = _("Root :: Index");

    this->render("dashboard_index", v);
  }

  void DashboardController::login()
  {
    app::views::dashboard::Login v;
    v.title = _("Root :: Login");

    this->render("dashboard_login", v);
  }

} } }

