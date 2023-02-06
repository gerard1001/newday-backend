"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagination = exports.getPaginatedData = void 0;
function cov_iarnhuv2i() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\utils\\paginationHandler.js";
  var hash = "ac142df4bc2ce2b1626d4fe9d470089cdb0e202e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\utils\\paginationHandler.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 32
        }
      },
      "2": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 40
        }
      },
      "3": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 27
        }
      },
      "4": {
        start: {
          line: 10,
          column: 25
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "5": {
        start: {
          line: 11,
          column: 46
        },
        end: {
          line: 11,
          column: 50
        }
      },
      "6": {
        start: {
          line: 12,
          column: 22
        },
        end: {
          line: 12,
          column: 38
        }
      },
      "7": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 50
        }
      },
      "8": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 22
          },
          end: {
            line: 4,
            column: 23
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 10,
            column: 26
          }
        },
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 32
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 5,
            column: 23
          },
          end: {
            line: 5,
            column: 28
          }
        }, {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 5,
            column: 32
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 17
          },
          end: {
            line: 6,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 36
          }
        }, {
          start: {
            line: 6,
            column: 39
          },
          end: {
            line: 6,
            column: 40
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 12,
            column: 22
          },
          end: {
            line: 12,
            column: 38
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 12,
            column: 29
          },
          end: {
            line: 12,
            column: 34
          }
        }, {
          start: {
            line: 12,
            column: 37
          },
          end: {
            line: 12,
            column: 38
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ac142df4bc2ce2b1626d4fe9d470089cdb0e202e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iarnhuv2i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_iarnhuv2i();
cov_iarnhuv2i().s[0]++;
/* eslint-disable no-nested-ternary */

var getPagination = function getPagination(page, size) {
  cov_iarnhuv2i().f[0]++;
  var limit = (cov_iarnhuv2i().s[1]++, size ? (cov_iarnhuv2i().b[0][0]++, +size) : (cov_iarnhuv2i().b[0][1]++, 3));
  var offset = (cov_iarnhuv2i().s[2]++, page ? (cov_iarnhuv2i().b[1][0]++, page * limit) : (cov_iarnhuv2i().b[1][1]++, 0));
  cov_iarnhuv2i().s[3]++;
  return {
    limit: limit,
    offset: offset
  };
};
exports.getPagination = getPagination;
cov_iarnhuv2i().s[4]++;
var getPaginatedData = function getPaginatedData(data, page, limit) {
  cov_iarnhuv2i().f[1]++;
  var _ref = (cov_iarnhuv2i().s[5]++, data),
    totalItems = _ref.count,
    result = _ref.rows;
  var currentPage = (cov_iarnhuv2i().s[6]++, page ? (cov_iarnhuv2i().b[2][0]++, +page) : (cov_iarnhuv2i().b[2][1]++, 0));
  var totalPages = (cov_iarnhuv2i().s[7]++, Math.ceil(totalItems / limit));
  cov_iarnhuv2i().s[8]++;
  return {
    totalItems: totalItems,
    result: result,
    totalPages: totalPages,
    currentPage: currentPage
  };
};
exports.getPaginatedData = getPaginatedData;