#ifndef __APP_VIEWS_DASHBOARD_ARTICLE_EDIT_FORM_HPP__
#define __APP_VIEWS_DASHBOARD_ARTICLE_EDIT_FORM_HPP__

#include <cppcms/form.h>

namespace app::views::dashboard::article
{
  struct EditForm : public cppcms::form
  {
    EditForm();

    cppcms::widgets::text title;
    cppcms::widgets::text slug;
    cppcms::widgets::textarea content;
  };
}

#endif

