#include "app/core/View.hpp"

#include <cppcms/application.h>

namespace app { namespace core {

  View::View()
  {
  }

  std::string View::asset(const std::string& urlPath)
  {
    return "/media/" + urlPath;
  }

} }

