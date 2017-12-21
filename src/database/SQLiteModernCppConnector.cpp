#include "app/database/SQLiteModernCppConnector.hpp"

namespace app { namespace database {

  SQLiteModernCppConnector::SQLiteModernCppConnector() :
    m_database("storage/database/db.sqlite3")
  {
  }

  SQLiteModernCppConnector::SQLiteModernCppConnector(const std::string& db) :
    m_database(db)
  {
  }

  bool SQLiteModernCppConnector::connect()
  {

    return false;
  }

} }

