#ifndef __APP_DATABASE_CONNECTOR_HPP__
#define __APP_DATABASE_CONNECTOR_HPP__

#include "../config/Constants.hpp"

#include <string>
#include <vector>

namespace app::core
{

  template<typename Derived>
  class DatabaseConnector
  {
    public:
      /**
       * Select one column use Id
       *
       * @param {std::string} Column name
       * @param {std::string} Table name
       * @param {std::pair<std::string, W} Specifial to search
       * @return {T} Value of column want to get
       */
      template<typename T, typename W>
      T select(
        const std::string& column,
        const std::string& from,
        const std::pair<std::string, W>& where
        )
      {
        __APP_TRY_CATCH_BEGIN__
        {
          return static_cast<Derived*>(this)->template
          select<T>(
            column, from, where
            );
        }
        __APP_TRY_CATCH_END__
      }

    public:
      virtual bool connect() = 0;
      virtual bool beginTransaction() = 0;
      virtual bool commit() = 0;
      virtual bool rollBack() = 0;
  };

}

#endif

