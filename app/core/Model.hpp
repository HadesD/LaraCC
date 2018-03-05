#ifndef _APP_CORE_MODEL_HPP_
#define _APP_CORE_MODEL_HPP_

#include "../config/Constants.hpp"

#include <unordered_set>

#define APP_MODEL(ModelName) \
private: \
std::string m_primaryKeyName = "id"; \
using self = ModelName; \
public: \
static const std::string getTableName() { \
  return #ModelName "s"; \
} \
public: \
const std::string& getPrimaryKeyName() const { \
  return m_primaryKeyName; \
}

#define APP_MODEL_SYNTHESIZE(varType,colName,funcName) \
private: \
varType colName; \
public: \
const varType& get##funcName() { \
  std::pair<std::string, int> p(m_primaryKeyName, id); \
  colName = m_connector.select<varType>(#colName, \
                                        self::getTableName(), \
                                        p \
                                        ); \
  return colName; \
} \
void set##funcName(const varType& var) { \
  colName = var;\
  m_queueSaveColumns.insert(#colName); \
}

#include "../database/SQLiteModernCppConnector.hpp"

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

