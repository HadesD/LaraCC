#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#include "../config/Constants.hpp"

#define APP_MODEL(table_name) \
  private: \
  std::string m_tableName = table_name; \
  public: \
  const std::string& getTableName() const {return m_tableName;} \
  void setTableName(const std::string& tableName) {m_tableName = tableName;}

#define APP_MODEL_SYNTHESIZE(varType,colName,funcName) \
  private: \
  varType colName; \
  public: \
  varType get##funcName() { \
    __APP_TRY_CATCH_BEGIN__ \
    colName = m_connector.select<varType>( #colName, \
      m_tableName, \
      id \
      ); \
    return colName; \
    __APP_TRY_CATCH_END__ \
  } \
  void set##funcName(const varType& var) { \
    colName = var;\
  }

#define APP_MODEL_COLUMN(...) std::string m_allColumn = #__VA_ARGS__;

#include "../database/ConnectorInterface.hpp"

#include "app/database/SQLiteModernCppConnector.hpp"

namespace app { namespace core {

  class Model
  {
    public:
      Model();
      virtual ~Model() = 0;

    public:
      // void setConnector(const database::ConnectorInterface& connector);
      // database::ConnectorInterface getConnector() const;

    protected:
      app::database::SQLiteModernCppConnector m_connector;

    private:
      // app::database::SQLiteModernCppConnector m_sqlite;

  };

} }

#endif
