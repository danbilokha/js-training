const gulp = require('gulp');
const minimist = require('minimist');
const {exec, spawn} = require('child_process');
const run = require('gulp-run');

const node = './node_modules/.bin/run-node';
const args = minimist(process.argv.slice(2));
const {path, file} = args;

gulp.task('run', (cb) => {
    exec(`node ${path}/${file}`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
