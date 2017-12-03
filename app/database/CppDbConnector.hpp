#ifndef __APP_DATABASE_CPP_DB_CONNECTOR_HPP__
#define __APP_DATABASE_CPP_DB_CONNECTOR_HPP__

#include "ConnectorInterface.hpp"

namespace app { namespace database {

  class CppDbConnector : public ConnectorInterface
  {
    public:
      CppDbConnector();
      ~CppDbConnector();

    public:
      virtual bool connect() override;
  };

} }

#endif
