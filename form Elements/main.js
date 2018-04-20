//Students
var ifc_085_html5 = ["Герула", "Вестгайм", "Щербій", "Мартинюк", "Юрченко"];
var if_085_webui = ["Іванов", "Петров", "Сидоров", "Петренко", "Довженко"];
var if_086_java = ["Сімків", "Войтович", "Пупкін"];

function generateStudentsSelect(list){
	students.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
		students.innerHTML += "<option value=" +i+">" + list[i] + "</option>"
	}
};
groups.addEventListener("change", function(){
	if (groups.value != ""){
		switch(groups.value) {
			case "1" : {
				generateStudentsSelect(ifc_085_html5)
				break;
			}
			case "2" : {
				generateStudentsSelect(if_085_webui)
				break;
			}
			case "3" : {
				generateStudentsSelect(if_086_java)
				break;
			}
		}
	}
	else{
			students.innerHTML = "";		
			student.disabled = "disabled"
		}
}, false );
