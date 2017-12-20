#ifndef __APP_MODELS_ARTICLE_HPP__
#define __APP_MODELS_ARTICLE_HPP__

#include <string>

#include "app/core/Model.hpp"

namespace app { namespace models {

  class Article : public app::core::Model
  {
    public:
      Article();

    private:
      unsigned int id;
      std::string title;
      std::string content;
      std::string author_id;

    private:
  };

} }

#endif

