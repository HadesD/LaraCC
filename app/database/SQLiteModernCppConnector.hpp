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
        std::vector<int> select(
          const std::string& column,
          const std::string& from
          )
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
      template<typename T, typename W>
        T select(
          const std::string& column,
          const std::string& from,
          const std::pair<std::string, W>& where
          )
        {
          T val;
          std::string q =
            "SELECT "
            + column
            + " FROM "
            + from
            + " WHERE "
            + where.first
            + "=?"
            + ";";
          m_database << q << where.second >> val;
          return val;
        }

    protected:
      // Connection string
      sqlite::database m_database;
  };

} }

#endif
