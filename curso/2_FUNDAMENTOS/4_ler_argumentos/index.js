// console.log(process.argv);

const args = process.argv.slice(2);
// console.log(args)

// args.forEach(element => {
//     console.log(element);
// });

// const  name = args[0].split('=')[1];
// console.log(name);

const getArgs = (array) => {
    const newArgs = []
    let a;
        array.forEach(element => {
        a = element.split('=');

        newArgs.push({a});
    })
    return newArgs;

};

const argu = getArgs(args);
console.log(argu.map(item => item));