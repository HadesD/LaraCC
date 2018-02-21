#include "app/http/controllers/api/ApiController.hpp"

namespace app { namespace http { namespace controllers { namespace api {

  ApiController::ApiController(cppcms::service &s) : app::core::Controller(s)
  {
    m_response["message"] = "";
  }

  ApiController::~ApiController()
  {
  }

} } } }

