<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Respuesta a incidentes

    .row
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1_tema3.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las brechas de seguridad pueden causar pérdida de datos, paralizar la operatividad de una empresa, ocasionar la pérdida de confianza por parte de los usuarios, e, incluso, llevar a multas y problemas regulatorios. Para evitar todo lo anterior existe la respuesta a incidentes, la cual es la reacción que se tiene ante posibles amenazas de TI, vulnerabilidades de seguridad y/o tiempo en que el servidor esté inactivo. Esto se lleva a cabo a través de la implementación de herramientas y controles básicos, la validación de su funcionalidad y la verificación del cumplimiento de las cadenas de custodia, según procedimientos técnicos de la política de seguridad de la organización.

    .row.mb-5
      .col-lg-12
        p En el siguiente gráfico se describen las acciones necesarias para responder de forma efectiva a los incidentes. 
      .col-lg-12
        p Dentro de las acciones que se deben tomar se destacan:  

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img2_tema3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-primario.p-3(x="53%" y="25%" numero="")
            .h5.mb-2 Monitorear y verificar:
            p Realizar monitoreo y verificación de los elementos de control con el fin de detectar un posible incidente de seguridad de la información.

          .tarjeta.color-primario.p-3(x="75%" y="32%" numero="")
            .h5.mb-2 Copias de seguridad:
            p Generar copias de seguridad de los tipos incremental, diferencial y total.

          .tarjeta.color-primario.p-3(x="87%" y="51%" numero="")
            .h5.mb-2 Plataformas de auditorías de <em>logs</em>:
            p Implementar plataformas de auditorías de <em>logs</em> nist sp 800-92, correlacionadores de eventos, revisión de patrones de ataque, metodologías, revisión de archivos de <em>logs</em>.    
 
          .tarjeta.color-primario.p-3(x="84%" y="74%" numero="")
            .h5.mb-2 Clasificación de los ataques:
            p Clasificación de los ataques: clasificar los ataques de acuerdo a su gravedad
            ul
              li
                i.fas.fa-check
                | Gravedad 1: incidente crítico con elevada repercusión.
              li
                i.fas.fa-check
                | Gravedad 2: incidente grave con considerable repercusión. 
              li
                i.fas.fa-check
                | Gravedad 3: incidente leve de baja repercusión.
 
          .tarjeta.color-primario.p-3(x="66%" y="89%" numero="")
            .h5.mb-2 Documentar las incidencias:
            p Se deben documentar los incidentes a través de un lenguaje que toda la organización pueda comprender.
 
          .tarjeta.color-primario.p-3(x="42%" y="89%" numero="")
            .h5.mb-2 Informar a los clientes:
            p Comunicarse con los clientes ante cualquier eventualidad de riesgo.

          .tarjeta.color-primario.p-3(x="22%" y="75%" numero="")
            .h5.mb-2 Notificar a tiempo:
            p Entregar información real y transparente a los clientes que han sido vulnerados. 

          .tarjeta.color-primario.p-3(x="18%" y="52%" numero="")
            .h5.mb-2 Marco de trabajo:
            p Establecer un manual de trabajo con funciones definidas para dar respuesta a incidentes generados.           
       
          .tarjeta.color-primario.p-3(x="29%" y="32%" numero="")
            .h5.mb-2 Solución de incidentes:
            p Resolver el incidente y comunicar las acciones tomadas y los niveles de gravedad al que fue expuesta la información.


    p.mb-5 Es así, como con las acciones descritas, las empresas pueden sobrellevar estos incidentes, asumiendo los desafíos de la siguiente manera:

    .row.mb-5
      LineaTiempoD.color-acento-botones
        .row(numero="1" titulo="Con procedimientos de respuesta a incidentes")
          .col-md-8.mb-4.mb-md-0
            p.text-small Creando los procedimientos de respuesta a incidentes, que sean aplicables, medibles, cíclicos y propios, en lugar de subcontratar auditorías externas.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img3_tema3.png', alt='Texto que describa la imagen')
           

        .row(numero="2" titulo="Tener como prioridad")
          .col-md-8.mb-4.mb-md-0
            p.text-small Comunicar, coordinar y colaborar en todos los aspectos que se requiera ante posibles vulnerabilidades y riesgos latentes.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img4_tema3.png', alt='Texto que describa la imagen')
            
        .row(numero="3" titulo="Usar herramientas tecnológicas")
          .col-md-8.mb-4.mb-md-0
            p.text-small Hacer uso de las herramientas tecnológicas confiables y posicionadas en el mercado para que el trabajo del equipo tenga respuestas oportunas y preventivas, en lugar de reactivas y tardías.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema3/img5_tema3.png', alt='Texto que describa la imagen')


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Validación de controles de seguridad

    .row.justify-content-around.align-items-center.mb-3
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/img7_tema3.png', alt='Texto que describa la imagen').imagen-decorativa-5 

      .col-lg-8  
        .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p El propósito de la seguridad informática es proteger la información de las amenazas latentes y sofisticadas que en la actualidad circulan por la red, sin embargo, como ya se sabe, todas las empresas están expuestas a ataques, y la finalidad es disminuir las consecuencias al menor grado posible.
              br
              br
              |Al validar los controles de seguridad se busca proteger y resguardar los activos digitales, sistemas, equipos y datos relacionados con el uso de las TI de los accesos, o intentos de acceso, no autorizados, que puedan causar daños irreparables o corrupción de los archivos. 

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-2
        img(src='@/assets/curso/temas/tema3/img8_tema3.svg', alt='Texto que describa la imagen').imagen-decorativa-9

      .col-lg-10 
        p La seguridad de la información debe procurar preservar y garantizar el acceso solo a personas autorizadas, que cuenten con privilegios de consulta y modificación establecidos; mantener la integridad y disponibilidad de los datos, salvaguardando su exactitud, los medios de procesamiento y acceso permanente. 
        <br>
        p Para que esto se cumpla, se requiere de controles de seguridad, como son:
    
    .row.mb-5
      .col-lg-4
        img( height="88%" src='@/assets/curso/temas/tema3/img9_tema3.svg', alt='Texto que describa la imagen') 

      .col-lg-8
        .row.justify-content-center.mb-5.bg-12 
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon1_tema3.svg", alt="alt").img100
              .col
                h5 Políticas y planes de seguridad TI.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon2_tema3.svg", alt="alt").img100
              .col
                h5 Controlar las operaciones informáticas.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon3_tema3.svg", alt="alt").img100
              .col
                h5 Controlar la gestión de seguridad personal.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon4_tema3.svg", alt="alt").img100
              .col
                h5 Controlar la seguridad del usuario final.   
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon5_tema3.svg", alt="alt").img100
              .col
                h5 Definir y asignar perfiles de acceso y contraseñas.                
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon6_tema3.svg", alt="alt").img100
              .col
                h5 Validar diferentes métodos de validación personal.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon7_tema3.svg", alt="alt").img100
              .col
                h5 Definición y asignación de roles y funciones en la organización.                
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon8_tema3.svg", alt="alt").img100
              .col
                h5 Establecer y monitorear sucesos o eventualidades, para definir un patrón de posible ataque y documentar las formas de contrarrestarlo.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema3/icon9_tema3.svg", alt="alt").img100
              .col
                h5 Definir y aplicar las Políticas de Seguridad de TI.

    .row.mb-5
      .col-lg-12
        p De la guía No. 8 del Ministerio de Tecnologías de la Información y las Comunicaciones, MinTic, ‘Controles de Seguridad y Privacidad de la Información’ (2022) se puede extraer el formato guía de controles estructurados de acuerdo a la tabla que se muestra en la imagen:

    .row.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          br
          span.fst-italic Controles de seguridad y privacidad de la información

    .row.mb-5
      .tabla-a.color-acento-contenido 
        table
          caption Fuente Ministerio de Tecnologías de la Información y las Comunicaciones (2022)
          thead
            tr.text-center
              <th colspan="4">Política general </th>

          tbody
            tr.text-center
              td Núm.
              td Nombre
              td Seleccionado/ excepción
              td Descripción/ Justificación
            tr.text-center
              td 
              td Nombre
              td Control
              td 
            tr.text-center
              td 
              td ...
              td 
              td  

    .row.mb-5
      .col-lg-12
        p Cada campo de la tabla 2 se define a continuación:


    .row.mb-5.bg-6
      .tarjeta.tarjeta--azul.p-4
        SlyderA(tipo="b")
          .row
            .col-md-12.mb-4.mb-md-0
              p <b>Núm.</b>
              p.mb-3 Este campo identifica cada uno de los controles correspondientes al Anexo A de la norma NTC: ISO/IEC 27001.
              figure
                img(src='@/assets/curso/temas/tema3/table1_tema3.png', alt='Texto que describa la imagen')

          .row
            .col-md-12.mb-4.mb-md-0
              p <b>Nombre</b>
              p.mb-3 Este campo hace referencia al nombre del control que se debe aplicar para dar cumplimiento a la política definida.
              figure
                img(src='@/assets/curso/temas/tema3/table2_tema3.png', alt='Texto que describa la imagen')

          .row
            .col-md-12.mb-4.mb-md-0
              p <b>Control</b>
              p.mb-3 Este campo describe el control que se debe implementar con el fin de dar cumplimiento a la política definida.
              figure
                img(src='@/assets/curso/temas/tema3/table3_tema3.png', alt='Texto que describa la imagen')

          .row
            .col-md-12.mb-4.mb-md-0
              p <b>Seleccionado / Excepción</b>
              p.mb-3 El listado de controles además debe ser utilizado para la generación de la declaración de aplicabilidad, donde cada uno de los controles es justificado, tanto si se implementa, como si se excluye de hacerlo, lo cual ayuda a que la entidad tenga documentado y de fácil acceso el inventario de controles.
              figure
                img(src='@/assets/curso/temas/tema3/table4_tema3.png', alt='Texto que describa la imagen')      

          .row
            .col-md-12.mb-4.mb-md-0
              p <b>Descripción / Justificación</b>
              p.mb-3 El listado de controles cuenta con la descripción de cada uno. Adicionalmente, es posible utilizarlo para la generación de la declaración de aplicabilidad, donde son justificados, bien sea porque se implementen o no. 
              figure
                img(src='@/assets/curso/temas/tema3/table5_tema3.png', alt='Texto que describa la imagen')

    .row.mb-5.col-lg-10.parraf
      .tarjeta.color-primario.p-3.mb-5.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img11_tema3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Controles de Seguridad y Privacidad de la Información
                p.text-small Para ampliar la información sobre Controles de Seguridad y Privacidad de la Información, por favor remítase al Anexo 2 págs. 9-17 (Guía No. 8 - Controles de Seguridad y Privacidad de la Información).
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_Controles de_Seguridad_y_Privacidad_de_la_Informacion_MicTic.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.cajon-texto.mb-3
      .tarjeta.cajon-color.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img12_tema3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Para continuar con el estudio de los elementos para dar respuesta a incidentes, es hora de ver las cadenas de custodia. 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Cadenas de custodia

    .row.mb-3
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/img13_tema3.svg', alt='Texto que describa la imagen').imagen-decorativa-6
      .col-lg-9
        p Las cadenas de custodia en los sistemas de seguridad de la información permiten la gestión oportuna, ordenada y efectiva de los incidentes y eventualidades que puedan llegar afectar la transparencia, integridad, confidencialidad, y disponibilidad de los activos de información en las empresas, aplicando acciones preventivas y correctivas que minimicen los impactos al nivel más bajo posible. Los pasos para diseñar una cadena de custodia son:  

    .row.mb-5
      .bloque-texto.bg-4
        .row
          .col-4
            figure
              img(src="@/assets/curso/temas/tema3/img14_tema3.png").imagen-full-tema-1
          .col-8
            p 
              ul.lista-ul--color.mb-3
                li
                  i.fas.fa-check
                  | Identificación, registro y clasificación.
                li
                  i.fas.fa-check
                  | Control y restauración.
                li       
                  i.fas.fa-check   
                  | Erradicación, análisis e investigación.
                li
                  i.fas.fa-check            
                  | Cierre y activación.
 
    .row.mb-5
      .col-lg-12
        p En la Tabla 3 se detalla cómo actúa en cada paso la cadena de custodia. 

    .row.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          br
          span.fst-italic Pasos para diseñar una cadena de custodia

    .row.mb-5
      .tabla-a.color-acento-contenido 
        table
          thead
            tr.text-center
              th Pasos
              th Actúa sobre
          tbody
            tr.text-center
              td Identificación, registro y clasificación 
              td Incidente o evento de seguridad

            tr.text-center
              td Control y restauración
              td Efectos negativos y daños

            tr.text-center
              td Erradicación, análisis e investigación
              td Evento, incidente y causas
 
            tr.text-center
              td Cierre y activación
              td Incidente y procedimiento para la administración del plan de mejoramiento

    .row.mb-5.col-lg-10.parraf
      .col-lg-3
        img(src='@/assets/curso/temas/tema3/img15_tema3.svg', alt='Texto que describa la imagen').imagen-decorativa-7        
      .col-lg-9
        p Estas acciones son llevadas a cabo por el equipo conformado para dar respuesta a incidentes de la SI (ERISI). Este, es el responsable de accionar las respuestas en el momento de presentarse eventos o incidentes que puedan afectar la transparencia, confidencialidad, integridad y disponibilidad de los activos digitales. El ERISI puede estar conformado por los siguientes perfiles:  
           
    .row.mb-5.col-lg-10.parraf
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img16_tema3.png')})`}")
          .bloque-texto-g__texto.p-4
              p 
              ul.lista-ul--color.mb-3
                li.fas.fa-check
                  <p>Profesionales con amplio conocimiento en <em>hardware, software</em> y/o redes.</p>
                li.fas.fa-check
                  <p>Profesionales de Bases de Datos.</p> 
                li.fas.fa-check          
                  <p>Líderes de sistemas de información.</p>
                li.fas.fa-check          
                  <p>Representantes misionales.</p>
                li.fas.fa-check          
                  <p>Representantes del área directiva de la Entidad.</p>                  

    .row.mb-5
      .col-lg-12
        p EL grupo ERISI clasifica los incidentes y/o eventos de seguridad de acuerdo a la siguiente escala:

    .row.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          br
          span.fst-italic Clasificación de incidentes y/o eventos de seguridad

    .row.mb-5
      .tabla-a.color-acento-contenido 
        table
          thead
            tr.text-center
              th Nivel
              th Valor del activo
              th Tiempo de atención 

          tbody
            tr.text-center
              td Extremo 
              td 17
              td 1 Hora

            tr.text-center
              td Muy Alto 
              td 15 - 16
              td 6 Hora

            tr.text-center
              td Alto 
              td 12 - 14
              td 12 Hora
 
            tr.text-center
              td Medio 
              td 9 - 11
              td 2 Días
              
            tr.text-center
              td Bajo / Despreciable 
              td < 9
              td 1 Semana 

    .row.mb-5.col-lg-10.parraf
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/img17_tema3.png', alt='Texto que describa la imagen').imagen-decorativa-8 

      .col-lg-8  
        .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p Para que el equipo ERISI establezca la prioridad o el tiempo de atención del incidente, es indispensable que se remitan al inventario de activos de información y en la columna ‘valor del activo’ y comprobar dicha información; solo así, es posible determinar la prioridad de atención del evento.

    .row.mb-5.col-lg-10.parraf
      .tarjeta.color-primario.p-3.mb-5.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img18_tema3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Guía para gestionar incidentes de SI_Función Pública
                p.text-small Para ampliar la información sobre cadenas de custodia, por favor remítase al Anexo 3_Guia para gestionar incidentes de SI_Funcion Pública.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_3_Guia_para_gestionar_incidentes_de_SI_Funcion_Publica.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.cajon-texto.mb-3
      .tarjeta.cajon-color.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img19_tema3.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


//beto
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
