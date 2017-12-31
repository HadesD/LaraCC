#include "app//views/home.hpp"

namespace app { namespace views {

  Home::Home()
  {
    app::models::Article a;
    articles = a.getAll();
  }

} }

