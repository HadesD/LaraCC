#include "http/controllers/api/home/ArticleController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_request.h>
#include <cppcms/http_response.h>

#include "models/Article.hpp"

namespace app::http::controllers::api::home
{

  ArticleController::ArticleController(cppcms::service &s) :
    app::http::controllers::ApiController(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(.*)", &ArticleController::read, this, 1);
  }

  void ArticleController::index()
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
        r["created_at"] = article.getCreatedAt();
        r["updated_at"] = article.getUpdatedAt();
        auto content = article.getContent();
        if (static_cast<int>(r["type"].number()) != 2)
        {
          std::size_t _maxContentChar = 150;
          if (content.size() > _maxContentChar)
          {
            content.resize(_maxContentChar);
            content += "&lsqb;...&rsqb;";
          }
        }
        r["content"] = content;

        // TypeText
        auto &rTypeText = r["type_text"];
        auto typeText = article.getTypeText();
        rTypeText["name"] = typeText.name;
        rTypeText["format"] = typeText.format;
        rTypeText["icon_class_name"] = typeText.iconClassName;
        rTypeText["featured_class_name"] = typeText.featuredClassName;
        rTypeText["icon_class_name"] = typeText.iconClassName;

        // Author
        auto &rAuthor = r["author"];
        rAuthor["id"] = article.getAuthorId();
        rAuthor["url"] = "/";
        // rAuthor["name"] = article.getAuthorId();
        rAuthor["name"] = "Hai Le";

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
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res.null();
      res["error"] = e.what();
    }

    if (res.is_null())
    {
      this->response().status(cppcms::http::response::not_found);
      res["error"] = true;
    }

    this->response().out() << res;
  }

  void ArticleController::read(const std::string& urlPath)
  {
    cppcms::json::value res;

    try
    {
      app::models::Article article(urlPath);

      res["id"] = article.getId();
      res["permalink"] = "/articles/" + article.getSlug();
      res["type"] = article.getType();
      res["featured"] = article.getFeatured();
      res["title"] = article.getTitle();
      res["content"] = article.getContent();
      res["created_at"] = article.getCreatedAt();
      res["updated_at"] = article.getUpdatedAt();

      // TypeText
      auto &rTypeText = res["type_text"];
      auto typeText = article.getTypeText();
      rTypeText["name"] = typeText.name;
      rTypeText["format"] = typeText.format;
      rTypeText["icon_class_name"] = typeText.iconClassName;
      rTypeText["featured_class_name"] = typeText.featuredClassName;
      rTypeText["icon_class_name"] = typeText.iconClassName;

      // Author
      auto &rAuthor = res["author"];
      rAuthor["url"] = "/";
      // rAuthor["name"] = article.getAuthorId();
      rAuthor["name"] = "Hai Le";

      // Tags
      for (int t = 0; t < 0; t++)
      {
        auto &rTag = res["tags"][t];

        rTag["url"] = "/";
        rTag["name"] = "none";
      }

      // Categories
      for (int c = 0; c < 0; c++)
      {
        auto &rCat = res["categories"][c];

        rCat["url"] = "/";
        rCat["name"] = "none";
      }
    }
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res["error"] = e.what();
    }

    if (res.is_null())
    {
      this->response().status(cppcms::http::response::not_found);
      res["error"] = true;
    }

    this->response().out() << res;
  }

}

