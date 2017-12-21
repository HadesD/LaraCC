#ifndef __APP_HTTP_CONTROLLERS_API_ARTICLE_
#define __APP_HTTP_CONTROLLERS_API_ARTICLE_

#include "ApiController.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  class Article : public ApiController
  {
    public:
      Article(cppcms::service &s);

    public:
      virtual void read() override;
      virtual void create() override{};
      virtual void update() override{};
      virtual void del() override{};
  };

} } } }

#endif

