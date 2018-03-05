cmake_minimum_required(VERSION 3.1 FATAL_ERROR)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_CONFIGURATION_TYPES "Debug;Release" CACHE STRING "limited configs" FORCE)
set(CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR}/build/cmake_modules)

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
  ${CMAKE_CURRENT_SOURCE_DIR}/include
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

    ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/hoedown/prebuilt/macos
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

  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home/login.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home/sign_up.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home/article/index.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/home/article/read.blade.chtml

  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard/login.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard/article.blade.chtml
  ${CMAKE_CURRENT_SOURCE_DIR}/resources/views/dashboard/index.blade.chtml

)

# file(GLOB_RECURSE tmpl_files resources/views/*.blade.chtml)
# list(REMOVE_ITEM tmpl_files ${VIEWS_TMPL})
# list(REVERSE tmpl_files)
# foreach(tmpl_file ${tmpl_files})
#   set(VIEWS_TMPL ${VIEWS_TMPL} ${tmpl_file})
# endforeach()
#
# message(STATUS ${VIEWS_TMPL})

#############################################################################
#
# Application Cpp file need to build
#
#############################################################################

set(APP_SRC)
file(GLOB_RECURSE src_files src/*.cpp)
foreach(src ${src_files})
  set(APP_SRC ${APP_SRC} ${src})
endforeach()

include(SetupCompiler)

include(BuildProject)

include(AfterBuilt)

