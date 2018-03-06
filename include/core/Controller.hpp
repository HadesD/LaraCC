#ifndef __APP_CORE_CONTROLLER_HPP__
#define __APP_CORE_CONTROLLER_HPP__

#include "ServiceProvider.hpp"

namespace app::core
{

  class Controller : public ServiceProvider
  {
    public:
      Controller(cppcms::service &s);
  };

}

#endif

