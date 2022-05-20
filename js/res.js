
// 列表放入列表，始终传递地址

// 四元组[a,b,c,d]表示类型,a,b,是否
// kill(C,A)|kill(B,A)|kill(A,A)
// hate(x,A)|!kill(x,A)
// !hate(C,x)|!hate(A,x)
// hate(A,A)
// hate(A,C)
// rich(x,A)|hate(B,x)
// !hate(A,x)|hate(B,x)
// !hate(A,A)|!hate(A,B)|!hate(A,C)
// !hate(B,A)|!hate(B,B)|!hate(B,C)
// !hate(C,A)|!hate(C,B)|!hate(C,C)
// !rich(x,A)|!kill(x,A)

function createa(w, h) //辅助函数，用来创建高维数组
{
  var r = []
  for(var i=0;i<w;i++) {
    var row = new Array()
    for(var j=0;j<h;j++) {
      row.push(0)
    }
    r.push(row)
  }
  return r
}

function repeat(arr)
 {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                var del = j;
                arr.splice(del, 1);
            }
        }
    }
    return arr;
}

// [[[2,3,1,1],[2,2,1,1],[2,1,1,1]], [[1,0,1,1],[2,0,1,0]]]

function tell(sen)
{
    
    if(sen.length>4)
        return 1;
    for(var i=0;i<list.length;i++)
    {
        
        for(var j=0;j<list[i].length;j++)
        {
            var flag=0;
            var flag1=0;
            for(var k=0;k<sen.length;k++)
            {
                // console.log(sen,list,list[i].length,i,j,k)
                if(sen[k]==list[i][j]||
                    (sen[k][0]==list[i][j][0]&&
                        (sen[k][1]==list[i][j][1]||list[i][j][1]==0)
                        &&(sen[k][2]==list[i][j][2]||list[i][j][2]==0)
                        &&sen[k][3]==list[i][j][3]))
                {
                    flag=1;
                    break;
                }
                else
                {
                }
            }
            if(flag==0)
            {
                break;
            }
            else if(j==list[i].length-1)
            {
                return 1;
            }
            // console.log("1111111111111111111111111111111111111111111111")
        }
    }
    return 0;
}

function guijie(l1,l2,l1l,l2l,fflag)
{
    // saaa+=("list"+[].concat(list));
    // saaa+="<p>"
    // saaa+=("guijie"+l1+l2);
    // saaa+="<p>"
    
    // console.log("guijie",l1,l2)
    var glist=[];
    var flag=0;
    if(!l1||!l2)
        return;
    else if(l1l==1)
    {
        flag=0;
        for(var i=0;i<l2l;i++)
        {
            if(l1[0][0]==l2[i][0]&&l1[0][1]==l2[i][1]&&l1[0][2]==l2[i][2]&&l1[0][3]!=l2[i][3]&&flag==0||(fflag==1&&l1[0][0]==l2[i][0]&&(l1[0][1]==l2[i][1]||l1[0][1]==0||l2[i][1]==0)&&(l1[0][2]==l2[i][2]||l1[0][2]==0||l2[i][2]==0)&&l1[0][3]!=l2[i][3]))
            {
                flag=1;
                continue;
            }
            glist.push(l2[i]);
        }
        if(flag==0)
            return []
    }
    else if(l2l==1)
    {
        flag=0;
        for(var i=0;i<l1l;i++)
        {
            if(l1[i][0]==l2[0][0]&&l1[i][1]==l2[0][1]&&l1[i][2]==l2[0][2]&&l1[i][3]!=l2[0][3]&&flag==0||(fflag==1&&l1[i][0]==l2[0][0]&&(l1[i][1]==l2[0][1]||l1[i][1]==0||l2[0][1]==0)&&(l1[i][2]==l2[0][2]||l1[i][2]==0||l2[0][2]==0)&&l1[i][3]!=l2[0][3]))
            {
                flag=1;
                continue;
            }
            glist.push(l1[i]);
        }
       
        if(flag==0)
            return []
    }
    else
    {
        for(var i=0;i<l1l;i++)
        {
            for(var j=0;j<l2l;j++)
            if(l1[i][0]==l2[j][0]&&l1[i][1]==l2[j][1]&&l1[i][2]==l2[j][2]&&l1[i][3]!=l2[j][3]&&l1[i][3]-9!=l2[j][3]&&l1[i][3]+9!=l2[j][3]&&flag==0)
            {
                flag=1;
                
                l1[i][3]=l1[i][3]<5?l1[i][3]+9:l1[i][3];
                l2[j][3]=l2[j][3]<5?l2[j][3]+9:l2[j][3];
                break;
            }
            if(flag==1)
                break;
        }
        if(flag==0)
            return [];
        for(var i=0;i<l1l;i++)
        {
            // console.log(i,l1[i])
            if(l1[i][3]<9)
            {
                // console.log(l1[i][3])
                glist.push(l1[i]);
            }
            else
                l1[i][3]-=9
        }
            
        for(var j=0;j<l2l;j++)
        {
            if(l2[j][3]<9)
                glist.push(l2[j]);
            else
                l2[j][3]-=9
        }
    }
    // if(glist.length==0)
    //     return 1;
    if(tell(glist)==1)
    {
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        return [];
    }
    else
    {
        return glist;
    }
        
}

function gmain()
{
    var ne=0;
    var count=0;
    list.push(sentence[0]);
    while(li<list.length)
    {
        li++;
        count++;
        console.log("count",count,list.length)
        // for(var i=0;i<list.length;i++)
            // console.log(list[i])
        if(ne==0)
        {
            if(si==sentence.length)
                break;
            list.push(sentence[si])

            si++;
        }
        else
            ne--;
        var i=0;
        var ns=list[li-ne];
        var inf=li-ne;
        // console.log(" "+ns)
        while(i<li-ne&&end==0)
        {
            // console.log(li,i)
            var listi=list[i]
            var xflag=0;
            // var xns=createa(ns.length,4)
            // var xlisti=createa(listi.length,4)
            let xns=[].concat(ns)
            let xlisti=[].concat(listi);
            // console.log(" "+ns)
            // console.log("preee",ns,listi,xns,xlisti)
            // console.log("list:",[].concat(list))
            // console.log(list)
            clist=guijie(xns,xlisti,ns.length,listi.length,1)
            if(clist.length>0)
            for(var ii=1;ii<na.length*na.length+1;ii++)
            {
                for(var j=0;j<ns.length;j++)
                {
                    for(var k=1;k<3;k++)
                    {
                        if(ns[j][k]==0)
                        {
                            let mm=[].concat(ns[j]);
                            mm[k]=parseInt((ii+na.length-1)/na.length)
                            xns[j]=mm
                            xflag=1;
                        }
                    }
                }
                // saaa+=("listeda"+list);
                //     saaa+="<p>"
                for(var j=0;j<listi.length;j++)
                {
                    for(var k=1;k<3;k++)
                    {
                        if(listi[j][k]==0)
                        {
                            let mm=[].concat(listi[j]);
                            mm[k]=parseInt(ii%na.length+1)
                            xlisti[j]=mm
                            if(xflag==1)
                                xflag=3;
                            else if(xflag==0)
                                xflag=2;
                        }
                    }
                }
                // console.log(" "+xns)
                // saaa+=("listedab"+list);
                //     saaa+="<p>"
                // console.log("preee"+xns+xlisti)
                var clist
                // if(xns.length==1||xlisti.length==1)
                if(1)
                    clist=guijie(xns,xlisti,ns.length,listi.length)
                else
                    clist=[]
                if(clist==1)
                {
                    // console.log("successssssssssss")
                    // return
                }
                if(clist&&clist.length>0)
                {
                    tree[list.length]=[i,inf]
                    // console.log(i,li,ne)
                    cnum[i]++
                    cnum[li-ne]++
                    ne++
                    saaa+=tostr(ns)+"+"+tostr(listi)+"->"+tostr(clist)
                    saaa+="<p>"
                    
                   
                    list.push(clist)
                    
                    // saaa+=("listed"+list);
                    // saaa+="<p>"
                    console.log(clist)
                    if(clist.length==1&&clist[0][0]==word.length&&clist[0][3]==1)
                    {
                        // saaa+=tostr(ns)+"+"+tostr(listi)+"->"+tostr(clist)
                        console.log("successssssssssss"+clist)
                        aaa.innerHTML='<div style="font-size:25px;">归结成功！结果为'+na[clist[0][1]-1]+"</div>"+saaa;
                        console.log(list,tree)
                        getsolve(list.length-1);
                        end=1
                        drawTree ()
                        
                        
                        break;
                    }
                }
                if(xflag==0)
                    break;
                else if(xflag==1)
                {
                    ii+=(na.length-1);
                }
                else if(xflag==2&&ii==na.length)
                {
                    break;
                }
            }
            else
            {

            }
            // list=repeat(list)
            i++;
        }
    }
    if(end==0)
    {    aaa.innerHTML='<div style="font-size:25px;">归结失败！以下为过程：</div>'+saaa;
    drawTree ()
}
}

function getsolve(i)
{
    solvelist.push(i)
    if(tree[i])
    {
        getsolve(tree[i][0])
        getsolve(tree[i][1])
    }
}