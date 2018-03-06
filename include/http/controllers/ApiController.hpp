#ifndef __APP_HTTP_CONTROLLERS_API_CONTROLLER__
#define __APP_HTTP_CONTROLLERS_API_CONTROLLER__

#include "../../core/Controller.hpp"

#include <cppcms/json.h>

namespace app::http::controllers
{

  class ApiController : public app::core::Controller
  {
    public:
      ApiController(cppcms::service& s);
      virtual ~ApiController() = 0;

    protected:
      cppcms::json::value m_response;
  };

}

#endif

