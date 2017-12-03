#include <cppcms/http_request.h>
#include <iostream>

#include "app/core/Kernel.hpp"
#include "app/routes/Web.hpp"
#include "app/routes/API.hpp"

namespace app { namespace core {

  Kernel::Kernel(cppcms::service& s) : cppcms::application(s)
  {
    auto r = new routes::API(s);
    attach(r,
      "api",
      "/api{1}",
      "/api((/?.*))",
      1);

    // Web Route must be set at last of Router Lists.
    attach(new routes::Web(s),
      "web",
      "{1}",
      "((/?.*))",
      1);
  }

  void Kernel::main(const std::string urlPath)
  {
    try
    {
      cppcms::application::main(urlPath);
    }
    catch(const std::exception& e)
    {
      std::cerr << "Failed: " << std::endl;
      std::cerr << booster::trace(e) << std::endl;
    }
    catch(...)
    {
      std::cerr << "Error has exceptioned!" << std::endl;
    }
  }

} }
