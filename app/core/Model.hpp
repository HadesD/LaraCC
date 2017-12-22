#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#include "../config/Constants.hpp"

#define APP_MODEL(table_name) \
  private: \
  std::string m_tableName = table_name; \
  std::string m_primaryKeyName = "id"; \
  public: \
  const std::string& getTableName() const {return m_tableName;} \
  void setTableName(const std::string& tableName) {m_tableName = tableName;}

#define APP_MODEL_SYNTHESIZE(varType,colName,funcName) \
  private: \
  varType colName; \
  public: \
  varType get##funcName() { \
    __APP_TRY_CATCH_BEGIN__ \
    std::pair<std::string, int> p(m_primaryKeyName, id); \
    colName = m_connector.select<varType>( #colName, \
                                          m_tableName, \
                                          p \
                                          ); \
    return colName; \
    __APP_TRY_CATCH_END__ \
  } \
  void set##funcName(const varType& var) { \
    colName = var;\
  }

#include "../database/ConnectorInterface.hpp"

#include "app/database/SQLiteModernCppConnector.hpp"

namespace app { namespace core {

  class Model
  {
    protected:
      app::database::SQLiteModernCppConnector m_connector;
  };

} }

#endif

