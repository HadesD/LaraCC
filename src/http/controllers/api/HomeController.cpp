#include "app/http/controllers/api/HomeController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_request.h>
#include <cppcms/http_response.h>

#include "app/models/Article.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  HomeController::HomeController(cppcms::service &s) : ApiController(s)
  {
    this->dispatcher().map("GET", "/?", &HomeController::index, this);
  }

  void HomeController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value res;
      app::models::Article article;

      auto articles = article.getAll();

      for (int i = 0; i < articles.size(); i++)
      {
        res["id"] = i;
      }

      // res["id"] = article.getId();
      // res["permalink"] = '/' + article.getSlug();
      // res["title"] = article.getTitle();
      // res["content"] = article.getContent();
      // res["author"]["name"] = article.getAuthorId();
      // res["author"]["url"] = article.getAuthorId();
      // res["tags"][0]["name"] = "";
      // res["tags"][0]["url"] = "";
      // res["categories"][0]["name"] = "";
      // res["categories"][0]["url"] = "";

      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

} } } }

