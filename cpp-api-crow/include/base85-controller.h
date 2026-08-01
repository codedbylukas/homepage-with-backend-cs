#pragma once
#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <iomanip>
#include <algorithm>
#include <map>
#include <cctype>
#include "crow.h"
#include "include/base85-controller.h"

using namespace std;

string base85_encode(const string& in);
string base85_decode(const string& in);
void setup_route_base84(crow::SimpleApp& app);

