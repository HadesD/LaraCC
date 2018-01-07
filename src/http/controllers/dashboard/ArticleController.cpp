#include "app/http/controllers/dashboard/ArticleController.hpp"

#include <cppcms/http_response.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

namespace app { namespace http { namespace controllers { namespace dashboard {

  ArticleController::ArticleController(cppcms::service& s) :
    Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->dispatcher().map("GET", ".*", &ArticleController::index, this);
    }
    __APP_TRY_CATCH_END__
  }

  void ArticleController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->response().out() << "ss";
    }
    __APP_TRY_CATCH_END__
  }

} } } }

