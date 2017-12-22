#include "app/models/Article.hpp"

namespace app { namespace models {

  Article::Article()
  {
    this->id = 0;
  }

  Article::Article(const std::string& slug)
  {
    this->slug = slug;

    std::pair<std::string, std::string> w("slug", this->slug);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      m_tableName,
      w
      );
  }

  Article::Article(const int id)
  {
    this->id = id;
  }

} }

