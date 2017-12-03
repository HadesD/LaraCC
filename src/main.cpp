#include <cppcms/applications_pool.h>
#include <cppcms/service.h>

#ifdef linux
# include <unistd.h>
#endif

#include "app/core/Kernel.hpp"

int main(int argc, char *argv[])
{
  try
  {
    cppcms::service srv(argc, argv);
    srv.applications_pool().mount(
      cppcms::applications_factory<app::core::Kernel>()
      );

    std::cout << "*Server running at " << srv.settings().get<std::string>("service.ip") << ":" << srv.settings().get<int>("service.port");
#ifdef linux
    std::cout << " PID: " << getpid();
#endif
    std::cout << std::endl;

    srv.run();
  }
  catch(std::exception const &e)
  {
    std::cerr << "Failed: " << e.what() << std::endl;
    std::cerr << booster::trace(e) << std::endl;

    return 1;
  }

  return 0;
}
