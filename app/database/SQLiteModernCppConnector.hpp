#ifndef __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__
#define __APP_DATABASE_SQLITE_MODERN_CPP_CONNECTOR_HPP__

#include "ConnectorInterface.hpp"

#include <sqlite_modern_cpp.h>

namespace app { namespace database {

  class SQLiteModernCppConnector : public ConnectorInterface
  {
    public:
      SQLiteModernCppConnector();
      ~SQLiteModernCppConnector();

    public:
      virtual bool connect() override;

    protected:
      // Connection string
      sqlite::database m_database;
  };

} }

#endif
