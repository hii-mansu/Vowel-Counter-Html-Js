var text = document.querySelector(".textarea");
var find = document.querySelector(".find");
var output = document.querySelector(".output");

find.addEventListener("click", function(){
    var val = text.value;
    if(!val){
        output.innerHTML="🙈";
    }
    else{
        var count =0;
        for(i=0;i<val.length;i++){
            if(val[i]==="a" || val[i]==="i" || val[i]==="e" || val[i]==="o" || val[i]==="u"){
                count++;
            }
            else{
                output.innerHTML="0";
            }
        }
        output.innerHTML=`${count}`;
    }
})