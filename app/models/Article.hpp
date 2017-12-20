#ifndef __APP_MODELS_ARTICLE_HPP__
#define __APP_MODELS_ARTICLE_HPP__

#include "app/core/Model.hpp"

#include <string>

namespace app { namespace models {

  class Article : public app::core::Model
  {
    APP_MODEL("article");

    public:
      Article(const int id);
      Article(const std::string& slug);

    private:
      int id;
      std::string slug;
      APP_SYNTHESIZE(std::string, title, Title);
      APP_SYNTHESIZE(std::string, content, Content);
      APP_SYNTHESIZE(int, author_id, AuthorId);
  };

} }

#endif

