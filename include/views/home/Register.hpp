#ifndef __APP_VIEWS_HOME_REGISTER_HPP__
#define __APP_VIEWS_HOME_REGISTER_HPP__

#include "../layouts/Home.hpp"

#include "RegisterForm.hpp"

namespace app::views::home
{

  class Register : public app::views::layouts::Home
  {
    public:
      RegisterForm register_form;
  };

}

#endif

