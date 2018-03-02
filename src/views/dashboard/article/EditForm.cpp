#include "app/views/dashboard/article/EditForm.hpp"

namespace app::views::dashboard::article
{

  EditForm::EditForm()
  {
    this->title.name("title");
    this->slug.name("slug");
    this->content.name("content");

    this->add(this->title);
    this->add(this->slug);
    this->add(this->content);
  }

}

