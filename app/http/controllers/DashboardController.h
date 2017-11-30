#ifndef _APP_HTTP_CONTROLLERS_DASHBOARD_CONTROLLER_H_
#define _APP_HTTP_CONTROLLERS_DASHBOARD_CONTROLLER_H_
#include "app/core/Controller.h"

namespace app { namespace http { namespace controllers {
  class DashboardController : public app::core::Controller
  {
    public:
      DashboardController(cppcms::service &s);

    public:
      void index();
      void do_login();
  };
} } }

#endif
