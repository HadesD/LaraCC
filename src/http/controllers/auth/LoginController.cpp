#include "app/http/controllers/auth/LoginController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "app/views/login.hpp"

namespace app { namespace http { namespace controllers { namespace auth {

  LoginController::LoginController(cppcms::service &s) :
    app::core::Controller(s)
  {
    dispatcher().assign(".*", &LoginController::index, this);
    mapper().assign("login","/login");
  }

  void LoginController::index()
  {
    app::views::Login v;
    v.title = _("Login");

    render("login", v);
  }

} } } }
