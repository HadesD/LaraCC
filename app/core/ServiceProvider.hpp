#ifndef __APP_CORE_SERVICE_PROVIDER_HPP__
#define __APP_CORE_SERVICE_PROVIDER_HPP__

#include <cppcms/application.h>

#include "Model.hpp"

namespace app { namespace core {

  class ServiceProvider : public cppcms::application
  {
    public:
      Model model;

    public:
      ServiceProvider(cppcms::service &s);
  };

} }

#endif
