#ifndef __APP_VIEWS_REGISTER_HPP__
#define __APP_VIEWS_REGISTER_HPP__

#include <cppcms/form.h>

#include "app/views/layouts/home.hpp"

namespace app { namespace views {

  struct Register : public app::views::layouts::Home
  {
    struct RegisterForm : public cppcms::form
    {
      RegisterForm();

      cppcms::widgets::text username;
      cppcms::widgets::password password;
      cppcms::widgets::password confirm_password;
      cppcms::widgets::submit submit;
    };

    RegisterForm register_form;
  };

} }

#endif
