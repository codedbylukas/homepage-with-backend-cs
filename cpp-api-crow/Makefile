# ==========================================
# UNIVERSAL C++ MAKEFILE
# ==========================================

CXX      := g++
CXXFLAGS := -std=c++17 -Wall -Wextra -O2
LDFLAGS  := -pthread

SRC_DIR   := src
INC_DIR   := include
BUILD_DIR := build
TARGET    := app

MAIN_SRC  := main.cpp
SRC_FILES := $(shell find $(SRC_DIR) -name '*.cpp' 2>/dev/null)
ALL_SRCS  := $(MAIN_SRC) $(SRC_FILES)

OBJS := $(MAIN_SRC:%.cpp=$(BUILD_DIR)/%.o) \
        $(SRC_FILES:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/src/%.o)

DEPS := $(OBJS:.o=.d)

IFLAGS := -I$(INC_DIR) -I.

.PHONY: all clean run

all: $(TARGET)

$(TARGET): $(OBJS)
	@echo "==> Linking $(TARGET)..."
	@$(CXX) $(OBJS) -o $@ $(LDFLAGS)
	@echo "==> Build successful!"

$(BUILD_DIR)/main.o: main.cpp
	@mkdir -p $(BUILD_DIR)
	@echo "==> Compiling $<..."
	@$(CXX) $(CXXFLAGS) $(IFLAGS) -MMD -MP -c $< -o $@

$(BUILD_DIR)/src/%.o: $(SRC_DIR)/%.cpp
	@mkdir -p $(dir $@)
	@echo "==> Compiling $<..."
	@$(CXX) $(CXXFLAGS) $(IFLAGS) -MMD -MP -c $< -o $@

-include $(DEPS)

run: all
	@./$(TARGET)

clean:
	@echo "==> Cleaning up..."
	@rm -rf $(BUILD_DIR) $(TARGET)
