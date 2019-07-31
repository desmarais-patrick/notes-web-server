var externalFsTest = require("./external/fs.js");

var tests = [
    externalFsTest,
];

var runTests = function (tests, callback) {
    if (tests.length === 0) {
        callback();
        return;
    }

    var test = tests.pop();

    try {
        process.stdout.write("  > " + test.name + " ... ");
        test.run(function (results) {
            process.stdout.write(results + "\n");
            runTests(tests, callback);
        });
    } catch (err) {
        process.stdout.write("Error! " + err.stack);
        runTests(tests, callback);
    }
};

console.log("Tests started\n");
runTests(tests, function () {
    console.log("\nTests finished\n");
});
