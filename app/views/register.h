#ifndef _APP_VIEWS_REGISTER_H_
#define _APP_VIEWS_REGISTER_H_
#include <cppcms/form.h>

#include "app/views/layouts/home.h"

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
