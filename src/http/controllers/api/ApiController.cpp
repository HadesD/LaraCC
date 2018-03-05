#include "http/controllers/api/ApiController.hpp"

namespace app::http::controllers::api
{

  ApiController::ApiController(cppcms::service &s) : app::core::Controller(s)
  {
    m_response["message"] = "";
  }

  ApiController::~ApiController()
  {
  }

}

