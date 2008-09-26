var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":71,"sl":43,"methods":[{"sl":50,"el":58,"sc":3},{"sl":60,"el":76,"sc":3},{"sl":78,"el":104,"sc":3},{"sl":90,"el":92,"sc":7},{"sl":94,"el":94,"sc":7},{"sl":96,"el":98,"sc":7},{"sl":100,"el":102,"sc":7},{"sl":106,"el":111,"sc":3},{"sl":113,"el":137,"sc":3},{"sl":140,"el":142,"sc":3},{"sl":144,"el":147,"sc":3}],"el":148,"name":"OSGiServiceRegistry"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":60},{"sl":78},{"sl":100},{"sl":113},{"sl":140}],"name":"testDirectServiceInjection","statements":[{"sl":61},{"sl":62},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":101},{"sl":114},{"sl":115},{"sl":118},{"sl":122},{"sl":123},{"sl":125},{"sl":129},{"sl":130},{"sl":134},{"sl":136},{"sl":141}],"pass":true},"test_23":{"methods":[{"sl":78},{"sl":96},{"sl":100},{"sl":113},{"sl":140}],"name":"testServiceExports","statements":[{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":97},{"sl":101},{"sl":114},{"sl":115},{"sl":118},{"sl":122},{"sl":123},{"sl":125},{"sl":129},{"sl":130},{"sl":134},{"sl":136},{"sl":141}],"pass":true},"test_21":{"methods":[{"sl":60},{"sl":78},{"sl":113},{"sl":140}],"name":"testServiceLookupPerformance","statements":[{"sl":61},{"sl":62},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":75},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":114},{"sl":115},{"sl":118},{"sl":122},{"sl":123},{"sl":125},{"sl":129},{"sl":130},{"sl":134},{"sl":136},{"sl":141}],"pass":true},"test_15":{"methods":[{"sl":60}],"name":"testDecoratedServiceInjection","statements":[{"sl":61},{"sl":62},{"sl":64},{"sl":65},{"sl":75}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0, 21, 15], [0, 21, 15], [0, 21, 15], [], [0, 21, 15], [0, 21, 15], [0, 21], [0, 21], [0, 21], [0, 21], [0, 21], [], [], [], [], [0, 21, 15], [], [], [0, 23, 21], [], [], [0, 23, 21], [0, 23, 21], [], [0, 23, 21], [], [], [], [0, 23, 21], [], [], [], [], [], [], [], [23], [23], [], [], [0, 23], [0, 23], [], [], [], [], [], [], [], [], [], [], [], [0, 23, 21], [0, 23, 21], [0, 23, 21], [], [], [0, 23, 21], [], [], [], [0, 23, 21], [0, 23, 21], [], [0, 23, 21], [], [], [], [0, 23, 21], [0, 23, 21], [], [], [], [0, 23, 21], [], [0, 23, 21], [], [], [], [0, 23, 21], [0, 23, 21], [], [], [], [], [], [], []]