#ifndef __APP_VIEWS_LAYOUTS_HOME_HPP__
#define __APP_VIEWS_LAYOUTS_HOME_HPP__

#include "Master.hpp"

#include <cppcms/json.h>

#include <ctime>

namespace app::views::layouts
{

  class Home : public app::views::layouts::Master
  {
    public:
      Home();

    public:
      std::tm* getDate();
      cppcms::json::value getSettings();

    public:
      std::string description;
  };

}

#endif

