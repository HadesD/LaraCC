#ifndef __APP_CORE_VIEW_HPP__
#define __APP_CORE_VIEW_HPP__

#include <cppcms/view.h>
#include <string>

#include "../config/Constants.hpp"

#define _(X) ::cppcms::locale::translate(X)

namespace app::core
{

  class View : public cppcms::base_content
  {
    public:
      View();

    public:
      std::string asset(const std::string& urlPath);
  };

}

#endif

