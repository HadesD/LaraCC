#ifndef __APP_ROUTES_WEB_HPP__
#define __APP_ROUTES_WEB_HPP__

#include <cppcms/application.h>

#include "../core/ServiceProvider.hpp"

namespace app { namespace routes {

  class Web : public app::core::ServiceProvider
  {
    public:
      Web(cppcms::service &s);
  };

} }

#endif
