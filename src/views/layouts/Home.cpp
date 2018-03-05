#include "views/layouts/Home.hpp"

#include <cppcms/json.h>

namespace app::views::layouts
{

  Home::Home()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      description = "ss";
    }
    __APP_TRY_CATCH_END__
  }

  std::tm* Home::getDate()
  {
    std::time_t now = std::time(nullptr);

    std::tm *ltm = std::localtime(&now);

    return ltm;
  }

  cppcms::json::value Home::getSettings()
  {
    return this->app().settings();
  }

}

