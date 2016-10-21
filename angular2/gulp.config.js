module.exports = function () {
    var config= {
        allTs:'./app/**/*.ts',
        allMap:'./app/**/*.map',
        allLibMap:'./node_modules/**/*.map',
        allHtml:'./app/**/*.html',
        typings: './typings/**/*.d.ts',
        tsOutPath: './../public/app/',
        libOutPath: './../public/lib/'
    }
    return config;
}
