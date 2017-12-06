#include "app/core/View.hpp"

#include <cppcms/json.h>
#include <fstream>

namespace app { namespace core {

  View::View()
  {
  }

  std::string View::asset(const std::string& urlPath)
  {
    std::string fPath = urlPath;
    std::cout << fPath << std::endl;

    std::string fsetting = this->app().settings()
      .get<std::string>("file_server.document_root")
      + "/manifest.json";
    std::ifstream f(fsetting);
    if (f.is_open())
    {
      cppcms::json::value assets;
      assets.load(f, true);
      if (!assets[urlPath].str().empty())
      {
        fPath = assets.at(urlPath).str();
      }
    }

    return "/media/" + fPath;
  }

} }

