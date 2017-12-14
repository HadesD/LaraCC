#include "app/routes/API.hpp"

#include "app/http/controllers/api/dashboard/Login.hpp"

namespace app { namespace routes {

  API::API(cppcms::service &s) : app::core::ServiceProvider(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      attach(
        new app::http::controllers::api::dashboard::Login(s),
        "dashboard_login",
        "{1}",
        "/root/login",
        1
        );
    }
    __APP_TRY_CATCH_END__
  }

} }
