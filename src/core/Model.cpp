#include <cppcms/service.h>

#include "app/core/Model.hpp"
#include "app/database/CppDbConnector.hpp"

namespace app { namespace core {

  Model::Model()
  {
  }

  Model::~Model()
  {
  }

  // database::ConnectorInterface Model::getConnector() const
  // {
  //   return m_connector;
  // }
  //
  // void Model::setConnector(const database::ConnectorInterface& connector)
  // {
  //   // m_connector = connector;
  // }

} }
