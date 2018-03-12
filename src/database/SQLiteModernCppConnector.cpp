#include "database/SQLiteModernCppConnector.hpp"

namespace app::database
{

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
      std::string statement =
        "SELECT "
        + column
        + " FROM "
        + from
        + " ORDER BY updated_at DESC"
        + ";";
      m_database << statement
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

  /*
  bool SQLiteModernCppConnector::exec(const std::string& statement)
  {
    try
    {
      m_database << statement;

      return true;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }

    return false;
  }
  */

  bool SQLiteModernCppConnector::beginTransaction()
  {
    try
    {
      m_database << "BEGIN;";

      return true;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }

    return false;
  }

  bool SQLiteModernCppConnector::commit()
  {
    try
    {
      m_database << "COMMIT;";

      return true;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }

    return false;
  }

  bool SQLiteModernCppConnector::rollBack()
  {
    try
    {
      m_database << "ROLLBACK;";
      return true;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }

    return false;
  }

}

