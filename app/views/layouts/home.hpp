#ifndef _APP_VIEWS_LAYOUTS_APP_HOME_H_
#define _APP_VIEWS_LAYOUTS_APP_HOME_H_

#include "app/views/layouts/master.hpp"

#include <ctime>

namespace app { namespace views { namespace layouts {

  class Home : public app::views::layouts::Master
  {
    public:
      Home();

    public:
      struct Site
      {
        std::string title;
        std::string sub_title;
      };
      Site site;

    public:
      std::tm* getDate();
      std::string description;
  };

} } }

#endif

