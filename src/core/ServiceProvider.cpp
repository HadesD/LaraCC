#include "core/ServiceProvider.hpp"

namespace app::core
{

  ServiceProvider::ServiceProvider(cppcms::service &s)
    : cppcms::application(s)
  {
  }

}

