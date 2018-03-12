#include <cppcms/applications_pool.h>
#include <cppcms/service.h>

#include "core/Kernel.hpp"

#include <iostream>
#include <array>
#include <cstdlib>
#include <cstring>

#ifdef __linux__
# include <unistd.h>
#endif

int main(int argc, char* argv[])
{
  // TODO Safe auto completed
  if (argc < 2)
  {
    int port = 9081;
    if (getenv("PORT"))
    {
      port = std::atoi(getenv("PORT"));
    }

    argv[argc++] = const_cast<char*>("-c");
    argv[argc++] = const_cast<char*>("config.json");

    std::sprintf(argv[argc++], "%s%d", "--service-port=", port);
  }

  cppcms::service srv(argc, argv);

  srv.applications_pool().mount(
    cppcms::applications_factory<app::core::Kernel>()
    );

  std::cout << "*Server running at "
  << srv.settings().get<std::string>("service.ip")
  << ":"
  << srv.settings().get<int>("service.port")
  ;

#ifdef __linux__
  std::cout << " PID: " << getpid();
#endif

  std::cout << std::endl;

  srv.run();

  return 0;
}

