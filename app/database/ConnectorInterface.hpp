#ifndef __APP_DATABASE_CONNECTOR_INTERFACE_HPP_
#define __APP_DATABASE_CONNECTOR_INTERFACE_HPP_

#include <string>
#include <utility>

namespace app { namespace database {

  class ConnectorInterface
  {
    public:
      virtual bool connect() = 0;

    public:

      /**
       * Select one column use Id
       *
       * @param {std::string} Column name
       * @param {std::string} Table name
       * @param {any} Id value
       * @return {T} Value of column want to get
       */
      template<typename T, typename I>
        T select(
          const std::string& column,
          const std::string& from,
          const I id
          );
      template<typename T, typename W>
        T select(
          const std::string& column,
          const std::string& from,
          const std::pair<std::string, W>& where
          );

      template<typename T>
        T getAll(
          const std::string& orderedList
          );
  };

} }

#endif
