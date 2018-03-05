#ifndef __APP_HTTP_CONTROLLERS_ACCOUNT_CONTROLLER_HPP_
#define __APP_HTTP_CONTROLLERS_ACCOUNT_CONTROLLER_HPP_

#include "../../../core/Controller.hpp"

namespace app::http::controllers::home
{

  class AccountController : public app::core::Controller
  {
    public:
      AccountController(cppcms::service& s);

    public:
      void index();
      void read(const std::string& urlPath);
  };

}

#endif
