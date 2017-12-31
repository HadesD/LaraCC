#ifndef _APP_VIEWS_LAYOUTS_APP_HOME_H_
#define _APP_VIEWS_LAYOUTS_APP_HOME_H_

#include "app/views/layouts/master.hpp"

#include <cppcms/json.h>

#include <ctime>

namespace app { namespace views { namespace layouts {

  class Home : public app::views::layouts::Master
  {
    public:
      Home();

    public:
      std::tm* getDate();
      template<typename T>
        T getSettings(const std::string& setting)
        {
          return this->app().settings().get<T>(setting);
        }

    public:
      std::string description;
  };

} } }

#endif

