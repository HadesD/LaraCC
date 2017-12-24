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
      cppcms::json::value res;
      app::models::Article article(urlPath);

      res["id"] = article.getId();
      res["permalink"] = "/articles/" + urlPath + article.getSlug();
      res["title"] = article.getTitle();
      res["content"] = article.getContent();
      res["author"]["name"] = article.getAuthorId();
      res["author"]["url"] = article.getAuthorId();
      res["tags"][0]["name"] = "";
      res["tags"][0]["url"] = "";
      res["categories"][0]["name"] = "";
      res["categories"][0]["url"] = "";
      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

} } } }

