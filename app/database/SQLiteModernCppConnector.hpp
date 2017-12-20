#ifndef __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__
#define __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__

#include "ConnectorInterface.hpp"

#include <sqlite_modern_cpp.h>

namespace app { namespace database {

  class SQLiteModernCppConnector : public ConnectorInterface
  {
    public:
      SQLiteModernCppConnector();
      SQLiteModernCppConnector(const std::string& database);

    public:
      virtual bool connect() override;

    public:
      template<typename T>
        T select(
          const std::string& column,
          const std::string& from,
          const std::string& id
          )
        {
          T ret;
          std::string q =
            "SELECT "
            + column
            + " FROM "
            + from
            + " WHERE "
            + "id=?"
            + ";";
          m_database << q << id >> ret;

          return ret;
        }
      template<typename T, typename W>
        T select(
          const std::string& column,
          const std::string& from,
          const std::pair<std::string, W> where
          )
        {
          T ret;
          std::string q =
            "SELECT "
            + column
            + " FROM "
            + from
            + " WHERE "
            + where.first
            + "=?"
            + ";";
          m_database << q << where.second >> ret;

          return ret;
        }

    protected:
      // Connection string
      sqlite::database m_database;
  };

} }

#endif
