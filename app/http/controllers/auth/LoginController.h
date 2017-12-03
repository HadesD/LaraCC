#ifndef __APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_HPP_
#define __APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_HPP_

#include "app/core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace auth {

  class LoginController : public app::core::Controller
  {
    public:
      LoginController(cppcms::service &s);

      void index();
  };

} } } }

#endif
