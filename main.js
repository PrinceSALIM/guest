var array_names = [];
function submit()
{
    var name1 = document.getElementById("student1").value; 
    var name2 = document.getElementById("student2").value; 
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value; 
    array_names.push(name1); 
    array_names.push(name2); 
    array_names.push(name3); 
    array_names.push(name4); 
    console.log(array_names); 
    document.getElementById("display_name").innerHTML = array_names; 
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sorting_names").style.display = "inline-block"; 
} 
function sorting(){
    array_names.sort(); 
    console.log(array_names); 
    document.getElementById("display_name").innerHTML = array_names;
}