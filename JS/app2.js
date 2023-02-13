const btnTabla = document.getElementById('btnCargar').addEventListener('clicl', function{
    cargarAjax();
})

function cargarAjax(){
    const url = "";
    axios
    .get()
    .then((Tabla) =>{
        mostrar(Tabla.data);
    }).catch((err) =>{
        console.log("Ocurrio un error" + err);
    })

    function mostrar(data){
        const inputCargar = document.getElementById('inputCargar').Value;

        for(itemData)
    }
}