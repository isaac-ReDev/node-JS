function concatStrings(...args){
    return args.reduce( (acc,currentWord) => acc += currentWord, '' )
};


export default concatStrings;