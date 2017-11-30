#ifndef APP_ROUTES_API_H_
#define APP_ROUTES_API_H_
#include <cppcms/application.h>

namespace app { namespace routes {
  class API : public cppcms::application
  {
    public:
      API(cppcms::service &s);
  };
} }

#endif
