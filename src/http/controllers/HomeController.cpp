#include "app/http/controllers/HomeController.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "app/views/home.hpp"

namespace app { namespace http { namespace controllers {

  HomeController::HomeController(cppcms::service &s) :
    app::core::Controller(s)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      this->dispatcher().map("GET", ".*", &HomeController::index, this);
    }
    __APP_TRY_CATCH_END__
  }

  void HomeController::index()
  {
    __APP_TRY_CATCH_BEGIN__
    {
      app::views::Home v;
      v.title = _("Home");

      this->render("home", v);
    }
    __APP_TRY_CATCH_END__
  }

} } }
