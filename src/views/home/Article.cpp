#include "views/home/Article.hpp"

namespace app::views::home
{

  Article::Article() : Home(), article()
  {
  }

  Article::Article(const std::string& slug) : Home(), article(slug)
  {
  }

}

