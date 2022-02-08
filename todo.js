var btnAdd = document.getElementById('add');
var btup = document.getElementById('up');
//add
btnAdd.onclick = () => {
    var input = document.getElementById('input').value;
    var list = document.getElementById('list');

    if (input == '') {
        alert('Enter value please');
    }
    else {
        var li = document.createElement('li');
        // li.innerHTML=input;
        var text = document.createTextNode(input);
        li.appendChild(text);

        //create delete and update button
        var btn = document.createElement('button');
        btn.id = 'del';
        var t = document.createTextNode("Delete");
        btn.appendChild(t);
        li.appendChild(btn);

        var btnupdate = document.createElement('button');
        btnupdate.id = 'update';
        var t1 = document.createTextNode("update");
        btnupdate.appendChild(t1);

        //append buttons with li
        li.appendChild(btnupdate);
        list.appendChild(li);

        document.getElementById('input').value = "";

    }

    //delete
    btn.onclick = function (event) {
        var li2 = event.target.parentNode;
        console.log(li2);
        var list2 = li2.parentNode;
        console.log(list2);
        list2.removeChild(li2);
    }

    //update
    btnupdate.onclick = function (event) {
        var li2 = event.target.parentNode;
        var text = li2.firstChild;
        console.log(text);

        document.getElementById('input').value = text.textContent;

        btnAdd.style.display = "none";
        btup.style.display = "inline";

        btup.addEventListener('click', function () {

            text.textContent = document.getElementById('input').value;
            btnAdd.style.display = "inline";
            btup.style.display = "none";
            document.getElementById('input').value = "";
        });

    }

}



