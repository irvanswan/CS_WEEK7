const BFS = require('./BFS')    
const DFS = require('./DFS')

const Data2 = {
    A:['B','C'],
    B:['A','D','E'],
    C:['A','F','G'],
    D:['B','H'],
    E:['B','H'],
    F:['C','H'],
    G:['C','H'],
    H:['D','E','F','G']
}

const Data = {
    A:['B', 'C', 'D', 'E', 'F'],
    B:['A', 'G', 'H', 'I', 'J', 'K'],
    C:['A'],
    D:['A'],
    E:['A', 'L', 'M', 'N', 'O'],
    F:['A'],
    G:['B'],
    H:['B'],
    I:['B'],
    J:['B'],
    K:['B'],
    L:['E'],
    M:['E'],
    N:['E'],
    O:['E','P','Q','R','S'],
    P:['O'],
    Q:['O'],
    R:['O'],
    S:['O']
}

const bfs = new BFS(Data2, 'A');
const dfs = new DFS(Data2, 'A');

console.log('Ini DFS nya',dfs.getDFS());
console.log('Ini BFS nya', bfs.getBFS());

