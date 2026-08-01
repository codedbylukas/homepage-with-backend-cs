#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <iomanip>
#include <algorithm>
#include <map>
#include <cctype>
#include "crow.h"
#include "base32-controller.h"

using namespace std;

const string B32_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
string base32_encode(const string& in) {
    string out;
    int val = 0, valb = 0;
    for (unsigned char c : in) {
        val = (val << 8) | c;
        valb += 8;
        while (valb >= 5) {
            out.push_back(B32_CHARS[(val >> (valb - 5)) & 0x1F]);
            valb -= 5;
        }
    }
    if (valb > 0) {
        out.push_back(B32_CHARS[(val << (5 - valb)) & 0x1F]);
    }
    while (out.size() % 8 != 0) {
        out.push_back('=');
    }
    return out;
}

string base32_decode(const string& in) {
    string out;
    int val = 0, valb = 0;
    for (unsigned char c : in) {
        if (c == '=') break;
        size_t idx = B32_CHARS.find(toupper(c));
        if (idx == string::npos) continue;
        
        val = (val << 5) | idx;
        valb += 5;
        while (valb >= 8) {
            valb -= 8;
            out.push_back(char((val >> valb) & 0xFF));
        }
    }
    return out;
}

void setup_route_base32(crow::SimpleApp& app) {
    CROW_ROUTE(app, "/api/cpp/encode/to-base32/<string>")
    ([](string plainText){
        crow::json::wvalue response;
        string base64_text = base32_encode(plainText);
        response["conveted"] = base64_text;
        return crow::response(200, response);
    });

    CROW_ROUTE(app, "/api/cpp/encode/from-base32/<string>")
    ([](string base64Text){
        crow::json::wvalue response;
        string plain_text = base32_decode(base64Text);
        response["converted"] = plain_text;
        return crow::response(200, response);
    });
}
