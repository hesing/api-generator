var path = require('path');
var rename = require('gulp-rename');
var template = require('gulp-template');
var yargs = require('yargs');

module.exports = function(gulp) {

    let root = '../restapi';

    // helper method for resolving paths
    let resolveToController = (glob = '') => {
        return path.join(root, 'controllers/api', glob); // restapi/{glob}
    };

    let resolveToModel = (glob = '') => {
        return path.join(root, 'models', glob); // restapi/{glob}
    };

    let resolveToRepository = (glob = '') => {
        return path.join(root, 'lib', glob); // restapi/{glob}
    };

    // let resolveToLazy = (glob = '') => {
    //     return path.join(root, 'app/components', glob); // app/components/{glob}
    // };

    let resolveToApt = (glob = '') => {
        return path.join(root, '../../UIDev/app/components', glob);
    };

    // map of all paths
    let paths = {
        output: root,
        blankControllerTemplates: path.join(__dirname, 'generator', 'controllers/**/*.**'),
        blankModelTemplates: path.join(__dirname, 'generator', 'models/*.**'),
        blankRepositoryTemplates: path.join(__dirname, 'generator', 'lib/*.**'),
        blankAptTemplates: path.join(__dirname, 'generator', 'apt/**/*.**'),
        dest: path.join(__dirname, 'dist')
    };

    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    const snakeToCamel = (s) => {
        return s.replace(/(\-\w)/g, function(m) {
            return m[1].toUpperCase(); });
    };

    function generateTemplates(path, destPath){
        const name = yargs.argv.name;
        const nameSnakeCase = snakeToCamel(name);
        console.log(path, destPath);
        gulp.src(path)
            .pipe(template({
                name: name,
                nameSnakeCase: nameSnakeCase,
                upCaseName: cap(nameSnakeCase)
            }))
            .pipe(rename((path) => {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath));        
    }

    // generate eager loaded component
    gulp.task('component', () => {
        const name = yargs.argv.name;
        const parentPath = yargs.argv.parent || '';
        const destControllerPath = path.join(resolveToController(), parentPath, name+'s');
        const destModelPath = path.join(resolveToModel());
        const destRepositoryPath = path.join(resolveToRepository());

        generateTemplates(paths.blankControllerTemplates, destControllerPath);
        generateTemplates(paths.blankModelTemplates, destModelPath);
        generateTemplates(paths.blankRepositoryTemplates, destRepositoryPath);
        // return gulp.src([, paths.blankModelTemplates, paths.blankRepositoryTemplates])
        //     .pipe(template({
        //         name: name,
        //         nameSnakeCase: nameSnakeCase,
        //         upCaseName: cap(nameSnakeCase)
        //     }))
        //     .pipe(rename((path) => {
        //         path.basename = path.basename.replace('temp', name);
        //     }))
        //     .pipe(gulp.dest(destPath));
    });

    // // generate lazy loaded component
    // gulp.task('lazy', () => {
    //     const parentPath = yargs.argv.parent || '';
    //     const destPath = path.join(resolveToLazy(), parentPath, name);

    //     return gulp.src(paths.blankLazyTemplates)
    //         .pipe(template({
    //             name: name,
    //             nameSnakeCase: nameSnakeCase,
    //             upCaseName: cap(nameSnakeCase)
    //         }))
    //         .pipe(rename((path) => {
    //             path.basename = path.basename.replace('temp', name);
    //         }))
    //         .pipe(gulp.dest(destPath));
    // });

    gulp.task('apt', () => {
        const name = yargs.argv.name;
        const nameSnakeCase = snakeToCamel(name);

        const parentPath = yargs.argv.parent || '';
        const destPath = path.join(resolveToApt(), parentPath, name);

        return gulp.src(paths.blankAptTemplates)
            .pipe(template({
                name: name,
                nameSnakeCase: nameSnakeCase,
                upCaseName: cap(nameSnakeCase)
            }))
            .pipe(rename((path) => {
                path.basename = path.basename.replace('temp', name);
            }))
            .pipe(gulp.dest(destPath));
    });

};
