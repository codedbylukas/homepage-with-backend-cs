#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include "crow.h"
#include <sstream>
#include <cstdint>
#include <cstring>
#include "rot13-controller.h"

using namespace std;

string rot13(const string& in) {
    string out = in;
    for (char& c : out) {
        if ((c >= 'a' && c <= 'm') || (c >= 'A' && c <= 'M')) {
            c += 13;
        } else if ((c >= 'n' && c <= 'z') || (c >= 'N' && c <= 'Z')) {
            c -= 13;
        }
    }
    return out;
}

void setup_route_rot13(crow::SimpleApp& app) {
    CROW_ROUTE(app, "/api/cpp/encode/to-rot13/<string>")
    ([](string plainText){
        crow::json::wvalue response;
        string base64_text = rot13(plainText);
        response["conveted"] = base64_text;
        return crow::response(200, response);
    });

    CROW_ROUTE(app, "/api/cpp/encode/from-rot13/<string>")
    ([](string base64Text){
        crow::json::wvalue response;
        string plain_text = rot13(base64Text);
        response["converted"] = plain_text;
        return crow::response(200, response);
    });
}
