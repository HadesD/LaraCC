cmake_minimum_required(VERSION 3.1 FATAL_ERROR)
#include(${CMAKE_CURRENT_SOURCE_DIR}/cppcms/CMakeLists.txt)
set(CMAKE_CONFIGURATION_TYPES "Debug;Release" CACHE STRING "limited configs" FORCE)

set(APP_NAME WebApp)
project(${APP_NAME})

include(CheckCXXSourceCompiles)

find_program(PYTHON NAMES python2 python python3)
if(NOT PYTHON)
  message(FATAL_ERROR "Can't build without Python interpreter")
endif()

find_program(EXE_TMPL_CC
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include/bin/cppcms_tmpl_cc
  )

#############################################################################
#
# Required Lib List
#
#############################################################################

set(LIST_FILES_COPY_AFTER_BUILD
  ${CMAKE_CURRENT_SOURCE_DIR}/config.json
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/libcppcms.so.1.2.0
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster/libbooster.so.0.2.0
  )
set(LIST_FOLDERS_COPY_AFTER_BUILD
  ${CMAKE_CURRENT_SOURCE_DIR}/public
  ${CMAKE_CURRENT_SOURCE_DIR}/storage
  )

set(APP_REQUIRED_LIB
  booster
  cppcms
  # cppdb
  )

set(INCLUDE_DIR
  ${CMAKE_CURRENT_SOURCE_DIR}
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include/booster
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppdb/include
  )

set(LINK_DIR)

if(UNIX AND NOT APPLE)
  set(LINK_DIR "${LINK_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppdb/prebuilt/linux/x64
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster
    )
  set(INCLUDE_DIR "${INCLUDE_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/prebuilt/linux/x64/booster
    )
elseif(APPLE)
  set(LINK_DIR "${LINK_DIR}"
    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppdb/prebuilt/osx
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
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/master.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/home.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/layouts/dashboard.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard/login.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/sign_up.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/login.tmpl
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home.tmpl
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
  src/database/CppDbConnector.cpp

  ###############################################
  # Application
  ###############################################

  # Routes
  src/routes/Web.cpp
  src/routes/API.cpp

  # Controllers
  src/http/controllers/api/dashboard/Login.cpp
  src/http/controllers/HomeController.cpp
  src/http/controllers/DashboardController.cpp
  src/http/controllers/auth/LoginController.cpp
  src/http/controllers/auth/SignUpController.cpp

  # Views
  src/views/register.cpp
  )

#############################################################################
#
# Setup various build flags for different supported compilers and systems
#
#############################################################################
set(CXX_FLAGS "${CXX_FLAGS} -std=c++14")

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${CXX_FLAGS}")
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${C_FLAGS}")

include_directories(${INCLUDE_DIR})

link_directories(${LINK_DIR})

#############################################################################
#
# Build project
#
#############################################################################
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Bin/$<CONFIG>)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Bin/$<CONFIG>)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/Bin/$<CONFIG>)

# Views build
set(VIEW_SKIN bootstrap_skin)
add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/view.cpp
  COMMAND ${PYTHON} ${EXE_TMPL_CC}
  -d views
  -o ${CMAKE_CURRENT_BINARY_DIR}/view.cpp
  ${VIEWS_TMPL}
  DEPENDS ${VIEWS_TMPL}
  )
add_library(${VIEW_SKIN} SHARED "${CMAKE_CURRENT_BINARY_DIR}/view.cpp" ${APP_SRC})
target_link_libraries(${VIEW_SKIN} ${APP_REQUIRED_LIB})

# Application build
add_executable(${APP_NAME} ${APP_SRC})
target_link_libraries(${APP_NAME} ${APP_REQUIRED_LIB})

###############################################################################
#
# Copy file
#
###############################################################################
file(GLOB HAVE_TO_COPY_FILES
  "${CMAKE_CURRENT_SOURCE_DIR}/config.json"
  )

if (UNIX)
  # foreach( file_i ${LIST_FOLDERS_COPY_AFTER_BUILD})
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E remove_directory
    $<TARGET_FILE_DIR:${APP_NAME}>${RES_PREFIX}/public
    )
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    # ${file_i}
    ${CMAKE_CURRENT_SOURCE_DIR}/public
    $<TARGET_FILE_DIR:${APP_NAME}>${RES_PREFIX}/public
    )
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    # ${file_i}
    ${CMAKE_CURRENT_SOURCE_DIR}/storage
    $<TARGET_FILE_DIR:${APP_NAME}>${RES_PREFIX}/storage
    )
  # endforeach( file_i )
  foreach( file_i ${LIST_FILES_COPY_AFTER_BUILD})
    add_custom_command(
      TARGET ${APP_NAME} PRE_BUILD
      COMMAND ${CMAKE_COMMAND} -E copy
      ${file_i}
      ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}
      )
  endforeach( file_i )
endif()
