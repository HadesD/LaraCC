#include "app/http/controllers/api/dashboard/Login.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  Login::Login(cppcms::service &s) :
    // app::core::Controller(s),
    // json_srv(s)
    cppcms::rpc::json_rpc_server(s)
  {
    // dispatcher().assign(".*", &Login::index, this);
    std::bind("get", cppcms::rpc::json_method(&Login::index, this),
              method_role);
  }

  void Login::index()
  {
    cppcms::json::value r;
    r['s'] = 1;

    this->return_result(r);

    // json_srv.return_result("fsdfsdf");

    // return r;
  }

} } } } }

