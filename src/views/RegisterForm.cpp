#include "views/RegisterForm.hpp"

namespace app::views
{

  RegisterForm::RegisterForm()
  {
    username.message(_("Username"));
    username.name("username");
    username.attributes_string("class=\"form-control\"");
    this->add(username);

    password.message(_("Password"));
    password.name("password");
    password.attributes_string("class=\"form-control\"");
    this->add(password);

    confirm_password.message(_("Confirm password"));
    password.name("confirm_password");
    confirm_password.attributes_string("class=\"form-control\"");
    this->add(confirm_password);

    submit.value(_("Register"));
    submit.attributes_string("class=\"btn btn-primary\"");
    this->add(submit);
  }

}

