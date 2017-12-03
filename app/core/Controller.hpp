#ifndef _APP_CORE_CONTROLLERS_CONTROLLER_HPP_
#define _APP_CORE_CONTROLLERS_CONTROLLER_HPP_

#include <cppcms/application.h>

#include "ServiceProvider.hpp"

namespace app { namespace core {

  class Controller : public ServiceProvider
  {
    public:
      Controller(cppcms::service &s);
  };

} }

#endif
