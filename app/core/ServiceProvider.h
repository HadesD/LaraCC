#ifndef APP_CORE_SERVICE_PROVIDER_H_
#define APP_CORE_SERVICE_PROVIDER_H_
#include <cppcms/application.h>

#include "Model.h"

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
