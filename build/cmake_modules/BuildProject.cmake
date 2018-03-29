#############################################################################
#
# Build project
#
#############################################################################
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin/$<CONFIG>)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin/$<CONFIG>)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin/$<CONFIG>)

# Views build
set(VIEW_SKIN bootstrap_skin)
add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${VIEW_SKIN}.cpp
  COMMAND ${PYTHON} ${EXE_TMPL_CC}
  -d views
  -o ${CMAKE_CURRENT_BINARY_DIR}/${VIEW_SKIN}.cpp
  ${VIEWS_TMPL}
  DEPENDS ${VIEWS_TMPL}
  )
add_library(${VIEW_SKIN} SHARED "${CMAKE_CURRENT_BINARY_DIR}/${VIEW_SKIN}.cpp" ${APP_SRC})
target_link_libraries(${VIEW_SKIN})

# Application build
add_executable(${APP_NAME} ${APP_SRC})
target_link_libraries(${APP_NAME} ${APP_REQUIRED_LIB} -ldl)

