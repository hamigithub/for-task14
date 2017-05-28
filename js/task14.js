/**
 * Created by Administrator on 2017/5/28 0028.
 */
var fad=document.getElementsByClassName("navbar-collapse");
var clicknum=0;//var一个变量，记录点击次数，初始值为0；
function lll(){
    if(clicknum<1){
        fad[0].style.display="block";
        clicknum++;
    }//如果点击次数变量值小于1，则打开菜单，且变量+1返回；
    else if (clicknum == 1) {
        fad[0].style.display="";
        clicknum--;
    }//如果点击次数变量值等于1，则关闭菜单，菜单display的值返回到原来值，并不真正为空，且变量-1返回；
}

/*function opo(){
    if (fad[0].style.display=""){
        fad[0].style.display="block";
    }
    else{
        fad[0].style.display="";
    }
}*/