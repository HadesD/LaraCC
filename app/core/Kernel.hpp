#ifndef __APP_CORE_KERNEL_HPP__
#define __APP_CORE_KERNEL_HPP__

#include <cppcms/application.h>

namespace app { namespace core {

  class Kernel : public cppcms::application
  {
    public:
      Kernel(cppcms::service &s);

      virtual void main(const std::string urlPath) override;
  };

} }

#endif
