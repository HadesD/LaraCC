#include "app/core/Kernel.hpp"

#include <iostream>

#include <cppcms/http_request.h>

#include "app/routes/Web.hpp"
#include "app/routes/API.hpp"

namespace app { namespace core {

  Kernel::Kernel(cppcms::service& s) : cppcms::application(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      attach(
        new routes::API(s),
        "api",
        "/api{1}",
        "/api((/?.*))",
        1
        );

      // Web Route must be set at last of Router Lists.
      attach(
        new routes::Web(s),
        "web",
        "{1}",
        "((/?.*))",
        1
        );
    }
    __APP_TRY_CATCH_END__
  }

  void Kernel::main(const std::string urlPath)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::application::main(urlPath);
    }
    __APP_TRY_CATCH_END__
  }

} }
