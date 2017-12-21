#ifndef __APP_HTTP_CONTROLLERS_API_API_CONTROLLER__
#define __APP_HTTP_CONTROLLERS_API_API_CONTROLLER__

#include "../../../core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  class ApiController : public app::core::Controller
  {
    public:
      ApiController(cppcms::service& s);
      virtual ~ApiController() = 0;
  };

} } } }

#endif
