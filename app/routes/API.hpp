#ifndef __APP_ROUTES_API_HPP__
#define __APP_ROUTES_API_HPP__

#include <cppcms/application.h>

namespace app { namespace routes {

  class API : public cppcms::application
  {
    public:
      API(cppcms::service &s);
  };

} }

#endif
