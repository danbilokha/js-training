const gulp = require('gulp');
const minimist = require('minimist');
const {exec, spawn} = require('child_process');
const run = require('gulp-run');
const colors = require('ansi-colors');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const webpackBaseConfig = require('./webpack.config.js');

const args = minimist(process.argv.slice(2));
const {path, file} = args;

gulp.task('run-file', (cb) => {
    isFileExist(file);
    isFileExist(`${path}/${file}`);
    exec(`node ${path}/${file}`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('run-life', () => {
    console.log(colors.bold(colors.yellow('Start run-life task')));

    const config = webpackBaseConfig()
    let server = new webpackDevServer(webpack(webpackBaseConfig));
    console.log(colors.yellow('Start webpack dev server on 7070 port'));
    server.listen(7070);
});

const resolveFile = (file, path) => {
    console.log(file, path);
    return '';
}

const isFileExist = (file) => {
    console.log(fs, fs.access(file));
    return fs.access(file);
}
