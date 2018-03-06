#ifndef __APP_HTTP_CONTROLLERS_HOME_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_HOME_CONTROLLER_HPP__

#include "../../core/Controller.hpp"

namespace app::http::controllers
{

  class HomeController : public app::core::Controller
  {
    public:
      HomeController(cppcms::service &s);

    void index();
  };

}

#endif

