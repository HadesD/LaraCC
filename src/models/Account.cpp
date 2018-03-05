#include "../../app/models/Account.hpp"

APP_MODEL_EXPORT(Account);

namespace app::models
{

  Account::Account()
  {
    this->id = 0;
  }

  Account::Account(const int _id)
  {
    this->id = _id;
  }

  Account::Account(const std::string& email)
  {
    __APP_TRY_CATCH_BEGIN__
    {
      std::pair<std::string, std::string> w("email", email);
      this->id = m_connector.select<int>(
        m_primaryKeyName,
        TableName,
        w
        );

      this->email = email;
    }
    __APP_TRY_CATCH_END__
  }

}

