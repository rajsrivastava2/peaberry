var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":378,"sl":37,"methods":[{"sl":40,"el":51,"sc":3},{"sl":57,"el":74,"sc":3},{"sl":65,"el":67,"sc":11},{"sl":76,"el":78,"sc":3},{"sl":80,"el":94,"sc":3}],"el":95,"name":"ImportProxyClassLoader"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":40},{"sl":57},{"sl":80}],"name":"testWiring","statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":73},{"sl":84},{"sl":87},{"sl":88},{"sl":89}],"pass":true},"test_2":{"methods":[{"sl":40},{"sl":57},{"sl":65},{"sl":76},{"sl":80}],"name":"cornerCases","statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":47},{"sl":49},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":66},{"sl":69},{"sl":73},{"sl":77},{"sl":84},{"sl":87},{"sl":88},{"sl":89}],"pass":true},"test_3":{"methods":[{"sl":40},{"sl":57}],"name":"checkRanking","statements":[{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":73}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1, 3, 2], [1, 3, 2], [], [1, 3, 2], [1, 3, 2], [1, 3, 2], [], [2], [], [2], [], [], [], [], [], [], [], [1, 3, 2], [1, 3, 2], [1, 3, 2], [], [1, 3, 2], [1, 3, 2], [1, 3, 2], [2], [2], [2], [], [], [2], [], [], [], [1, 3, 2], [], [], [2], [2], [], [], [1, 2], [], [], [], [1, 2], [], [], [1, 2], [1, 2], [1, 2], [], [], [], [], [], []]
