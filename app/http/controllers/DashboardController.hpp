#ifndef __APP_HTTP_CONTROLLERS_DASHBOARD_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_DASHBOARD_CONTROLLER_HPP__

#include "app/core/Controller.hpp"

namespace app { namespace http { namespace controllers {

  class DashboardController : public app::core::Controller
  {
    public:
      DashboardController(cppcms::service &s);

    public:
      void index();
      void login();
  };

} } }

#endif

