#ifndef __APP_DATABASE_CONNECTOR_EXCEPTION_HPP__
#define __APP_DATABASE_CONNECTOR_EXCEPTION_HPP__

#include <string>
#include <stdexcept>

namespace app::database
{

  class ConnectorException : public std::runtime_error
  {
    public:
      ConnectorException() : std::runtime_error("Connector exception"){}
      ConnectorException(const std::string& msg) : std::runtime_error(msg){}
  };

}

#endif

