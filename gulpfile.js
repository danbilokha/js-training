const gulp = require('gulp');
const minimist = require('minimist');
const {exec, spawn} = require('child_process');
const run = require('gulp-run');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const fs = require('fs');

const gulpCalculations = require('./gulpfile.calculations.js');
const gulpDictionary = require('./gulpfile.dictionary.js');
const webpackBaseConfig = require('./webpack.config.js');

const {resolveFile, isFileExist, printConsole} = gulpCalculations;
const {ConsoleMessageType} = gulpDictionary; 
const args = minimist(process.argv.slice(2));
const {path, file} = args;

gulp.task('run-file', (cb) => {
    exec(`node ${path}/${file}`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('run-life', () => {
    const pathToFile = resolveFile(file, path);
    const output = {
        name: 'bundle.js',
        dist: 'dist'
    };
    const config = webpackBaseConfig(`./${pathToFile}`, output);

    let server = new webpackDevServer(webpack(config));
    printConsole(ConsoleMessageType.info, 'Start webpack dev server on 7070 port');
    server.listen(7070);
});
