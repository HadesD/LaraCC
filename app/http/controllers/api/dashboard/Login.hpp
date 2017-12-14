#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_LOGIN_

// #include "../../../../core/Controller.hpp"

#include <cppcms/application.h>
#include <cppcms/service.h>
#include <cppcms/applications_pool.h>
#include <cppcms/rpc_json.h>

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  class Login : public cppcms::rpc::json_rpc_server//public app::core::Controller
  {
    public:
      Login(cppcms::service &s);

    public:
      void index();

    private:
      // cppcms::rpc::json_rpc_server json_srv;
  };

} } } } }

#endif

