var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":75,"id":1788,"methods":[{"el":34,"sc":5,"sl":32},{"el":44,"sc":5,"sl":36},{"el":54,"sc":5,"sl":46},{"el":64,"sc":5,"sl":56},{"el":74,"sc":5,"sl":66}],"name":"JavaSecurityDigesterTest","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = $jsonSrcFileLines
