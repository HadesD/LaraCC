#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppdb/frontend.h>

#include "app/http/controllers/DashboardController.h"
#include "app/views/dashboard.h"
#include "app/models/Account.h"

namespace app { namespace http { namespace controllers {

  DashboardController::DashboardController(cppcms::service &s) : Controller(s)
  {
    dispatcher().assign("/login(/)?", &DashboardController::login, this);
    mapper().assign("login","/login");

    dispatcher().assign("(/)?", &DashboardController::index, this);
    mapper().assign("dashboard", "");
  }

  void DashboardController::index()
  {
    response().set_redirect_header(url("login"), 301);
  }

  void DashboardController::login()
  {
  }

} } }

