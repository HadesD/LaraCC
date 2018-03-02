#ifndef __APP_HTTP_CONTROLLERS_API_DASHBOARD_ARTICLE_CONTROLLER_HPP__
#define __APP_HTTP_CONTROLLERS_API_DASHBOARD_ARTICLE_CONTROLLER_HPP__

#include "../ApiController.hpp"

namespace app { namespace http { namespace controllers { namespace api { namespace dashboard {

  class ArticleController : public app::http::controllers::api::ApiController
  {
    struct ArticleForm
    {

    };

    public:
      ArticleController(cppcms::service &s);

    public:
      void index();
      void read(const int id);
      void create();
      void update(const int id);
  };

} } } } }

#endif

