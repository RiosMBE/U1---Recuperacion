const loadButton = document.getElementById('load-button');
const tableBody = document.getElementById('data-body');


    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", () => {
        document.getElementById("data-body").innerHTML = "";
    });
    
    
    loadButton.addEventListener('click', function() {
      fetch('/HTML/._alumnos.json')
        .then(response => response.json())
        .then(data => {
          let promedio = 0;
          tableBody.innerHTML = '';
          for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let promedio = (item.matematicas + item.quimica + item.fisica + item.geografia) / 4;
            promedio += promedio;
            tableBody.innerHTML += "<div class='row'>"+
            `<tr>
                <td>${item.codigo}</td>
                <td>${item.matricula}</td>
                <td>${item.nombre}</td>
                <td>${item.matematicas}</td>
                <td>${item.quimica}</td>
                <td>${item.fisica}</td>
                <td>${item.geografia}</td>
                <td>${promedio}</td>
              </tr>`+"</div>";
          }
          tableBody.innerHTML += 
          `
          <br>
          <tr>
            <td colspan="6">Total del promedio:</td>
            <td>
            ${promedio}</td>
            </tr>
            <br>
            `;
        });
    });