#include "http/controllers/HomeController.hpp"

#include <cppcms/url_dispatcher.h>
#include <cppcms/url_mapper.h>

#include "views/Home.hpp"

namespace app::http::controllers
{

  HomeController::HomeController(cppcms::service &s) :
    app::core::Controller(s)
  {
    this->dispatcher().map("GET", ".*", &HomeController::index, this);
  }

  void HomeController::index()
  {
    app::views::Home v;
    v.title = _("Home");

    this->render("home", v);
  }

}

