#include "app/core/ServiceProvider.hpp"

namespace app { namespace core {

  ServiceProvider::ServiceProvider(cppcms::service &s)
    : cppcms::application(s), model(s)
  {
  }

} }
