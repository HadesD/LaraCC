#include "http/controllers/auth/SignUpController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "views/register.hpp"

namespace app::http::controllers::auth
{

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

}

