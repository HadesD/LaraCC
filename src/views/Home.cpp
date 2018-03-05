#include "views/home.hpp"

namespace app::views
{

  Home::Home()
  {
    app::models::Article a;
    articles = a.getAll();
  }

}

