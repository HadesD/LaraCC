#ifndef __APP_HTTP_CONTROLLERS_API_ARTICLE_
#define __APP_HTTP_CONTROLLERS_API_ARTICLE_

#include "ApiController.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  class ArticleController : public ApiController
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

} } } }

#endif

