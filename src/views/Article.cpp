#include "views/article.hpp"

namespace app::views
{

  Article::Article() : Home(), article()
  {
  }

  Article::Article(const std::string& slug) : Home(), article(slug)
  {
  }

}

