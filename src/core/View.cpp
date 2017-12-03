#include "app/core/View.hpp"

namespace app { namespace core {

  View::View()
  {
  }

  std::string View::asset(const std::string urlPath)
  {
    return "/media/" + urlPath;
  }

} }
