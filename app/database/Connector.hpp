#ifndef __APP_DATABASE_CONNECTOR_HPP__
#define __APP_DATABASE_CONNECTOR_HPP__

namespace app { namespace database {

  template<typename T>
  class Connector
  {
    public:
      template<typename D, typename W>
        D select()
        {
          return m_resolver.template select<D>();
        }

    protected:
      T m_resolver;
  };

} }

#endif
