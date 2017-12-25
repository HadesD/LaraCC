#include "app/http/controllers/auth/SignUpController.h"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "app/views/register.hpp"

namespace app { namespace http { namespace controllers { namespace auth {

  SignUpController::SignUpController(cppcms::service &s) :
    app::core::Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__

    dispatcher().assign(".*", &SignUpController::index, this);
    mapper().assign("sign_up","/signup");

    __APP_TRY_CATCH_END__
  }

  void SignUpController::index()
  {
    app::views::Register v;
    v.title = _("Register new account");

    render("sign_up", v);
  }

} } } }
