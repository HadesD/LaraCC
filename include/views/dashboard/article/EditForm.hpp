#ifndef __APP_VIEWS_DASHBOARD_ARTICLE_EDIT_FORM_HPP__
#define __APP_VIEWS_DASHBOARD_ARTICLE_EDIT_FORM_HPP__

#include <cppcms/form.h>

namespace app::views::dashboard::article
{

  class EditForm : public cppcms::form
  {
    public:
      EditForm();

    public:
      cppcms::widgets::text title;
      cppcms::widgets::text slug;
      cppcms::widgets::textarea content;
  };

}

#endif

