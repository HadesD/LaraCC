#include "app/http/controllers/api/Article.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "app/models/Article.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  Article::Article(cppcms::service &s) : ApiController(s)
  {
    this->dispatcher().map("GET", ".*", &Article::read, this);
    this->dispatcher().map("POST", ".*", &Article::read, this);
  }

  void Article::read()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      app::models::Article a("ff-ff");
      cppcms::json::value r;
      r["success"] = 1;
      r["ss"] = a.getId();
      r["s"] = a.getTitle();
      r["success"]["data"] = 1;

      this->response().out() << r;
    }
    __APP_TRY_CATCH_END__
  }

} } } }

