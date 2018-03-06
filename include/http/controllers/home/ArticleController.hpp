#ifndef __APP_HTTP_CONTROLLERS_ARTICLE_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_ARTICLE_CONTROLLER_HPP__

#include "../../../core/Controller.hpp"

namespace app::http::controllers::home
{

  class ArticleController : public app::core::Controller
  {
    public:
      ArticleController(cppcms::service& s);

    public:
      void index();
      void read(const std::string& urlPath);
  };

}

#endif

