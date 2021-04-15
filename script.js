var name_of_st= [];
function submit() {
var dis_arr=[];
for (var i = 1;  i <= 4; i++) {
    var names= document.getElementById("st_name"+i).value;   
    name_of_st.push(names);
}
var len_of_arr= name_of_st.length;
for (k = 0; k <= len_of_arr; k++) {
    dis_arr.push("<h4>name:"+name_of_st[k]+"</h4>")   ;
}
document.getElementById("dis_name_with_comma").innerHTML=dis_arr;
var remove_comma=dis_arr.join(" ");
document.getElementById("dis_name_without_comma").innerHTML=remove_comma;
document.getElementById("submit_bt").style.display = "none";
document.getElementById("sort_bt").style.display = "inline-block";
}
function sort() {
    name_of_st.sort();
    var dis_arr_with_sort=[];
    var len_of_ar=name_of_st.length;
    for (k = 0; k <= len_of_ar; k++) {
        dis_arr_with_sort.push("<h4>name:"+name_of_st[k]+"</h4>")   ;
    }
    var remove_comma=dis_arr_with_sort.join(" ");
document.getElementById("dis_name_without_comma").innerHTML=remove_comma;
    console.log(name_of_st)
    document.getElementById("dis_name").innerHTML=name_of_st;
}
