#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#include <string>

#include "../database/ConnectorInterface.hpp"
#include "../database/CppDbConnector.hpp"

namespace app { namespace core {

  class Model
  {
    public:
      Model();

    public:
      void setConnector(const database::ConnectorInterface& connector);
      database::ConnectorInterface& getConnector() const;

    protected:
      database::ConnectorInterface& m_connector;

    private:
      // Default Connector
      database::CppDbConnector m_cppDb;
  };

} }

#endif
