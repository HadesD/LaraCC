#ifndef _APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_H_
#define _APP_HTTP_CONTROLLERS_AUTH_REGISTER_CONTROLLER_H_
#include "app/core/Controller.h"

namespace app { namespace http { namespace controllers { namespace auth {
  class RegisterController : public app::core::Controller
  {
    public:
      RegisterController(cppcms::service &s);

      void index();
  };
} } } }

#endif
