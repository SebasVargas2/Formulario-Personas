
const personas=[
    {nombre:'Tasha',edad:'21',genero:'f',fecha:{dia:01,mes:09,anio:2002}},
    {nombre:'Tyrone',edad:'19',genero:'m',fecha:{dia:01,mes:07,anio:2004}},
    {nombre:'Uniqua',edad:'60',genero:'f',fecha:{dia:01,mes:04,anio:1963}},
    {nombre:'Austin',edad:'13',genero:'m',fecha:{dia:01,mes:01,anio:2009}},
    {nombre:'Pablo',edad:'9',genero:'m',fecha:{dia:13,mes:04,anio:2014}}
]

const nombre=document.getElementById('nombre')
const edad=document.getElementById('edad')
const genero=document.getElementById('genero')
const fecha=document.getElementById('fecha')

const agregar=document.getElementById('agregar')
agregar.addEventListener('click',aceptar)

const mostrarNombres=document.getElementById('mNombres')
mostrarNombres.addEventListener('click',mNombres)

const edades=document.getElementById('edades')
edades.addEventListener('click',mEdades)


function aceptar(){
    let name=nombre.value
    let age=edad.value
    let gender=genero.value
    let date=fecha.value

    if (name==''||age==''||gender==''||date==''){
        alert('Existe un campo vacio')
    }else{
        date=date.split('-')
        let year=date[0]
        let month=date[1]
        let day=date[2]
        
        personas.push({nombre:name,
            edad:age,
            genero:gender,
            fecha:{dia:day,
                mes:month,
                anio:year}})
        
        nombre.value=''
        edad.value=''
        genero.value=''
        fecha.value=''

        console.log(personas)

    }
}

function mNombres(){
    let contenido=''
    contenido=`<table><th>Nombres</th>`
    //let nombres=personas.map(i=> i.nombre)
    personas.forEach(i =>{
        contenido+=`<tr><td>${i.nombre}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
}

function mEdades(){
    let mayores=personas.filter(i=>{return i.edad>=50}).map(j=>j.nombre)
    let adultos=personas.filter(i=>{return i.edad>=18 && i.edad<50}).map(j=>j.nombre)
    let menores=personas.filter(i=>{return i.edad<18}).map(j=>j.nombre)
    let contenido=`<br>Mayores<br>`
    mayores.forEach(i=>{
        contenido+=`${i}<br>`
    })
    contenido+=`<br>Adultos<br>`
    adultos.forEach(i=>{
        contenido+=`${i}<br>`
    })
    contenido+=`<br>Niños<br>`
    menores.forEach(i=>{
        contenido+=`${i}<br>`
    })
    document.getElementById('pantalla').innerHTML=contenido
}

