#include "app/http/controllers/api/dashboard/LoginController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

namespace app::http::controllers::api::dashboard
{

  Login::Login(cppcms::service &s) :
    app::http::controllers::api::ApiController(s)
  {
    this->dispatcher().assign(".*", &Login::index, this);
  }

  void Login::index()
  {
    cppcms::json::value r;
    r["success"] = 1;
    r["success"]["data"] = 1;

    this->response().out() << r;
  }

}

