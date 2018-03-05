#ifndef __APP_VIEWS_HOME_ARTICLE_HPP__
#define __APP_VIEWS_HOME_ARTICLE_HPP__

#include "../layouts/Home.hpp"

#include "../../models/Article.hpp"

namespace app::views::home
{

  class Article : public app::views::layouts::Home
  {
    public:
      Article();
      Article(const std::string& slug);

    public:
      app::models::Article article;
  };

}

#endif

