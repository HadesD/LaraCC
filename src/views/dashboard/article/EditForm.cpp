#include "views/dashboard/article/EditForm.hpp"

#include "models/Article.hpp"

namespace app::views::dashboard::article
{

  EditForm::EditForm()
  {
    this->type.name("type");
    for (int i = 0; i < static_cast<int>(app::models::Article::Type::COUNT); i++)
    {
      this->type.add("", std::to_string(i));
    }
    this->add(this->type);

    this->title.name("title");
    this->add(this->title);

    this->slug.name("slug");
    this->add(this->slug);

    this->content.name("content");
    this->add(this->content);
  }

}

