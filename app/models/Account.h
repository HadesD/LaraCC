#ifndef _APP_MODELS_ACCOUNT_H_
#define _APP_MODELS_ACCOUNT_H_
#include <string>

#include "app/core/Model.h"

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
