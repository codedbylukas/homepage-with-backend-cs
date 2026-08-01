#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include <sstream>
#include <cstdint>
#include <cstring>
#include "crow.h"

using namespace std;

string hex_encode(const string& in) {
    stringstream ss;
    for (unsigned char c : in) {
        ss << hex << setw(2) << setfill('0') << (int)c;
    }
    return ss.str();
}

string hex_decode(const string& in) {
    string out;
    for (size_t i = 0; i < in.length(); i += 2) {
        string byteString = in.substr(i, 2);
        char byte = (char) strtol(byteString.c_str(), nullptr, 16);
        out.push_back(byte);
    }
    return out;
}

void setup_route_hex(crow::SimpleApp& app) {
    CROW_ROUTE(app, "/api/cpp/encode/to-hex/<string>")
    ([](string plainText){
        crow::json::wvalue response;
        string base64_text = hex_encode(plainText);
        response["conveted"] = base64_text;
        return crow::response(200, response);
    });

    CROW_ROUTE(app, "/api/cpp/encode/from-hex/<string>")
    ([](string base64Text){
        crow::json::wvalue response;
        string plain_text = hex_decode(base64Text);
        response["converted"] = plain_text;
        return crow::response(200, response);
    });
}

