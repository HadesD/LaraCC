#include "app/database/SQLiteModernCppConnector.hpp"

namespace app { namespace database {

  SQLiteModernCppConnector::SQLiteModernCppConnector() :
    m_database("db.sqlite3")
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

  std::vector<int> SQLiteModernCppConnector::select(
    const std::string& column,
    const std::string& from
    )
  {
    try
    {
      std::vector<int> val;
      std::string q =
        "SELECT "
        + column
        + " FROM "
        + from
        + ";";
      m_database << q
        >> [&](const int id){
          val.push_back(id);
        };
      return val;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }
  }

  bool SQLiteModernCppConnector::exec(const std::string& statement)
  {

    return true;
  }

  bool SQLiteModernCppConnector::beginTransaction()
  {

    return true;
  }

  bool SQLiteModernCppConnector::commit()
  {

    return true;
  }

  bool SQLiteModernCppConnector::rollBack()
  {

    return true;
  }

} }

