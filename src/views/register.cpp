#include "app/views/register.h"

namespace app { namespace views {
  Register::RegisterForm::RegisterForm()
  {
    username.message(_("Username"));
    username.name("username");
    username.attributes_string("class=\"form-control\"");

    password.message("Password");
    password.name("password");
    password.attributes_string("class=\"form-control\"");

    confirm_password.message("Confirm password");
    password.name("confirm_password");
    confirm_password.attributes_string("class=\"form-control\"");

    submit.value("Register");
    submit.attributes_string("class=\"btn btn-primary\"");

    add(username);
    add(password);
    add(confirm_password);
    add(submit);
  }
} }
