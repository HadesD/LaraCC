#ifndef _APP_CORE_CONTROLLERS_CONTROLLER_H_
#define _APP_CORE_CONTROLLERS_CONTROLLER_H_
#include <cppcms/application.h>

#include "ServiceProvider.h"

namespace app { namespace core {
  class Controller : public ServiceProvider
  {
   public:
    Controller(cppcms::service &s);
  };
} }

#endif
