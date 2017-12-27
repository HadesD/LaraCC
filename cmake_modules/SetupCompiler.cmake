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

