cmake_minimum_required(VERSION 3.1 FATAL_ERROR)
set(CMAKE_CONFIGURATION_TYPES "Debug;Release" CACHE STRING "limited configs" FORCE)
set(CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/cmake_modules)

set(APP_NAME WebApp)
project(${APP_NAME})

include(CheckCXXSourceCompiles)

include(FindProgram)

#############################################################################
#
# Required Lib List
#
#############################################################################

set(LIST_FILES_COPY_AFTER_BUILD
  ${CMAKE_CURRENT_SOURCE_DIR}/config.json
  )

set(APP_REQUIRED_LIB
  booster
  cppcms
  sqlite3
  hoedown
  )

set(INCLUDE_DIR
  ${CMAKE_CURRENT_SOURCE_DIR}
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include/booster

  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppdb/include

  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/sqlite_modern_cpp/include/hdr

  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/hoedown/include/src
  )

set(LINK_DIR)

if(UNIX AND NOT APPLE)
  set(LIST_FILES_COPY_AFTER_BUILD "${LIST_FILES_COPY_AFTER_BUILD}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/libcppcms.so.1.2.0
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/libcppcms.so.1
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster/libbooster.so.0.2.0
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster/libbooster.so.0

    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/hoedown/prebuilt/linux/x64/libhoedown.so
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/hoedown/prebuilt/linux/x64/libhoedown.so.3
  )
  set(LINK_DIR "${LINK_DIR}"
    # ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppdb/prebuilt/linux/x64

    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster

    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/hoedown/prebuilt/linux/x64
    )
  set(INCLUDE_DIR "${INCLUDE_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster
    )
elseif(APPLE)
  set(LIST_FILES_COPY_AFTER_BUILD "${LIST_FILES_COPY_AFTER_BUILD}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/libcppcms.1.2.0.dylib
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/libcppcms.1.dylib
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/booster/libbooster.0.2.0.dylib
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/booster/libbooster.0.dylib
    )
  set(LINK_DIR "${LINK_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/booster
    )
  set(INCLUDE_DIR "${INCLUDE_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/osx/booster
    )
endif()


#############################################################################
#
# List views template
#
#############################################################################

set(VIEWS_TMPL
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/master.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/home.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/dashboard.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard/login.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/sign_up.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/login.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/article.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/article/read.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/article/index.blade.chtml
  )

#############################################################################
#
# Application Cpp file need to build
#
#############################################################################

set(APP_SRC
  ###############################################
  # Core
  ###############################################
  src/main.cpp
  src/core/Kernel.cpp
  src/core/ServiceProvider.cpp
  src/core/Controller.cpp
  src/core/Model.cpp
  src/core/View.cpp

  ###############################################
  # Database
  ###############################################
  src/database/CppDbConnector.cpp
  src/database/SQLiteModernCppConnector.cpp

  ###############################################
  # Models
  ###############################################
  src/models/Account.cpp
  src/models/Article.cpp

  ###############################################
  # Application
  ###############################################

  # Routes
  src/routes/Web.cpp
  src/routes/API.cpp

  # Controllers
  src/http/controllers/api/ApiController.cpp
  src/http/controllers/api/HomeController.cpp
  src/http/controllers/api/ArticleController.cpp
  src/http/controllers/api/dashboard/Login.cpp
  src/http/controllers/HomeController.cpp
  src/http/controllers/ArticleController.cpp
  src/http/controllers/DashboardController.cpp
  src/http/controllers/auth/LoginController.cpp
  src/http/controllers/auth/SignUpController.cpp

  # Views
  src/views/layouts/home.cpp
  src/views/home.cpp
  src/views/article.cpp
  src/views/register.cpp
  src/views/dashboard.cpp
  )

include(SetupCompiler)

include(BuildProject)

include(AfterBuilt)

