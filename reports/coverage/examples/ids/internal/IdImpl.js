var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1036,"sl":26,"methods":[{"sl":31,"el":33,"sc":3},{"sl":35,"el":38,"sc":3},{"sl":42,"el":45,"sc":3},{"sl":47,"el":53,"sc":3}],"el":56,"name":"IdImpl"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_23":{"methods":[{"sl":31},{"sl":35}],"name":"testServiceExports","statements":[{"sl":32},{"sl":37}],"pass":true},"test_15":{"methods":[{"sl":31},{"sl":35}],"name":"testDecoratedServiceInjection","statements":[{"sl":32},{"sl":37}],"pass":true},"test_7":{"methods":[{"sl":31},{"sl":35}],"name":"testServiceInjection","statements":[{"sl":32},{"sl":37}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [23, 7, 15], [23, 7, 15], [], [], [23, 7, 15], [], [23, 7, 15], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]