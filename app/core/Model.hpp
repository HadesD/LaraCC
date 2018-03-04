#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#include "../database/ConnectorInterface.hpp"

#include "../config/Constants.hpp"

#include <unordered_map>
#include <unordered_set>

#define APP_MODEL(table_name) \
  private: \
  std::string m_tableName = table_name; \
  std::string m_primaryKeyName = "id"; \
  public: \
  const std::string& getTableName() const { \
    return m_tableName; \
  } \
  const std::string& getPrimaryKeyName() const { \
    return m_primaryKeyName; \
  }

#define APP_EXPORT_MODEL(table_name) \
  namespace app::models { \
    template<> \
    std::string getTableName<table_name>() \
    { \
      static std::string tableName = #table_name \
      "s"; \
      return tableName; \
    } \
  }

#define APP_MODEL_SYNTHESIZE(varType,colName,funcName) \
  private: \
  varType colName; \
  public: \
  const varType& get##funcName() { \
    std::pair<std::string, int> p(m_primaryKeyName, id); \
    colName = m_connector.select<varType>(#colName, \
                                          m_tableName, \
                                          p \
                                          ); \
    return colName; \
  } \
  void set##funcName(const varType& var) { \
    colName = var;\
    m_queueSaveColumns.insert(#colName); \
  }

#include "../database/SQLiteModernCppConnector.hpp"

namespace app::models
{
  template<typename T>
    std::string getTableName()
    {
      return "NOT_FOUND";
    }
}

namespace app::core
{

  class Model
  {
    protected:
      app::database::SQLiteModernCppConnector m_connector;

    public:
      virtual bool save() = 0;

      [[deprecated("Will be deleted soon")]]
        inline decltype(m_connector)* getConnector() // const
        {return &m_connector;}

    protected:
      std::unordered_set<std::string> m_queueSaveColumns;
  };

}

#endif

