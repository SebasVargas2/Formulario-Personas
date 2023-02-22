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
agregar.addEventListener('click',agg)

const nombres=document.getElementById('nombres')
nombres.addEventListener('click',names)

const edades=document.getElementById('edades')
edades.addEventListener('click',ages)

const porcentaje=document.getElementById('porcentaje')
porcentaje.addEventListener('click',porcent)

const mees=document.getElementById('mes')
mees.addEventListener('click',mess)


function agg(){
    let name=nombre.value
    let age=edad.value
    let gender=genero.value
    let date=fecha.value

    if (name==''|| age=='' || gender=='' || date==''){
        alert('Digite todos los campos')

        
    }else{
        date=date.split('-')
        let day=date[2]
        let month=date[1]
        let year=date[0]

        personas.push({nombre:name,
            edad:age,
            genero:gender,
            fecha:{dia:day,
                mes:month,
                año:year}})
            }
        
        nombre.value=''
        edad.value=''
        genero.value=''
        fecha.value=''
        
}

function names(){
    let contenido=''
    contenido=`<table><th>Names</th>`
    personas.forEach(i=>{
        contenido+=`<tr><td>${i.nombre}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
}

function ages(){
    let mayores=personas.filter(i=>{return i.edad>=50}).map(j=>j.nombre)
    let adultos=personas.filter(i=>{return i.edad>=18 && i.edad<50}).map(j=>j.nombre)
    let menores=personas.filter(i=>{return i.edad<18}).map(j=>j.nombre)

    let contenido=''
    contenido=`<table><th>Ages</th>`
    contenido+=`<tr><td>Mayores</td></tr>`
    contenido+=`<tr><td>${mayores}</td></tr>`
    contenido+=`<tr><td></td></tr>`
    contenido+=`<tr><td>Adultos</td></tr>`
    contenido+=`<tr><td>${adultos}</td></tr>`
    contenido+=`<tr><td></td></tr>`
    contenido+=`<tr><td>Menores</td></tr>`
    contenido+=`<tr><td>${menores}</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
}

function porcent(){
    let man=personas.filter(i=>{return i.genero=="m"})
    let woman=personas.filter(i=>{return i.genero=="f"})
    
    let op1=(100/personas.length)*man.length
    let op2=(100/personas.length)*woman.length

    let contenido=''
    contenido=`<table><th>Porcentaje Generos</th>`
    contenido+=`<tr><th>Hombres</th><td></td></tr>`
    contenido+=`<tr><td>${op1}%</td></tr>`
    contenido+=`<tr><td>Mujeres</td></tr>`
    contenido+=`<tr><td>${op2}%</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
}

function mess(){
    let month=prompt(`indique el mes que desee consultar
    1.Enero
    2.Febrero
    3.Marzo
    4.Abril
    5.Mayo
    6.Junio
    7.Julio
    8.Agosto
    9.Septiembre
    10.Octubre
    11.Noviembre
    12.Diciembre` )
    
    switch (month){
        case 1:
            let Mes=personas.filter(i => i.fecha.mes)
            console.log(Mes)
    }

}

