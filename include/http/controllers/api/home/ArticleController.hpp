#ifndef __APP_HTTP_CONTROLLERS_API_HOME_ARTICLE__
#define __APP_HTTP_CONTROLLERS_API_HOME_ARTICLE__

#include "../../ApiController.hpp"

namespace app::http::controllers::api::home
{

  class ArticleController : public app::http::controllers::ApiController
  {
    public:
      ArticleController(cppcms::service &s);

    public:
      void index();
      void read(const std::string& urlPath);
      // virtual void create(const std::string& urlPath) override{};
      // virtual void update(const std::string& urlPath) override{};
      // virtual void del(const std::string& urlPath) override{};
  };

}

#endif

