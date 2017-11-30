#ifndef _APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_H_
#define _APP_HTTP_CONTROLLERS_AUTH_LOGIN_CONTROLLER_H_
#include "app/core/Controller.h"

namespace app { namespace http { namespace controllers { namespace auth {
  class LoginController : public app::core::Controller
  {
    public:
      LoginController(cppcms::service &s);

      void index();
  };
} } } }

#endif
