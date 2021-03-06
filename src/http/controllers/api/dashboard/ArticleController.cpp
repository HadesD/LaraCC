#include "http/controllers/api/dashboard/ArticleController.hpp"

#include <cppcms/json.h>
#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "models/Article.hpp"
#include "views/dashboard/article/EditForm.hpp"
#include "core/Helpers.hpp"

namespace app::http::controllers::api::dashboard
{

  ArticleController::ArticleController(cppcms::service& s) :
    app::http::controllers::ApiController(s)
  {
    this->dispatcher().map("GET", "/?", &ArticleController::index, this);
    this->dispatcher().map("GET", "/(\\d)", &ArticleController::read, this, 1);
    this->dispatcher().map("POST", "/?", &ArticleController::create, this);

    // Change from PATCH to POST
    this->dispatcher().map("POST", "/(\\d)", &ArticleController::update, this, 1);
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
        r["content"] = article.getContent();
        r["created_at"] = article.getCreatedAt();
        r["updated_at"] = article.getUpdatedAt();

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
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res.null();
      res["error"] = e.what();
    }

    if (res.is_undefined())
    {
      this->response().status(cppcms::http::response::not_found);
      res["error"] = true;
    }

    this->response().out() << res;
  }

  void ArticleController::read(const int id)
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
        r["created_at"] = article.getCreatedAt();
        r["updated_at"] = article.getUpdatedAt();

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
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res["error"] = e.what();
    }

    if (res.is_undefined())
    {
      this->response().status(cppcms::http::response::not_found);
      res["error"] = true;
    }

    this->response().out() << res;
  }

  void ArticleController::create()
  {
    cppcms::json::value res;

    try
    {
      app::models::Article article;
      auto c = new views::dashboard::article::EditForm();
      c->load(this->context());

      if (c->validate())
      {
        // std::cout << c->title.value() << std::endl;
        // std::cout << c->content.value() << std::endl;
        // std::cout << c->slug.value() << std::endl;

        // article.setTitle(c->title.value());
        // article.setSlug(c->slug.value());
        // article.setContent(c->content.value());

        std::string select_statement =
        "SELECT MAX("
        "id"
        ") FROM "
        + app::models::Article::getTableName()
        ;
        int id;
        article.getConnector()->exec()
        << select_statement
        >> id
        ;
        id++;

        std::string statement =
        "INSERT INTO "
        + app::models::Article::getTableName()
        + "(id, type, slug, title, content, created_at, updated_at)"
        + " VALUES(?,?,?,?,?,?,?)"
        + ";"
        ;

        std::string datetime = app::core::Helpers::strftime("%Y/%m/%d %H:%M:%S");

        article.getConnector()->beginTransaction();
        article.getConnector()->exec()
        << statement
        << id
        << c->type.selected_id()
        << c->slug.value()
        << c->title.value()
        << c->content.value()
        << datetime
        << datetime
        ;
        article.getConnector()->commit();
      }
      else
      {
        res["error"] = true;
      }
      delete c;
    }
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res["error"] = true;
    }

    if (res.is_undefined())
    {
      res["error"] = false;
    }

    this->response().out() << res;
  }

  void ArticleController::update(const int id)
  {
    cppcms::json::value res;

    try
    {
      app::models::Article article(id);
      auto c = new views::dashboard::article::EditForm();
      c->load(this->context());

      if (c->validate())
      {
        // article.setTitle(c->title.value());
        // article.setSlug(c->slug.value());
        // article.setContent(c->content.value());

        std::string statement =
        "UPDATE "
        + app::models::Article::getTableName()
        + " SET slug=?"
        + ",title=?"
        + ",content=?"
        + ",type=?"
        + ",updated_at=?"
        + " WHERE "
        + article.getPrimaryKeyName()
        + "=?"
        + ";"
        ;

        std::string datetime = app::core::Helpers::strftime("%Y/%m/%d %H:%M:%S");

        article.getConnector()->beginTransaction();
        article.getConnector()->exec()
        << statement
        << c->slug.value()
        << c->title.value()
        << c->content.value()
        << c->type.selected_id()
        << datetime
        << id
        ;
        article.getConnector()->commit();
      }
      else
      {
        res["error"] = true;
      }
      delete c;
    }
    catch (const app::database::ConnectorException& e)
    {
      this->response().status(cppcms::http::response::internal_server_error);
      res["error"] = true;
    }

    if (res.is_undefined())
    {
      res["error"] = false;
    }

    this->response().out() << res;
  }

}

