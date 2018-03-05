#ifndef __APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_HPP__

#include "core/Controller.hpp"

namespace app::http::controllers::auth {

  class SignUpController : public app::core::Controller
  {
    public:
      SignUpController(cppcms::service &s);

      void index();
  };

}

#endif

