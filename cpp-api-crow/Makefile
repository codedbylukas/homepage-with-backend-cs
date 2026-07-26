# ==========================================
# UNIVERSAL C++ MAKEFILE
# ==========================================

# 1. Compiler & Flags
CXX      := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -O2
LDFLAGS  := -pthread

# 2. Directories & Target Output
SRC_DIR   := src
INC_DIR   := include
BUILD_DIR := build
TARGET    := app

# 3. Source File Detection (main.cpp in root + all .cpp files in src/)
MAIN_SRC  := main.cpp
SRC_FILES := $(shell find $(SRC_DIR) -name '*.cpp' 2>/dev/null)
ALL_SRCS  := $(MAIN_SRC) $(SRC_FILES)

# Generate Object and Dependency File Paths inside build/
OBJS := $(MAIN_SRC:%.cpp=$(BUILD_DIR)/%.o) \
        $(SRC_FILES:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/src/%.o)

DEPS := $(OBJS:.o=.d)

# Include paths for headers (e.g., include/ and project root)
IFLAGS := -I$(INC_DIR) -I.

# Phony Targets
.PHONY: all clean run

all: $(TARGET)

# Link the executable
$(TARGET): $(OBJS)
	@echo "==> Linking $(TARGET)..."
	@$(CXX) $(OBJS) -o $@ $(LDFLAGS)
	@echo "==> Build successful!"

# Rule for main.cpp (located in root directory)
$(BUILD_DIR)/main.o: main.cpp
	@mkdir -p $(BUILD_DIR)
	@echo "==> Compiling $<..."
	@$(CXX) $(CXXFLAGS) $(IFLAGS) -MMD -MP -c $< -o $@

$(BUILD_DIR)/src/%.o: $(SRC_DIR)/%.cpp
	@mkdir -p $(dir $@)
	@echo "==> Compiling $<..."
	@$(CXX) $(CXXFLAGS) $(IFLAGS) -MMD -MP -c $< -o $@

# Include automatically generated header dependencies (.d)
-include $(DEPS)

run: all
	@./$(TARGET)

clean:
	@echo "==> Cleaning up..."
	@rm -rf $(BUILD_DIR) $(TARGET)
