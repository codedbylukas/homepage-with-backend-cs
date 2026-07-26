#include "crow.h"
#include "include/index-controller.h"
#include <iostream>

using namespace std;

void setup_routes(crow::SimpleApp& app) {
    CROW_ROUTE(app, "/")([](){
        return crow::response(200, "Hello World from C++!");
    });

//    CROW_ROUTE(app, "/api/user/<int>")
//    ([](int id){
//        crow::json::wvalue response;
//        response["id"] = id;
//        response["status"] = "active";
//        
//        return crow::response(200, response);
//    });

}
