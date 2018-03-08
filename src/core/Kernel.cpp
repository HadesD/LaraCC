#include "core/Kernel.hpp"

#include <iostream>

#include <cppcms/http_request.h>

#include "routes/Web.hpp"
#include "routes/Api.hpp"

namespace app::core
{

  Kernel::Kernel(cppcms::service& s) : cppcms::application(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->attach(
        new routes::Api(s),
        "api",
        "/api{1}",
        "/api((/?.*))",
        1
        );

      // Web Route must be set at last of Router Lists.
      this->attach(
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

}

