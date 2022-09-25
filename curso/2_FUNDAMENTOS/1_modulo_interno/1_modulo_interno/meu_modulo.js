function soma(...args){
    return args.reduce( (acc, currentIndex) => acc+= currentIndex )
    
}


module.exports = {
    soma,
}