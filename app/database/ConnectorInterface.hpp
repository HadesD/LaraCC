#ifndef __APP_DATABASE_CONNECTOR_INTERFACE_HPP_
#define __APP_DATABASE_CONNECTOR_INTERFACE_HPP_

namespace app { namespace database {

  class ConnectorInterface
  {
    public:
      virtual bool connect() = 0;
  };

} }

#endif
