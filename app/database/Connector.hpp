#ifndef __APP_DATABASE_CONNECTOR_HPP__
#define __APP_DATABASE_CONNECTOR_HPP__

#include "../config/Constants.hpp"

#include <string>
#include <vector>

namespace app::database {

  template<typename T>
    class Connector
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
        template<typename D, typename W>
          D select(
            const std::string& column,
            const std::string& from,
            const std::pair<std::string, W>& where
            )
          {
            __APP_TRY_CATCH_BEGIN__
            {
              return static_cast<T*>(this)->template select<D>(
                column, from, where
                );
            }
            __APP_TRY_CATCH_END__
          }

        template<typename D>
          std::vector<D> getAll(
            const std::string& orderedList,
            const unsigned int offset,
            const unsigned int limit
            )
          {
            __APP_TRY_CATCH_BEGIN__
            {
              return static_cast<T*>(this)->template getAll< std::vector<D> >(
                orderedList, offset, limit
                );
            }
            __APP_TRY_CATCH_END__
          }

      public:
        virtual bool connect() = 0;
        virtual bool exec(const std::string& /* statement */) = 0;
        virtual bool beginTransaction() = 0;
        virtual bool commit() = 0;
        virtual bool rollBack() = 0;
    };

}

#endif

