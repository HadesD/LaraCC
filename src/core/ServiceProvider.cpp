#include "app/core/ServiceProvider.h"

namespace app { namespace core {
  ServiceProvider::ServiceProvider(cppcms::service &s)
    : cppcms::application(s), model(s)
  {
  }
} }
