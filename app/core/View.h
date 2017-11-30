#ifndef _APP_CORE_VIEW_H_
#define _APP_CORE_VIEW_H_
#include <cppcms/application.h>
#include <cppcms/view.h>
#include <string>

#define _(X) ::cppcms::locale::translate(X)

namespace app { namespace core {
  struct View : public cppcms::base_content
  {
    View();
    std::string asset(std::string path);
  };
} }

#endif
