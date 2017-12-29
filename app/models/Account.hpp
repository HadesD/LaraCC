#ifndef __APP_MODELS_ACCOUNT_HPP__
#define __APP_MODELS_ACCOUNT_HPP__

#include "app/core/Model.hpp"

#include <string>

namespace app { namespace models {

  class Account : public app::core::Model
  {
    public:
      APP_MODEL("accounts");

    public:
      Account();
      Account(const int id);
      Account(const std::string& email);

    public:
      std::vector<Account> getAll();

    private:
      APP_MODEL_SYNTHESIZE(int, id, Id);
      APP_MODEL_SYNTHESIZE(int, role, Role);
      APP_MODEL_SYNTHESIZE(std::string, name, Name);
      APP_MODEL_SYNTHESIZE(std::string, email, Email);
      APP_MODEL_SYNTHESIZE(std::string, password, Password);
  };

} }

#endif

