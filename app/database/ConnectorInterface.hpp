#ifndef __APP_DATABASE_CONNECTOR_INTERFACE_HPP_
#define __APP_DATABASE_CONNECTOR_INTERFACE_HPP_

#include <string>
#include <utility>

namespace app { namespace database {

  class ConnectorInterface
  {
    public:
      virtual bool connect() = 0;

    public:
      template<typename T>
        T select(const std::string& column, const std::string& from){}
      template<typename T, typename W>
        T select(
          const std::string& column,
          const std::string& from,
          const std::pair<std::string, W>& where
          ){}
  };

} }

#endif
