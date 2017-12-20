#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#define APP_MODEL(table_name) \
  private: \
  std::string m_tableName = table_name; \
  public: \
  const std::string& getTableName() const {return m_tableName;} \
  void setTableName(const std::string& tableName) {m_tableName = tableName;}

#define APP_SYNTHESIZE(varType,colName,funcName) \
  private: \
  varType colName; \
  public: \
  varType get##funcName() { \
    colName = m_connector.select<varType>( #colName, \
      m_tableName \
      ); \
    return colName; \
  } \
  void set##funcName(const varType& var) { \
    colName = var;\
  }

#include "../database/ConnectorInterface.hpp"
#include "../database/SQLiteModernCppConnector.hpp"

namespace app { namespace core {

  class Model
  {
    public:
      Model();
      virtual ~Model() = 0;

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
