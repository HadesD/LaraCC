#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_

#include "../ApiController.hpp"

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  class Login : public app::http::controllers::api::ApiController
  {
    public:
      Login(cppcms::service &s);

    public:
      void index();
  };

} } } } }

#endif

