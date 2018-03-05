#ifndef APP_HTTP_CONTROLLERS_HOME_CONTROLLER_H_
#define APP_HTTP_CONTROLLERS_HOME_CONTROLLER_H_

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

