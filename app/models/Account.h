#ifndef __APP_MODELS_ACCOUNT_HPP__
#define __APP_MODELS_ACCOUNT_HPP__

#include <string>

#include "app/core/Model.hpp"

namespace app { namespace models {

  struct Account : public app::core::Model
  {
    unsigned int id;
    std::string name;
    std::string email;
    std::string password;
  };

} }

#endif
