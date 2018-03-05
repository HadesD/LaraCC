#ifndef __APP_VIEWS_REGISTER_HPP__
#define __APP_VIEWS_REGISTER_HPP__

#include "views/layouts/home.hpp"

#include "RegisterForm.hpp"

namespace app::views
{

  class Register : public app::views::layouts::Home
  {
    public:
      RegisterForm register_form;
  };

}

#endif

