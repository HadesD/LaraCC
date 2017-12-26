#include "app/views/article.hpp"

namespace app { namespace views {

  Article::Article() : Home(), article()
  {
  }

  Article::Article(const std::string& slug) : Home(), article(slug)
  {
  }

} }

