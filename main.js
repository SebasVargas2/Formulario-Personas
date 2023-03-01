let flag=false
let personas=[
    {nombre:'Tasha',edad:'21',genero:'f',fecha:{dia:01,mes:09,anio:2002}},
    {nombre:'Tyrone',edad:'19',genero:'m',fecha:{dia:01,mes:07,anio:2004}},
    {nombre:'Uniqua',edad:'60',genero:'f',fecha:{dia:01,mes:04,anio:1963}},
    {nombre:'Austin',edad:'13',genero:'m',fecha:{dia:01,mes:02,anio:2009}},
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

const reset=document.getElementById('reset')
reset.addEventListener('click',reseteo)

const eliminar=document.getElementById('eliminar')
eliminar.addEventListener('click',elimina)

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
    if (personas==''){
        contenido+=`Lista vacia, ingrese las personas que desea visualizar`
    }else{
        contenido=`<table><th>Names</th>`
        personas.forEach(i=>{
            contenido+=`<tr><td>${i.nombre}</td></tr>`
        })
        contenido+=`</table>`
    }
    document.getElementById('pantalla').innerHTML=contenido
}

function ages(){
    let mayores=personas.filter(i=>{return i.edad>=50}).map(j=>j.nombre)
    let adultos=personas.filter(i=>{return i.edad>=18 && i.edad<50}).map(j=>j.nombre)
    let menores=personas.filter(i=>{return i.edad<18}).map(j=>j.nombre)

    let contenido=''
    if (personas==''){
        contenido+=`Lista vacia, ingrese las personas que desea visualizar`
    }else{
        contenido+=`<table style="border: 1px solid black;"><tr><th>Mayores: </th>`
        contenido+=`<td>${mayores}</td></tr>`
        contenido+=`<tr><th>Adultos: </th>`
        contenido+=`<td>${adultos}</td></tr>`
        contenido+=`<tr><th>Menores: </th>`
        contenido+=`<td>${menores}</td></tr>`
        contenido+=`</table>`
    }
    document.getElementById('pantalla').innerHTML=contenido
}

function porcent(){
    let man=personas.filter(i=>{return i.genero=="m"})
    let woman=personas.filter(i=>{return i.genero=="f"})
    
    let op1=(100/personas.length)*man.length
    let op2=(100/personas.length)*woman.length

    let contenido=''

    if (personas==''){
        contenido+=`Lista vacia, ingrese las personas que desea visualizar`
    }else{
        contenido+=`<table style="border: 1px solid black;">`
        contenido+=`<td><th>Porcentaje</th></td>`
        contenido+=`<tr><th>Hombres</th>`
        contenido+=`<td>${op1.toFixed(2)}%</td></tr>`
        contenido+=`<tr><th>Mujeres</th>`
        contenido+=`<td>${op2.toFixed(2)}%</td></tr>`
        contenido+=`</table>`
    }
    document.getElementById('pantalla').innerHTML=contenido
}

function mess(){
    if (personas==''){
        let contenido3=`Lista vacia, ingrese las personas que desea visualizar`
        document.getElementById('pantalla').innerHTML=contenido3
    }else{
        let month=parseInt(prompt(`indique el mes que desee consultar
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
        12.Diciembre` ))
        
        switch (month){
            case 1:
                var contenido2=''
                let Mes1=personas.filter(i => i.fecha.mes==01).map(j=>j.nombre)
                if (Mes1==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Enero: </th>`
                    contenido2+=`<td>${Mes1}</td></tr>`
                    contenido2+=`</table>`
                }
                    
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 2:
                contenido2=''
                let Mes2=personas.filter(i => i.fecha.mes==02).map(j=>j.nombre)
                if (Mes2==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Febero: </th>`
                    contenido2+=`<td>${Mes2}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 3:
                contenido2=''
                let Mes3=personas.filter(i => i.fecha.mes==03).map(j=>j.nombre)
                if (Mes3==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Marzo: </th>`
                    contenido2+=`<td>${Mes3}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 4:
                contenido2=''
                let Mes4=personas.filter(i => i.fecha.mes==04).map(j=>j.nombre)
                if (Mes4==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Abril: </th>`
                    contenido2+=`<td>${Mes4}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 5:
                contenido2=''
                let Mes5=personas.filter(i => i.fecha.mes==05).map(j=>j.nombre)
                if (Mes5==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{

                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Mayo: </th>`
                    contenido2+=`<td>${Mes5}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 6:
                contenido2=''
                let Mes6=personas.filter(i => i.fecha.mes==06).map(j=>j.nombre)
                if (Mes6==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Junio: </th>`
                    contenido2+=`<td>${Mes6}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 7:
                contenido2=''
                let Mes7=personas.filter(i => i.fecha.mes==07).map(j=>j.nombre)
                if (Mes7==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Julio: </th>`
                    contenido2+=`<td>${Mes7}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 8:
                contenido2=''
                let Mes8=personas.filter(i => i.fecha.mes==08).map(j=>j.nombre)
                if (Mes8==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Agosto: </th>`
                    contenido2+=`<td>${Mes8}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 9:
                contenido2=''
                let Mes9=personas.filter(i => i.fecha.mes==09).map(j=>j.nombre)
                if (Mes9==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Septiembre: </th>`
                    contenido2+=`<td>${Mes9}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 10:
                contenido2=''
                let Mes10=personas.filter(i => i.fecha.mes==10).map(j=>j.nombre)
                if (Mes10==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Octubre: </th>`
                    contenido2+=`<td>${Mes10}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 11:
                contenido2=''
                let Mes11=personas.filter(i => i.fecha.mes==11).map(j=>j.nombre)
                if (Mes11==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Noviembre: </th>`
                    contenido2+=`<td>${Mes11}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            case 12:
                contenido2=''
                let Mes12=personas.filter(i => i.fecha.mes==12).map(j=>j.nombre)
                if (Mes11==''){
                    contenido2+=`Nadie en la lista nacio este mes.`
                }else{
                    contenido2+=`<table>`
                    contenido2+=`<tr><th>Diciembre: </th>`
                    contenido2+=`<td>${Mes12}</td></tr>`
                    contenido2+=`</table>`
                }
                document.getElementById('pantalla').innerHTML=contenido2
                break;
            default:
                alert('Digite un numero correcto')
            }
        }
    }
function reseteo(){
    personas=[]
}

function elimina(){
    let seFue=prompt('Digite el nombre de la persona a eliminar como fue ingresado')
    personas.forEach(i =>{
        if (i.nombre==seFue){
            let index=personas.indexOf(i)
            personas.splice(index,1)
            alert('Esta persona se ha eliminado con exito')
            flag=true
        }
    })
    if (flag==false){
        alert('La persona no se encuenta en la lista')
    }
}

