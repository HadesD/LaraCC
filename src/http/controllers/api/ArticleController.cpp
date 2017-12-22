#include "app/http/controllers/api/ArticleController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_request.h>
#include <cppcms/http_response.h>

#include "app/models/Article.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  ArticleController::ArticleController(cppcms::service &s) : ApiController(s)
  {
    this->dispatcher().map("GET", "", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(.*)", &ArticleController::read, this, 1);
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value r;
      this->response().out() << r;
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::read(const std::string& urlPath)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      // app::models::Article a(urlPath);
      cppcms::json::value r;

      app::models::Article article;
      for(auto& a : article.getAll())
      {
        int id = a.getId();
        r["ss"] = id;
      }

      this->response().out() << r;
    }
    __APP_TRY_CATCH_END__
  }

} } } }

