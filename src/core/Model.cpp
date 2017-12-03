#include <cppcms/service.h>

#include "app/core/Model.hpp"

namespace app { namespace core {

  Model::Model(cppcms::service &s) : cppcms::application(s)
  {
    this->web = cppcms::application::settings().get<std::string>("app.db.web.connection_string");
  }

} }
