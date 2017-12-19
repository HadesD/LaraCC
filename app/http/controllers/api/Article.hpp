#ifndef __APP_HTTP_CONTROLLERS_API_ARTICLE_
#define __APP_HTTP_CONTROLLERS_API_ARTICLE_

#include "../../../core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  class Article : public app::core::Controller
  {
    public:
      Article(cppcms::service &s);

    public:
      void index();
  };

} } } }

#endif

