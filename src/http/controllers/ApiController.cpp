#include "http/controllers/ApiController.hpp"

namespace app::http::controllers
{

  ApiController::ApiController(cppcms::service &s) : app::core::Controller(s)
  {
    m_response["message"] = "";
  }

  ApiController::~ApiController()
  {
  }

}

