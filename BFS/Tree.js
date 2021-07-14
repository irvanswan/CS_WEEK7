
class Tree{
    constructor(data, start){
        this.data = data; //  data yang dikirim dari index
        this.vertices = this.setVertices(); // vertices dari data
        this.output = new Array(this.vertices.length);
        this.cache = [];
        this.count = 0;
        this.start = start // start point
    }
    setVertices = function(){
        let newArr = [];
        for(const key in this.data){
            newArr[key] = {isVisited : false}
        }
        return newArr;
    }
    getVertices(){
        return this.vertices;
    }
}

module.exports = Tree