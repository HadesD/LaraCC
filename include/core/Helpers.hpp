#ifndef __APP_CORE_HELPERS_HPP__
#define __APP_CORE_HELPERS_HPP__

#include <string>
#include <ctime>

namespace app::core::Helpers
{

  std::string strftime(
    const std::string& __format,
    const std::time_t __timestamp = std::time(nullptr)
    );

}

#endif

