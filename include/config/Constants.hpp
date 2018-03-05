#ifndef __APP_CONFIG_CONSTANTS__
#define __APP_CONFIG_CONSTANTS__

#include <booster/log.h>
#include <iostream>

#define __APP_TRY_CATCH_BEGIN__ try {
#define __APP_TRY_CATCH_END__ } catch (const std::exception& e) { \
  BOOSTER_WARNING("exception") << e.what() << std::endl; \
  std::cout \
  << __FILE__  << ":" \
  << __FUNCTION__  \
  << ":" << __LINE__ << " " << e.what() << std::endl; \
} catch (...) { \
  BOOSTER_WARNING("exception") << "Not obvious" << std::endl; \
  std::cout \
  << __FILE__ << ":" \
  << __FUNCTION__ << ":" << __LINE__ << std::endl; \
}

#endif

