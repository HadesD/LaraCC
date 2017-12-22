#include "app/models/Article.hpp"

namespace app { namespace models {

  Article::Article(const std::string& s) : Model()
  {
    m_primaryKeyName = "id";
    this->slug = s;

    std::pair<std::string, std::string> w("slug", this->slug);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      m_tableName,
      w
      );
  }

} }

