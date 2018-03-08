#include "models/Account.hpp"

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
    std::pair<std::string, std::string> w("email", email);
    this->id = m_connector.select<int>(
      m_primaryKeyName,
      self::getTableName(),
      w
      );

    this->email = email;
  }

}

