#include "core/Helpers.hpp"

namespace app::core::Helpers
{

  std::string strftime(
    const std::string& __format,
    const std::time_t __timestamp
    )
  {
    char datetime[30];
    std::strftime(
      datetime, sizeof(datetime),
      __format.data(),
      std::localtime(&__timestamp)
      );

    return datetime;
  }

}

