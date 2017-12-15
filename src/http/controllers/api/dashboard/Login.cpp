#include "app/http/controllers/api/dashboard/Login.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  Login::Login(cppcms::service &s) : app::core::Controller(s)
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

} } } } }

