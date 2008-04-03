var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 272, "sl" : 31, "el" : 106, "name" : "AbstractServiceTest",
    "methods" : [
             {"sl" : 43, "el" : 60, "sc" : 3},  {"sl" : 50, "el" : 56, "sc" : 15},  {"sl" : 62, "el" : 64, "sc" : 3},  {"sl" : 66, "el" : 71, "sc" : 3},  {"sl" : 73, "el" : 76, "sc" : 3},  {"sl" : 78, "el" : 83, "sc" : 3},  {"sl" : 85, "el" : 99, "sc" : 3},  {"sl" : 101, "el" : 105, "sc" : 3}  ]}
    ,
    {"id" : 272, "sl" : 33, "el" : 35, "name" : "AbstractServiceTest.TestService",
    "methods" : [
              ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_8" : {
					  "name" : "staticMultiService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 85 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 92 },{"sl": 96 },{"sl": 98 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_7" : {
					  "name" : "disableAllServices",
					  "pass" : true ,
					  "methods" : [{"sl": 66 },],
					  "statements" : [{"sl": 67 },{"sl": 68 },{"sl": 70 },]
					  },
		"test_12" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 78 },{"sl": 85 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 68 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 79 },{"sl": 80 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 92 },{"sl": 96 },{"sl": 98 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_2" : {
					  "name" : "testUnaryService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 66 },{"sl": 73 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 59 },{"sl": 67 },{"sl": 68 },{"sl": 70 },{"sl": 74 },{"sl": 75 },]
					  },
		"test_6" : {
					  "name" : "disableAllServices",
					  "pass" : true ,
					  "methods" : [{"sl": 66 },],
					  "statements" : [{"sl": 67 },{"sl": 68 },{"sl": 70 },]
					  },
		"test_10" : {
					  "name" : "unleasedUnaryService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 78 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 68 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 79 },{"sl": 80 },]
					  },
		"test_9" : {
					  "name" : "leasedMultiService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 85 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 92 },{"sl": 96 },{"sl": 98 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_4" : {
					  "name" : "testMultiService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 85 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 92 },{"sl": 96 },{"sl": 98 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_11" : {
					  "name" : "check",
					  "pass" : true ,
					  "methods" : [{"sl": 50 },],
					  "statements" : [{"sl": 51 },{"sl": 52 },]
					  },
		"test_3" : {
					  "name" : "leasedUnaryService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 78 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 68 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 79 },{"sl": 80 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_5" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 85 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 68 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 92 },{"sl": 96 },{"sl": 98 },{"sl": 102 },{"sl": 103 },]
					  },
		"test_0" : {
					  "name" : "staticUnaryService",
					  "pass" : true ,
					  "methods" : [{"sl": 43 },{"sl": 50 },{"sl": 62 },{"sl": 66 },{"sl": 73 },{"sl": 78 },{"sl": 101 },],
					  "statements" : [{"sl": 44 },{"sl": 45 },{"sl": 47 },{"sl": 51 },{"sl": 52 },{"sl": 54 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 70 },{"sl": 74 },{"sl": 75 },{"sl": 79 },{"sl": 80 },{"sl": 102 },{"sl": 103 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 11 , 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 11 , 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 11 , 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [  ] ,
  [ 0 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 7 , 6 , 4 , 2 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 7 , 6 , 4 , 2 , 12   ] ,
  [ 10 , 3 , 5 , 7 , 6 , 2 , 12   ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 7 , 6 , 4 , 2 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [ 0 , 10 , 3 , 9 , 8 , 5 , 4 , 2 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 0 , 10 , 3 , 12   ] ,
  [ 0 , 10 , 3 , 12   ] ,
  [ 0 , 10 , 3 , 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [ 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [  ] ,
  [ 0 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [ 0 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [ 0 , 3 , 9 , 8 , 5 , 4 , 12   ] ,
  [  ] ,
  [  ] ,
  [  ] 
];
