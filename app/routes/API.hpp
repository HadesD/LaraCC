#ifndef __APP_ROUTES_API_HPP__
#define __APP_ROUTES_API_HPP__

#include "../core/ServiceProvider.hpp"

namespace app { namespace routes {

  class API : public app::core::ServiceProvider
  {
    public:
      API(cppcms::service &s);

    public:
      virtual void main(const std::string url) override;
  };

} }

#endif
