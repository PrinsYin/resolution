var str1,str2,str3,str4
// var   na=["A","B","C"];
// var va=["x"]
// var word=["hate",2,"kill",2,"rich",2,"answer",1]
var string="kill(C,A)|kill(B,A)|kill(A,A)hate(x,A)|!kill(x,A)!hate(C,x)|!hate(A,x)hate(A,A)hate(A,C)rich(x,A)|hate(B,x)!hate(A,x)|hate(B,x)!hate(A,A)|!hate(A,B)|!hate(A,C)!hate(B,A)|!hate(B,B)|!hate(B,C)!hate(C,A)|!hate(C,B)|!hate(C,C)!rich(x,A)|!kill(x,A)"
var sentence
=[]
var result
var si=1;
var aaa=document.getElementById("aa")
var saaa="";
var list=[]
var li=0
var na=[]
var va=[]
var word=[]
var solvelist=[]
var sss=
[[[0,3,1,1],[0,2,1,1],[0,1,1,1]],
[[1,0,1,1],[0,0,1,0]],
[[1,3,0,0],[1,1,0,0]],
[[1,1,1,1]],
[[1,1,3,1]],
[[2,0,1,1],[1,2,0,1]],
[[1,1,0,0],[1,2,0,1]],
[[1,1,1,0],[1,1,2,0],[1,1,3,0]],
[[1,2,1,0],[1,2,2,0],[1,2,3,0]],
[[1,3,1,0],[1,3,2,0],[1,3,3,0]],
[[2,0,1,0],[0,0,1,0]],
[[0,0,1,0],[3,0,1,1]]];
str1="A B C"
str2="x"
str3="kill C A |kill B A |kill A A \nhate x A |!kill x A \n!hate C x |!hate A x \nhate A A \nhate A C \nrich x A |hate B x \n!hate A x |hate B x \n!hate A A |!hate A B |!hate A C \n!hate B A |!hate B B |!hate B C \n!hate C A |!hate C B |!hate C C \n!rich x A |!kill x A "
str4="kill x A"
var tree=[]
// tree[0]=-1
// tree[1]=-1
var cnum=[]
var end=0


function main()//读取字符串内容，初始化变量并调用归结函数
{
    saaa=""
    na=str1.split(" ")
    va=str2.split(" ")
    str3=str3.split("\n")
    for(var i=0;i<str3.length;i++)
    {
        var str=str3[i];
        str=str.split("|")
        var list=[]
        for(var j=0;j<str.length;j++)
        {
            var slist=[0,0,0,0];
            str[j]=str[j].split(" ")//????????????????????
            var type
            if(str[j][0][0]=="!")
            {
                
                str[j][0]=str[j][0].slice(1)
            }
            else
                slist[3]=1;
            type=word.indexOf(str[j][0])
            
            if(type==-1)
            {
                type=word.length
                word.push(str[j][0])
            }
            slist[0]=type;
            type= na.indexOf(str[j][1])
            slist[1]=type==-1?0:type+1
            type= na.indexOf(str[j][2])
            slist[2]=type==-1?0:type+1
            list.push(slist)
        }
        sentence.push(list)
    }
    str=str4.split(" ")
    {
        var list=[]
        var slist=[0,0,0,0];
        var type
        type=word.indexOf(str[0])
        slist[0]=type;
        type= na.indexOf(str[1])
        slist[1]=type==-1?0:type+1
        type= na.indexOf(str[2])
        slist[2]=type==-1?0:type+1
        list.push(slist)
        list.push([word.length,0,1,1])
    }
    sentence.push(list)
    // for(var i=0;i<sentence.length;i++)
    //     tree[i]=-1;

    console.log("sentence",sentence)
    console.log( na,va,word)
    end=0
    console.log(sentence)
    console.log("word3"+word[3])
    gmain()
    
}

function tostr(list)//将数组表示的子句转化为字符串
{
    var str="";
    for(var i=0;i<list.length;i++)
    {
        var str1=""
        if(list[i][0]==word.length)
            str1+="result:"
        else
            str1+=word[list[i][0]]+" "
        if(list[i][1]==0)
            str1+=va[0]+" "
        else
            str1+=na[list[i][1]-1]+" "
        if(list[i][2]==0)
            str1+=va[0]+" "
        else
            str1+=na[list[i][2]-1]+" "
        if(list[i][3]==0)
            str1="!"+str1
        if(i!=list.length-1)
            str1+="|"
        str+=str1
    }
    // console.log(str)
    return str;
}

function loaddata()//从网页读取数据
{
    console.log("loaddata")
    str1=document.getElementById("str1").value
    str2=document.getElementById("str2").value
    str3=document.getElementById("str3").value
    str4=document.getElementById("str4").value
    console.log(str1,str2,str3,str4)
    sentence=[]
    na=[]
    va=[]
    word=[]
    solvelist=[]
    tree=[]
    cnum=[]
    end=0
    si=1;
    list=[]
    li=0
    main()
}
function inistr3()//初始化子句部分的内容
{
    document.getElementById("str3").value="kill C A |kill B A |kill A A \nhate x A |!kill x A \n!hate C x |!hate A x \nhate A A \nhate A C \nrich x A |hate B x \n!hate A x |hate B x \n!hate A A |!hate A B |!hate A C \n!hate B A |!hate B B |!hate B C \n!hate C A |!hate C B |!hate C C \n!rich x A |!kill x A "
}