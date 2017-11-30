#ifndef APP_CORE_KERNEL_H_
#define APP_CORE_KERNEL_H_
#include <cppcms/application.h>

namespace app
{
  namespace core
  {
    class Kernel : public cppcms::application
    {
      public:
        Kernel(cppcms::service &s);

        virtual void main(std::string path);
    };
  }
}

#endif
