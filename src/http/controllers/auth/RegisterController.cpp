#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "app/http/controllers/auth/RegisterController.h"
#include "app/views/register.h"

namespace app { namespace http { namespace controllers { namespace auth {
  RegisterController::RegisterController(cppcms::service &s) :
    app::core::Controller(s)
  {
    dispatcher().assign(".*", &RegisterController::index, this);
    mapper().assign("register","/register");
  }

  void RegisterController::index()
  {
    app::views::Register v;
    v.title = _("Register new account");

    render("user_register", v);
  }
} } } }
