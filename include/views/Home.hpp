#ifndef __APP_VIEWS_HOME_HPP__
#define __APP_VIEWS_HOME_HPP__

#include "layouts/Home.hpp"

#include "models/Article.hpp"

namespace app::views
{

  class Home : public app::views::layouts::Home
  {
    public:
      Home();

    public:
      std::vector<app::models::Article> articles;
  };

}

#endif

