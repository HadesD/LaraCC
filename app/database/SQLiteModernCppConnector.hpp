#ifndef __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__
#define __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__

#include "../core/DatabaseConnector.hpp"
#include "ConnectorException.hpp"

#include <sqlite_modern_cpp.h>

namespace app::database {

  class SQLiteModernCppConnector :
    public app::core::DatabaseConnector<SQLiteModernCppConnector>
  {
    public:
      SQLiteModernCppConnector();
      SQLiteModernCppConnector(const std::string& database);

    public:
      std::vector<int> select(
        const std::string& /* column */,
        const std::string& /* from */
        );

      template<typename T, typename W>
        T select(
          const std::string& column,
          const std::string& from,
          const std::pair<std::string, W>& where
          )
        {
          try
          {
            T val;
            std::string statement = "SELECT "
              + column
              + " FROM "
              + from
              + " WHERE "
              + where.first
              + "=?"
              + ";";
            m_database << statement << where.second >> val;
            return val;
          }
          catch (const sqlite::sqlite_exception& e)
          {
            throw app::database::ConnectorException(e.what());
          }
        }

      sqlite::database& exec(const std::string& statement)
      {
        m_database << statement;
        return m_database;
      }

      sqlite::database& exec()
      {
        return m_database;
      }

    public:
      virtual bool connect() override;
      // virtual bool exec<bool>(const std::string& #<{(| statement |)}>#) override;
      virtual bool beginTransaction() override;
      virtual bool commit() override;
      virtual bool rollBack() override;

    protected:
      // Connection string
      sqlite::database m_database;
  };

}

#endif

