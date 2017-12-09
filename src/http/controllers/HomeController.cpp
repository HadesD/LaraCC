#include "app/http/controllers/HomeController.h"

#include <cppcms/url_mapper.h>
#include <cppcms/url_dispatcher.h>
#include <cppcms/http_response.h>

#include "app/views/home.hpp"

namespace app { namespace http { namespace controllers {

  HomeController::HomeController(cppcms::service &s) :
    app::core::Controller(s)
  {
    dispatcher().assign(".*", &HomeController::index, this);
  }

  void HomeController::index()
  {
    app::views::Home v;
    v.title = _("Home");

    render("home", v);
  }

} } }
