#include "app/http/controllers/api/dashboard/ArticleController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>
// #include <cppcms/http_request.h>

#include "app/models/Article.hpp"

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  ArticleController::ArticleController(cppcms::service& s) :
    app::http::controllers::api::ApiController(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(\\d)", &ArticleController::read, this, 1);
    this->dispatcher().map("POST", "/?", &ArticleController::create, this);
    this->dispatcher().map("PATCH", "/(\\d)", &ArticleController::update, this, 1);
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value res;

      try
      {
        app::models::Article article;

        auto articles = article.getAll();

        for (int i = 0; i < articles.size(); i++)
        {
          auto &article = articles.at(i);

          auto &r = res[i];

          r["id"] = article.getId();
          r["permalink"] = "/articles/" + article.getSlug();
          r["title"] = article.getTitle();
          r["type"] = article.getType();
          r["featured"] = article.getFeatured();
          r["content"] = article.getContent();

          // TypeText
          auto &rTypeText = r["type_text"];
          auto typeText = article.getTypeText();
          rTypeText["name"] = typeText.name;
          rTypeText["icon_class_name"] = typeText.iconClassName;
          rTypeText["featured_class_name"] = typeText.featuredClassName;
          rTypeText["icon_class_name"] = typeText.iconClassName;

          // Author
          auto &rAuthor = r["author"];
          rAuthor["id"] = article.getAuthorId();
          rAuthor["url"] = "/";
          rAuthor["name"] = article.getAuthorId();

          // Tags
          for (int t = 0; t < 0; t++)
          {
            auto &rTag = r["tags"][t];
            rTag["id"] = "/";
            rTag["url"] = "/";
            rTag["name"] = "none";
          }
        }
      }
      catch (const app::database::ConnectorException&)
      {
        this->response().status(cppcms::http::response::not_found);
        res["error"] = "error";
      }

      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::read(const int id)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value res;

      try
      {
        app::models::Article article(id);

        {
          auto &r = res;

          r["id"] = article.getId();
          r["slug"] = article.getSlug();
          r["permalink"] = "/articles/" + r["slug"].str();
          r["title"] = article.getTitle();
          r["type"] = article.getType();
          r["featured"] = article.getFeatured();
          r["content"] = article.getContent();

          // TypeText
          auto &rTypeText = r["type_text"];
          auto typeText = article.getTypeText();
          rTypeText["name"] = typeText.name;
          rTypeText["icon_class_name"] = typeText.iconClassName;
          rTypeText["featured_class_name"] = typeText.featuredClassName;
          rTypeText["icon_class_name"] = typeText.iconClassName;

          // Author
          auto &rAuthor = r["author"];
          rAuthor["id"] = article.getAuthorId();
          rAuthor["url"] = "/";
          rAuthor["name"] = article.getAuthorId();

          // Tags
          for (int t = 0; t < 0; t++)
          {
            auto &rTag = r["tags"][t];
            rTag["id"] = "/";
            rTag["url"] = "/";
            rTag["name"] = "none";
          }
        }
      }
      catch (const app::database::ConnectorException&)
      {
        this->response().status(cppcms::http::response::not_found);
        res["error"] = "error";
      }

      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::create()
  {
  }

  void ArticleController::update(const int id)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      cppcms::json::value res;

      auto &success = res["success"];

      success = false;

      try
      {
        app::models::Article article(id);

        {
          // cppcms::http::request &req = this->request();
          success = true;
        }
      }
      catch (const app::database::ConnectorException&)
      {
        this->response().status(cppcms::http::response::not_found);
        res["error"] = "error DB";
      }


      this->response().out() << res;
    }
    __APP_TRY_CATCH_END__
  }

} } } } }

