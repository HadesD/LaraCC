#ifndef __APP_CORE_VIEW_HPP__
#define __APP_CORE_VIEW_HPP__

#include <cppcms/view.h>
#include <string>

#define _(X) ::cppcms::locale::translate(X)

namespace app { namespace core {

  class View : public cppcms::base_content
  {
    public:
      View();

    public:
      std::string asset(const std::string& urlPath);
  };

} }

#endif
