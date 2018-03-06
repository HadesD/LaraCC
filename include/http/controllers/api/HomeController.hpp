#ifndef __APP_HTTP_CONTROLLERS_API_HOME_CONTROLLER__
#define __APP_HTTP_CONTROLLERS_API_HOME_CONTROLLER__

#include "../ApiController.hpp"

namespace app::http::controllers::api
{

  class HomeController : public app::http::controllers::ApiController
  {
    public:
      HomeController(cppcms::service &s);

    public:
      void index();
      // void read(const std::string& urlPath);
      // virtual void create(const std::string& urlPath) override{};
      // virtual void update(const std::string& urlPath) override{};
      // virtual void del(const std::string& urlPath) override{};
  };

}

#endif

