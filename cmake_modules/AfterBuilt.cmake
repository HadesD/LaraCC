###############################################################################
#
# Copy file
#
###############################################################################

if (UNIX)
  # foreach( file_i ${LIST_FOLDERS_COPY_AFTER_BUILD})
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E remove_directory
    ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}/public
    )
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    # ${file_i}
    ${CMAKE_CURRENT_SOURCE_DIR}/public
    ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}/public
    )
  add_custom_command(
    TARGET ${APP_NAME} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
    # ${file_i}
    ${CMAKE_CURRENT_SOURCE_DIR}/storage
    ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}/storage
    )
  # endforeach( file_i )
  foreach( file_i ${LIST_FILES_COPY_AFTER_BUILD})
    add_custom_command(
      TARGET ${APP_NAME} PRE_BUILD
      COMMAND ${CMAKE_COMMAND} -E copy
      ${file_i}
      ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}/
      )
  endforeach( file_i )
endif()

