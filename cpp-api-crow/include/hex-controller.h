#pragma once
#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include <sstream>
#include <cstdint>
#include <cstring>
#include "crow.h"

using namespace std;
string hex_encode(const string& in);
string hex_decode(const string& in);
void setup_route_hex(crow::SimpleApp& app);

