#ifndef __APP_VIEWS_LAYOUTS_MASTER_HPP__
#define __APP_VIEWS_LAYOUTS_MASTER_HPP__

#include "core/View.hpp"

namespace app { namespace views { namespace layouts {

  class Master : public app::core::View
  {
    public:
      Master();

    public:
      std::string title;
  };

} } }

#endif

