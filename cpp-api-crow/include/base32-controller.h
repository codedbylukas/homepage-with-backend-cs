#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <iomanip>
#include <algorithm>
#include <map>
#include <cctype>
#include "crow.h"

using namespace std;

string base32_encode(const string& in);
string base32_decode(const string& in);
void setup_route_base32(crow::SimpleApp& app);
