¿Has aplicado los principios SOLID? 
Si

¿Cuánto tiempo has estado pensando y escribiendo los tests del código? Si hubieras tenido mucho más tiempo... ¿que habrías añadido?

 Aproximandamente 15 minutos, realice unas prueba basica que consiste en:
   - Validar que el listado en un principio sea un array vacio
   - Luego realiza la carga/consumo de datos, del API que se provee
   - Por ultimo se verifica que el array ya no este vacio y contenga datos

   Se pueden hacer muchas pruebas, para ejcutarlas seria con : npm runtest:unit

¿Por qué motivo has elegido el lenguaje que has usado para este test? 

Por la rapidez del desarrollo y por que tengo mas experiencia 

¿Cómo mejorarías la API que has usado? 

Mejoraría la respuesta de API mejoraria la esctructura en como se muestra la información y tambien mandaria informacion mas particular , por que considero que se esta mandando muy general. es decir mejoraria el JSON retornando exclusivamente los datos necesarios para solventar el requerimiento

¿Qué framework y lenguaje crees que se ha usado para exponer esta API REST? Consejo: En el protocolo HTTP viaja mucha información 

Se ha utilizado express para exponer esta API REST, se creo un back en node y utilizando express para servir la informacion 

¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa conclusión? 

Si soporta peticiones, ya que tiene protocolo HTTPS y adicional,es necesario recinir datos por metodos como (GET, POST , PUT O DELETE).

¿En qué infraestructura crees que está alojada la API? ¿Por qué crees que hemos tomado esa decisión?

 La API está alojada en  amazon "Amazon Web Services". Considero que se  ha tomado la decisión de alojarla aquí porque amazon cobra por lo que consumes, y tambien por la opción de escalabilidad.

¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna vez has tenido que hacerlo? 

cuando una aplicacion esta en produccion y ocurre un  problema normalmente  buscaría en la carpeta de logs del sistema  en busca de lo que ha fallado. me gusta tambien instalar software de terceros para verificar el rendimiento tanto del software como de infraestructura por ejemplo Jmeter.


Descríbete a ti mismo usando JSON.

    "nombre":"Julio",
    "apellidos":"Vásquez Díaz",
    "edad":27,
    "estatura":1.70,
    "celular": "+52 2288473729",
    "cualidades":[
       "Resposabilidad",
       "Honestidad",
       "Amabilidad",
       "Empatia",
       "Proactivo",
       "Humildad",
       "Perseverancia",
       "Comunicacion",
       "Bondad",
       "Apacibilidad",
       "Paciencia"
    ],
    "hoobies":[
        "Jugar Futbol",
        "Salir con amigos",
        "Hacer ejercicio",
        "Viajar"
     ],
    "formacion":[
       {
          "titulo":"Tecnico en Informatica",
          "institucion":"CBTIS 165 ",
          "ciudad":"Xalapa",
          "estado":"Veracruz",
          "inicio":"2010",
          "fin":"2013"
       },
       {
        "titulo":"Ingenieria en Sistemas Computacionales",
        "institucion":"Instituto Superior Tecnologico de Xalapa",
        "ciudad":"Xalapa",
        "estado":"Veracruz",
        "inicio":"2013",
        "fin":"2017"
       }
    ],
    "lenguajes_programacion":[
       "JavaScript",
       "PHP",
       "C#",
       "JAVA",
       "Python"
    ],
    "frameworks":[
       "VUE",
       "Laravel",
       "React",
       "Angular"
    ]
 }


 NOTAS ADICIONALES

 PARA CORRER EL PROYECTO

 FRONT

 npm install
 npm run dev


 BACK

 composer i
 crear una base de datos llamada "proveedores"
 correr migraciones comando "php artisan migrate:fresh --seed"
 correr comando "php artisan serve"