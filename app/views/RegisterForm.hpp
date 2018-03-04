#ifndef __APP_VIEWS_REGISTER_FORM_HPP__
#define __APP_VIEWS_REGISTER_FORM_HPP__

#include <cppcms/form.h>

#define _(X) ::cppcms::locale::translate(X)

namespace app::views
{

  class RegisterForm : public cppcms::form
  {
    public:
      RegisterForm();

    public:
      cppcms::widgets::text username;
      cppcms::widgets::password password;
      cppcms::widgets::password confirm_password;
      cppcms::widgets::submit submit;
  };

}

#endif

