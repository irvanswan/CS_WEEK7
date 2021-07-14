const Tree = require('./Tree');
class DFS extends Tree{
    
    getDFS(start = this.start){
        this.vertices[start].isVisited = true;
        this.output.push(start);
        let stack = this.data[start];
        for(let i =0; i < stack.length; i++){
            if(this.vertices[stack[i]].isVisited != true){
                this.vertices[stack[i]].isVisited = true;
                this.output.push(stack[i]);
                for(let j = 0; j < this.data[stack[i]].length; j++){
                    if(this.vertices[this.data[stack[i]][j]].isVisited != true){
                        this.getDFS(this.data[stack[i]][j])
                    }
                }
            }
        }
        return this.output
    }
}
module.exports = DFS