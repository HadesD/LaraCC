#ifndef __APP_MODELS_ARTICLE_HPP__
#define __APP_MODELS_ARTICLE_HPP__

#include "app/core/Model.hpp"

#include <string>

namespace app { namespace models {

  class Article : public app::core::Model
  {
    APP_MODEL("articles");

    public:
      Article(const std::string& slug)
      {
        std::pair<std::string, std::string> w("slug", slug);
        this->id = m_connector.select<int>(
          "id",
          m_tableName,
          w
        );
      }

    private:
      std::string slug;
      APP_MODEL_SYNTHESIZE(int, id, Id);
      APP_MODEL_SYNTHESIZE(std::string, title, Title);
      APP_MODEL_SYNTHESIZE(std::string, content, Content);
      APP_MODEL_SYNTHESIZE(int, author_id, AuthorId);
  };

} }

#endif

