#pragma once
#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include "crow.h"
#include <sstream>
#include <cstdint>
#include <cstring>

using namespace std;

string rot13(const string& in);
void setup_route_rot13(crow::SimpleApp& app);
