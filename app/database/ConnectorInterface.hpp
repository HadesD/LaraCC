#ifndef __APP_DATABASE_CONNECTOR_INTERFACE_HPP_
#define __APP_DATABASE_CONNECTOR_INTERFACE_HPP_

#include "Connector.hpp"

#include <string>
#include <vector>

namespace app { namespace database {

  class ConnectorInterface : public Connector<ConnectorInterface>
  {
    public:
      virtual bool connect() = 0;
      virtual bool exec(const std::string& /* statement */) = 0;
      virtual bool beginTransaction() = 0;
      virtual bool commit() = 0;
      virtual bool rollBack() = 0;
  };

} }

#endif

