#ifndef __APP_HTTP_CONTROLLERS_DASHBOARD_ARTICLE_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_DASHBOARD_ARTICLE_CONTROLLER_HPP__

#include "app/core/Controller.hpp"

namespace app { namespace http { namespace controllers { namespace dashboard {

  class ArticleController : public app::core::Controller
  {
    public:
      ArticleController(cppcms::service &s);

    public:
      void index();
      void edit();
  };

} } } }

#endif

