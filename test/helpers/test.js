class Test {
    /**
     * @param {string} name 
     * @param {Test~runCallback} testFn 
     */
    constructor(name, testFn) {
        this.name = name;
        this.testFn = testFn;
    }

    /**
     * @param {Test~runCallback} callback 
     * @throws
     */
    run(callback) {
        this.testFn(callback);
    }

    /**
     * @callback {Test~runCallback}
     * @params {string} results
     */
}

module.exports = Test;
