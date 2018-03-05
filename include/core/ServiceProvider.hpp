#ifndef __APP_CORE_SERVICE_PROVIDER_HPP__
#define __APP_CORE_SERVICE_PROVIDER_HPP__

#include <cppcms/application.h>

#include "../config/Constants.hpp"

namespace app::core
{

  class ServiceProvider : public cppcms::application
  {
    public:
      ServiceProvider(cppcms::service &s);
  };

}

#endif

