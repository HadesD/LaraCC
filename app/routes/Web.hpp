#ifndef APP_ROUTES_WEB_HPP
#define APP_ROUTES_WEB_HPP

#include <cppcms/application.h>

#include "../core/ServiceProvider.h"

namespace app { namespace routes {
  class Web : public app::core::ServiceProvider
  {
    public:
      Web(cppcms::service &s);
  };
} }

#endif
