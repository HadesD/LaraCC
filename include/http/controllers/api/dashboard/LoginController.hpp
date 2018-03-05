#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_

#include "../ApiController.hpp"

namespace app::http::controllers::api::dashboard
{

  class Login : public app::http::controllers::api::ApiController
  {
    public:
      Login(cppcms::service &s);

    public:
      void index();
  };

}

#endif

