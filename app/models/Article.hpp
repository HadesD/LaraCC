#ifndef __APP_MODELS_ARTICLE_HPP__
#define __APP_MODELS_ARTICLE_HPP__

#include "app/core/Model.hpp"

#include <string>
#include <vector>

namespace app { namespace models {

  class Article : public app::core::Model
  {
    public:
      APP_MODEL("articles");

    public:
      Article();
      Article(const std::string& slug);
      Article(const int id);

    public:
      std::vector<Article> getAll()
      {
        __APP_TRY_CATCH_BEGIN__
        {
          std::vector<Article> articles;

          std::vector<int>
            ids = m_connector.select(
              m_primaryKeyName,
              m_tableName
              );

          for (const auto& id : ids)
          {
            articles.push_back(Article(id));
          }

          return articles;
        }
        __APP_TRY_CATCH_END__
      }

      struct TypeText
      {
        std::string name;
        std::string iconClassName;
        std::string featuredClassName;
      };
      TypeText getTypeText();

      std::string getContentHtml();

    private:
      APP_MODEL_SYNTHESIZE(int, id, Id);
      APP_MODEL_SYNTHESIZE(int, type, Type);
      APP_MODEL_SYNTHESIZE(std::string, slug, Slug);
      APP_MODEL_SYNTHESIZE(std::string, featured, Featured);
      APP_MODEL_SYNTHESIZE(std::string, title, Title);
      APP_MODEL_SYNTHESIZE(std::string, content, Content);
      APP_MODEL_SYNTHESIZE(int, author_id, AuthorId);

    private:
      std::string m_contentHtml;
  };

} }

#endif

