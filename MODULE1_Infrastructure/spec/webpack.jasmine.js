const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('./support/jasmine.json');
jasmine.configureDefaultReporter({
    showColors: falses
});
jasmine.execute();
