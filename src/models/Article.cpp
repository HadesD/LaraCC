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

} }

