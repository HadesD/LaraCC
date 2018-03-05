#ifndef __APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_HPP_
#define __APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_HPP_

#include "core/Controller.hpp"

namespace app::http::controllers::auth {

  class LoginController : public app::core::Controller
  {
    public:
      LoginController(cppcms::service &s);

      void index();
  };

}

#endif

