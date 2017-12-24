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
      cppcms::json::value res;
      app::models::Article article;

      auto articles = article.getAll();

      for (int i = 0; i < articles.size(); i++)
      {
        auto &article = articles.at(i);

        auto &r = res[i];

        r["id"] = article.getId();
        r["permalink"] = "/articles/" + article.getSlug();
        r["title"] = article.getTitle();
        r["content"] = article.getContent();

        // Author
        auto &rAuthor = r["author"];
        rAuthor["url"] = "/";
        rAuthor["name"] = article.getAuthorId();

        // Tags
        for (int t = 0; t < 1; t++)
        {
          auto &rTag = r["tags"][t];

          rTag["url"] = "/";
          rTag["name"] = "none";
        }
      }

      this->response().out() << res;
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

      // Author
      auto &rAuthor = res["author"];
      rAuthor["url"] = "/";
      rAuthor["name"] = article.getAuthorId();

      // Tags
      for (int t = 0; t < 1; t++)
      {
        auto &rTag = res["tags"][t];

        rTag["url"] = "/";
        rTag["name"] = "none";
      }

      // Categories
      for (int c = 0; c < 1; c++)
      {
        auto &rCat = res["categories"][c];

        rCat["url"] = "/";
        rCat["name"] = "none";
      }

      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

} } } }

