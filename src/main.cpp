#include <cppcms/applications_pool.h>
#include <cppcms/service.h>

#ifdef linux
# include <unistd.h>
#endif

#include "core/Kernel.hpp"
#include "config/Constants.hpp"

int main(int argc, char *argv[])
{
  __APP_TRY_CATCH_BEGIN__
  {
    cppcms::service srv(argc, argv);

    srv.applications_pool().mount(
      cppcms::applications_factory<app::core::Kernel>()
      );

    std::cout << "*Server running at "
      << srv.settings().get<std::string>("service.ip")
      << ":"
      << srv.settings().get<int>("service.port")
      ;

#ifdef linux
    std::cout << " PID: " << getpid();
#endif

    std::cout << std::endl;

    srv.run();

    return 0;
  }
  __APP_TRY_CATCH_END__

  {
    return 1;
  }
}

