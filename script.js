function store_data(){
    var name=$("#fname-feedback").val();
    localStorage.setItem('name',name);
	var name=localStorage.getItem('name');

    alert("The name " + fname-feedback + " has been saved!");
}