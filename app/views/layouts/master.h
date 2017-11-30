#ifndef _APP_VIEWS_LAYOUTS_MASTER_H_
#define _APP_VIEWS_LAYOUTS_MASTER_H_
#include "app/core/View.h"

namespace app { namespace views { namespace layouts {
  struct Master : public app::core::View
  {
    std::string title;
  };
} } }

#endif
