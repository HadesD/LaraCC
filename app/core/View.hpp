#ifndef __APP_CORE_VIEW_HPP__
#define __APP_CORE_VIEW_HPP__

#include <cppcms/application.h>
#include <cppcms/view.h>
#include <string>

#define _(X) ::cppcms::locale::translate(X)

namespace app { namespace core {

  struct View : public cppcms::base_content
  {
    View();

    std::string asset(const std::string urlPath);
  };

} }

#endif
