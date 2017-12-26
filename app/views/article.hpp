#ifndef __APP_VIEWS_ARTICLE_HPP__
#define __APP_VIEWS_ARTICLE_HPP__

#include "app/views/layouts/home.hpp"

#include "app/models/Article.hpp"

namespace app { namespace views {

  struct Article : public app::views::layouts::Home
  {
    Article();
    Article(const std::string& slug);

    app::models::Article article;
  };

} }

#endif

