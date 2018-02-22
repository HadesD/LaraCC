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
      virtual bool save() override;
      virtual bool save(const std::vector<std::string>& listToSave) override;

    public:
      std::vector<Article> getAll();

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

