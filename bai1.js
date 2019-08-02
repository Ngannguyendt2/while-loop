function bai1() {
    let num=parseInt(prompt("Your number"));
    let sum=0;
    while(num!=(-1))
    { alert("num: "+num);
        sum+=num;
        alert("sum= "+sum);
        num=parseInt(prompt("Your number"));
    }
}