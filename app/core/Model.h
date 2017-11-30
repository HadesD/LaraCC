#ifndef _APP_CORE_MODEL_H_
#define _APP_CORE_MODEL_H_
#include <cppcms/application.h>

namespace app { namespace core {
  class Model : public cppcms::application
  {
    public:
      Model(cppcms::service &s);
      
    public:
      std::string web;
  };
} }
#endif
