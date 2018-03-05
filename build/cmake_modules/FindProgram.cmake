find_program(PYTHON NAMES python2 python python3)
if(NOT PYTHON)
  message(FATAL_ERROR "Can't build without Python interpreter")
endif()

find_program(EXE_TMPL_CC
  ${CMAKE_CURRENT_SOURCE_DIR}/Dependencies/cppcms/include/bin/cppcms_tmpl_cc
  )
