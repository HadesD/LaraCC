#ifndef _APP_CORE_CONTROLLER_HPP_
#define _APP_CORE_CONTROLLER_HPP_

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
