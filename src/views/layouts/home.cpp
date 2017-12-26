#include "app/views/home.hpp"

namespace app { namespace views { namespace layouts {

  Home::Home()
  {
    description = "ss";
  }

  std::tm Home::getDate()
  {
    std::time_t now = std::time(nullptr);

    std::tm *ltm = std::localtime(&now);

    ltm->tm_year += 1900;

    return *ltm;
  }

} } }

