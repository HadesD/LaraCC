#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_

#include "../../../../core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  class Login : public app::core::Controller
  {
    public:
      Login(cppcms::service &s);

    public:
      void index();
  };

} } } } }

#endif

