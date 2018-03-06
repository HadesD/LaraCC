#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_ARTICLE_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_ARTICLE_CONTROLLER_HPP__

#include "../../ApiController.hpp"

namespace app::http::controllers::api::dashboard
{

  class ArticleController : public app::http::controllers::ApiController
  {
    public:
      ArticleController(cppcms::service &s);

    public:
      void index();
      void read(const int id);
      void create();
      void update(const int id);
  };

}

#endif

