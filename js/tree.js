 function getdot()//将归结树转化为dot字符串
 {
     var dot='digraph Tree {\nsplines="line";\nnode [shape = record, height = .1];\n'
     dot+="invis[width=0.1, height=0.1, shape=point, style=invis]"
     for(var i=0;i<list.length;i++)
     {
         dot=dot+'node'+i+'[label = "'+tostr(list[i]);
        //  console.log(list[i])
        if(end==1&&solvelist.indexOf(i)!=-1)
             dot+='", style=filled, fillcolor=pink] ;\n'
        else
            dot+='"];\n'
     }
     for(var i=0;i<list.length;i++)
     {
         if(tree[i]&&tree[i].length==2)
         {
            // if(solveid[i]&&solveid[tr[i]])
            console.log(tree[i],list[i])
            // dot=dot+'"node'+tree[i][0]+'" -> "node' +i+'"[style=filled, fillcolor=red] ;\n';
            dot=dot+'"node'+tree[i][0]+'" -> "node' +i+'";\n';
            dot=dot+'"node'+tree[i][1]+'" -> "node' +i+'";\n';
         }
         else
         {
             console.log(tree[i],list[i])
            // dot=dot+'"invis" -> "node' +i+'";\n';
         }
     }
     dot+="}"
     console.log(dot)
     return dot;
 }

// digraph g {
// splines="line";
// node [shape = record, height = .1];
// node0[label = "<f0> | 38 | <f1> | 56 | <f2> "];
// "node0":f0 -> "node1";
// node1[label = "<f0> | 11 | <f1> "];
// "node1":f0 -> "node2";
// node2[label = "<f0> | 10 | <f1> "];
// "node1":f1 -> "node3";
// node3[label = "<f0> | 16 | <f1> "];
// "node0":f1 -> "node4";
// node4[label = "<f0> | 49 | <f1> "];
// "node4":f0 -> "node5";
// node5[label = "<f0> | 41 | <f1> | 43 | <f2> "];
// "node4":f1 -> "node6";
// node6[label = "<f0> | 50 | <f1> | 51 | <f2> "];
// "node0":f2 -> "node7";
// node7[label = "<f0> | 62 | <f1> "];
// "node7":f0 -> "node8";
// node8[label = "<f0> | 58 | <f1> "];
// "node7":f1 -> "node9";
// node9[label = "<f0> | 64 | <f1> "];
// }