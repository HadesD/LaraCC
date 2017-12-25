#ifndef __APP_VIEWS_HOME_HPP__
#define __APP_VIEWS_HOME_HPP__

#include "app/views/layouts/home.hpp"

#include "app/models/Article.hpp"

namespace app { namespace views {

  struct Home : public app::views::layouts::Home
  {
    Home();

    std::vector<app::models::Article> articles;
  };

} }

#endif
