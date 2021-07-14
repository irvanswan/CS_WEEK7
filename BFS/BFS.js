const Tree = require('./Tree');

class BFS extends Tree{
    getBFS(stack = this.cache){

        if(stack.length < 1){
            stack = this.data[this.start];
            this.vertices[this.start].isVisited = true;
            this.output.push(this.start);
        }

        for(let i = 0; i < stack.length; i++){
            if(this.vertices[stack[i]].isVisited != true){
                this.vertices[stack[i]].isVisited = true;
                this.output.push(stack[i]);
                for(let j = 0; j < this.data[stack[i]].length; j++){
                    if(this.vertices[this.data[stack[i]][j]].isVisited != true){
                        this.cache.push(this.data[stack[i]][j])
                    }
                }
            }
        }

        for(const key in this.vertices){
            if(this.vertices[key].isVisited != true){
                return this.getBFS()
            }
        }

        return this.output;
    }
}

module.exports = BFS