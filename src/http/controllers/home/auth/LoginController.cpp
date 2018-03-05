#include "http/controllers/home/auth/LoginController.hpp"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "views/home/Login.hpp"

namespace app::http::controllers::home::auth
{

  LoginController::LoginController(cppcms::service &s) :
    app::core::Controller(s)
  {
    dispatcher().assign(".*", &LoginController::index, this);
    mapper().assign("login","/login");
  }

  void LoginController::index()
  {
    app::views::home::Login v;
    v.title = _("Login");

    render("login", v);
  }

}

