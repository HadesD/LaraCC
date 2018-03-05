#ifndef __APP_HTTP_CONTROLLERS_HOME_AUTH_LOGIN_CONTROLLER_HPP_
#define __APP_HTTP_CONTROLLERS_HOME_AUTH_LOGIN_CONTROLLER_HPP_

#include "../../../../core/Controller.hpp"

namespace app::http::controllers::home::auth
{

  class LoginController : public app::core::Controller
  {
    public:
      LoginController(cppcms::service &s);

      void index();
  };

}

#endif

