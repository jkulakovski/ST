<!DOCTYPE html>
<html lang="en">

<head>
  
  <meta charset="UTF-8">
  <title>Js</title>
  <script src="script.js"></script>

</head>

<body>
  
  <div id="container">
    <button id="startButton">����� ����</button>
  </div>
  
</body>

</html>>


document.addEventListener("DOMContentLoaded", function () {
    
    var arrayOfUniversity = ['�����', '���', '����'];
    var arrayOfFaculty = [{
        'university': '�����',
        'faculty': ['���', '����', '���', '����', '���']
    }, {'university': '���', 'faculty': ['������', '����', '�����������']}, {
        'university': '����',
        'faculty': ['��������������', '����', '�������������']
    }];

    var buttonStart = document.getElementById('startButton');
    buttonStart.addEventListener('click', start);

    function getLabel(text) {
        var label = document.createElement('p');
        label.innerHTML = text;
        return label;
    }

    function getInput(name) {
        var input = document.createElement('input');
        input.setAttribute('name', name);
        return input;
    }

    function getRadio(value) {
        var genderRadio = document.createElement('input');
        genderRadio.setAttribute('type', 'radio');
        genderRadio.setAttribute('name', 'gender');
        genderRadio.setAttribute('value', value);
        return genderRadio;
    }

    function show() {
        var resultText = '�������: ';
        resultText += document.forms.inputForm.elements.surname.value;
        resultText += '\n���: ';
        resultText += document.forms.inputForm.elements.name.value;
        resultText += '\n��������: ';
        resultText += document.forms.inputForm.elements.patronymic.value;
        resultText += '\n���: ';
        resultText += document.forms.inputForm.elements.gender.value;
        resultText += '\n����: ';
        resultText += document.forms.inputForm.elements.course.value;
        resultText += '\n����� ��������: ';
        resultText += document.forms.inputForm.elements.formLearn.checked ? '�������' : '�����';
        resultText += '\n�����������: ';
        resultText += document.forms.inputForm.elements.university.value;
        resultText += '\n���������: ';
        resultText += document.forms.inputForm.elements.faculty.value;
        resultText += '\n� ����: ';
        resultText += document.forms.inputForm.elements.comment.value;
        resultText += '\n';
        alert(resultText);
    }

    function changeFaculty() {
        var university = document.forms.inputForm.elements.university.value;
        arrayOfFaculty.forEach(function (item) {
            if (item.university === university) {
                var facultySelect = document.forms.inputForm.elements.faculty;
                facultySelect.innerHTML = '';
                item.faculty.forEach(function (faculty) {
                    var option = document.createElement('option');
                    option.setAttribute('value', faculty);
                    option.innerHTML = faculty;
                    facultySelect.appendChild(option);
                });
            }
        });
    }

    function start() {


        buttonStart.removeEventListener('click', start);
        buttonStart.outerHTML = '';

        var container = document.getElementById('container');

        var form = document.createElement('form');
        form.setAttribute('name', 'inputForm');

        form.appendChild(getLabel('�������: '));
        var surnameInput = getInput('surname');
        form.appendChild(surnameInput);

        form.appendChild(getLabel('���: '));
        var nameInput = getInput('name');
        form.appendChild(nameInput);

        form.appendChild(getLabel('��������: '));
        var patronymicInput = getInput('patronymic');
        form.appendChild(patronymicInput);

        form.appendChild(getLabel('���: '));
        var genderRadioMan = getRadio('�������');
        form.appendChild(genderRadioMan);
        form.appendChild(document.createTextNode('�������'));

        var genderRadioWoman = getRadio('�������');
        form.appendChild(genderRadioWoman);
        form.appendChild(document.createTextNode('�������'));
        form.appendChild(document.createElement('Br'));

        form.appendChild(getLabel('����: '));
        var courseInput = document.createElement('input');
        courseInput.setAttribute('type', 'number');
        courseInput.setAttribute('name', 'course');
        form.appendChild(courseInput);

        form.appendChild(getLabel('�����������: '));
        var universitySelect = document.createElement('select');
        universitySelect.setAttribute('name', 'university');
        arrayOfUniversity.forEach(function (item) {
            var option = document.createElement('option');
            option.setAttribute('value', item);
            option.innerHTML = item;
            universitySelect.appendChild(option);
        });
        universitySelect.addEventListener('change', changeFaculty);
        form.appendChild(universitySelect);
        form.appendChild(document.createElement('Br'));

        form.appendChild(getLabel('���������: '));
        var facultySelect = document.createElement('select');
        facultySelect.setAttribute('name', 'faculty');

        arrayOfFaculty.forEach(function (item) {
            if (item.university === universitySelect.value) {
                item.faculty.forEach(function (faculty) {
                    var option = document.createElement('option');
                    option.setAttribute('value', faculty);
                    option.innerHTML = faculty;
                    facultySelect.appendChild(option);
                });
            }
        });

        form.appendChild(facultySelect);
        form.appendChild(document.createElement('Br'));


        form.appendChild(getLabel('����� ��������: '));
        var formCheckbox = document.createElement('input');
        formCheckbox.setAttribute('type', 'checkbox');
        formCheckbox.setAttribute('name', 'formLearn');
        form.appendChild(formCheckbox);
        form.appendChild(document.createTextNode('�������'));

        form.appendChild(getLabel('� ����: '));
        var commentArea = document.createElement('textarea');
        commentArea.setAttribute('name', 'comment');
        commentArea.style.resize = 'none';
        form.appendChild(commentArea);

        form.appendChild(document.createElement('Br'));
        var buttonSubmit = document.createElement('button');
        buttonSubmit.setAttribute('type', 'button');
        buttonSubmit.innerHTML = '���������';
        buttonSubmit.addEventListener('click', show);
        form.appendChild(buttonSubmit);

        container.appendChild(form);
    }

});




