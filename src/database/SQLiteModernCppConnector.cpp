#include "app/database/SQLiteModernCppConnector.hpp"

namespace app { namespace database {

  SQLiteModernCppConnector::SQLiteModernCppConnector() :
    m_database()
  {
    // m_database = sqlite::database("db.sqlite3");
  }

  SQLiteModernCppConnector::~SQLiteModernCppConnector()
  {
  }

  bool SQLiteModernCppConnector::connect()
  {

    return false;
  }

} }

