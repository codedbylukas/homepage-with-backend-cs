#include <iostream>
#include "crow.h"
#include <string>
#include <vector>
#include <iomanip>
#include <sstream>

using namespace std;

const string B64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

string base64_encode(const string& in) {
    string out;
    int val = 0, valb = -6;
    for (unsigned char c : in) {
        val = (val << 8) + c;
        valb += 8;
        while (valb >= 0) {
            out.push_back(B64_CHARS[(val >> valb) & 0x3F]);
            valb -= 6;
        }
    }
    if (valb > -6) out.push_back(B64_CHARS[((val << 8) >> (valb + 8)) & 0x3F]);
    while (out.size() % 4) out.push_back('=');
    return out;
}

void setup_route_basesv(crow::SimpleApp& app) {
    CROW_ROUTE(app, "/api/cpp/encode/to-base64/<string>")
    ([](string plainText){
        crow::json::wvalue response;
        string base64_text = base64_encode(plainText);
        response["conveted"] = base64_text;
        return crow::response(200, response);
    });
}
