
#include <iostream>
#include "crow.h"
#include "include/index-controller.h"
#include "include/base64-controller.h"
using namespace std;

int main() {
  int port = 10000;
  crow::SimpleApp app;
  
  setup_route_index(app);
  setup_route_basesv(app);
  
  cout << "Server started on port " << port << endl;
  app.port(port).multithreaded().run();
  return 0;
}
