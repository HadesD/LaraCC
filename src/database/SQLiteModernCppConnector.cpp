#include "app/database/SQLiteModernCppConnector.hpp"

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
      m_statement =
        "SELECT "
        + column
        + " FROM "
        + from
        + ";";
      m_database << m_statement
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
      m_statement = "BEGIN;";

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
      if (m_statement.empty())
      {
        return false;
      }

      m_statement += "COMMIT;";
      m_database << m_statement;

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
      if (m_statement.empty())
      {
        return false;
      }

      m_statement += "ROLLBACK;";
      return true;
    }
    catch (const sqlite::sqlite_exception& e)
    {
      throw app::database::ConnectorException(e.what());
    }

    return false;
  }

}

