#include "app/views/home.hpp"

#include <cppcms/application.h>
#include <cppcms/json.h>

namespace app { namespace views { namespace layouts {

  Home::Home()
  {
    description = "ss";

    cppcms::json::value site = this->app().settings();
    this->site = Site({
      site.get<std::string>("app.site.title"),
        site.get<std::string>("app.site.sub_title")
    });
  }

  std::tm* Home::getDate()
  {
    std::time_t now = std::time(nullptr);

    std::tm *ltm = std::localtime(&now);

    return ltm;
  }

} } }

