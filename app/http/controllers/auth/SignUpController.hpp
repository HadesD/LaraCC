#ifndef __APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_HPP__

#include "app/core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace auth {

  class SignUpController : public app::core::Controller
  {
    public:
      SignUpController(cppcms::service &s);

      void index();
  };

} } } }

#endif
