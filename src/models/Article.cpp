#include "app/models/Article.hpp"

namespace app { namespace models {

  Article::Article()
  {
    this->id = 0;
  }

  Article::Article(const std::string& slug)
  {
    std::pair<std::string, std::string> w("slug", slug);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      m_tableName,
      w
      );

    this->slug = slug;
  }

  Article::Article(const int id)
  {
    this->id = id;
  }

  Article::TypeText Article::getTypeText()
  {
    int type = 1;//this->getType();

    Article::TypeText typeText;

    switch (type)
    {
      case 1:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        break;
      default:
        typeText.iconClassName = "fa fa-fw fa-pencil";
        typeText.name = "video";
    }

    return typeText;
  }

} }

