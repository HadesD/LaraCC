#ifndef __APP_ROUTES_API_HPP__
#define __APP_ROUTES_API_HPP__

#include "../core/ServiceProvider.hpp"

namespace app { namespace routes {

  class Api : public app::core::ServiceProvider
  {
    public:
      Api(cppcms::service &s);

    public:
      virtual void main(const std::string url) override;
  };

} }

#endif

