#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#define APP_MODEL(snake_name,CamelName)

#include <string>

#include "../database/ConnectorInterface.hpp"
#include "../database/SQLiteModernCppConnector.hpp"


namespace app { namespace core {

  class Model
  {
    public:
      Model();
      virtual ~Model();

    public:
      void setConnector(const database::ConnectorInterface& connector);
      database::ConnectorInterface& getConnector() const;

    protected:
      database::ConnectorInterface& m_connector;

    private:
      // Default Connector
      database::SQLiteModernCppConnector m_sqliteModernCpp;
  };

} }

#endif
