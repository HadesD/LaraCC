#include "core/View.hpp"

#include <cppcms/json.h>
#include <fstream>

#include "helpers/json.hpp"

namespace app::core
{

  View::View()
  {
  }

  std::string View::asset(const std::string& urlPath)
  {
    std::string fPath = urlPath;

    std::string fsetting = this->app().settings()
      .get<std::string>("file_server.document_root")
      + "/manifest.json";
    std::ifstream f(fsetting);
    if (f.is_open())
    {
      nlohmann::json jP;
      f >> jP;
      if (jP[urlPath].is_string())
      {
        fPath = jP[urlPath];
      }
    }

    return "/media/" + fPath;
  }

}

