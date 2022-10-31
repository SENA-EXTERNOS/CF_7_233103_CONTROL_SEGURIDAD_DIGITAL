<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión de hardware y software

    .row.justify-content-center
      .col-lg-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img.bloque-img-1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1_tema1.png')})`}"
          )
          .bloque-texto-g__texto.bloque-text-1.p-4
              p.mt-3 El Internet y la masificación del uso de las Tecnologías de la Información y las Comunicaciones (TIC) ha incrementado los usuarios digitales en todos los sectores de la economía; cada vez se puede observar personas de diferentes edades haciendo uso de los medios digitales para comprar o vender productos, adquirir servicios o, simplemente, realizar transacciones bancarias, lo que conlleva a que puedan estar expuestas a eventuales fraudes, suplantación de identidad o robos de información.
    
    .row.mt-5
      .col-lg-12
        p Por lo anterior, es importante tener en cuenta las mejores prácticas o procedimientos de seguridad de la información o ciberseguridad, cómo los que se describen a continuación.  

    .row.mt-5
      LineaTiempoD.color-acento-botones
        .row(numero="1" titulo="Primero")
          .col-md-8.mb-4.mb-md-0
            p.text-small Optar por <em>software</em> que pueda proteger las actividades que se realizan a través de los medios digitales. Es importante obtener estos programas de sitios oficiales o que cuenten con buena reputación, esto disminuye la eventualidad que al interior de las carpetas introduzcan algún tipo de <em>software</em> dañino que se apodere de la información del equipo desde el cual se está realizando las actividades.
            
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img2_tema1.svg', alt='Texto que describa la imagen')
           

        .row(numero="2" titulo="Segundo")
          .col-md-8.mb-4.mb-md-0
            p.text-small Hacer uso de buenas prácticas descritas en la norma ISO 27000, por ejemplo, revisar constantemente la actividad del antivirus instalado en el equipo; confirmar que esté activo, con las bases de datos actualizada, y en lo posible activar la función de navegador seguro, debido a que se puede instalar una extensión del antivirus al navegador predeterminado y generar las alertas al tratar de acceder a un sitio no seguro. También, revisar la URL de la página a la cual se va a acceder, verificando que cuente con el certificado <em>Secure Sockets Layer</em> (SSL), este constituye una serie de protocolos criptográficos que suministra comunicaciones seguras a través de la red. 
            p.text-small.mt-3 Para saber si la página cuenta con este, al lado de la URL aparece un ícono de un candado o la URL termina con una ‘s’ (https en lugar de http); además, en aquellos sitios que sugieren crear cuentas para poder acceder, es importante crear contraseñas seguras que sean difíciles de descifrar. Aquí puede encontrar algunas recomendaciones:
            ul.lista-ul--color.mt-3
              li.fas.fa-check
                p Mínimo 8 caracteres alfanuméricos (a, b,1,4,7…)
              li.fas.fa-check
                p Que contenga mínimo una letra en mayúscula (A, B, C, …Z).
              li.fas.fa-check
                p Que contenga mínimo una letra en minúscula (a, b, c, z)
              li.fas.fa-check
                p Que contenga mínimo un número (0,1, 2, 3…9).
              li.fas.fa-check
                p Que contenga mínimo un carácter especial (¡°|#$%&/()=?¡*+}{}[[.,-…).

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img3_tema1.svg', alt='Texto que describa la imagen')
            
        .row(numero="3" titulo="Tercero")
          .col-md-8.mb-4.mb-md-0
            p.text-small Además del uso del <em>software</em> y buenas prácticas, es igual de importante la inversión en herramientas que permitan aumentar el nivel de seguridad. En este sentido, es posible hallar <em>hardware</em> cuyo precio y aplicaciones pueden variar; sin embargo, es importante recordar que en el tema de la seguridad no existen gastos innecesarios.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img4_tema1.svg', alt='Texto que describa la imagen')

    .row.mt-5
      .col-lg-12
        p Para implementar procedimientos asociados a la seguridad digital son necesarias algunas herramientas.
        p.mt-5 En el siguiente video se explican con detalle herramientas de <em>hardware</em> y <em>software.</em>

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  Manuales técnicos

    .row
      .col-lg-12
        figure
          img(src='@/assets/curso/temas/tema1/img5_tema1.png', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-12
        .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p Luego de identificar algunas de las herramientas, es importante conocer también los manuales, cuyo propósito fundamental es lograr parametrizar el <em>hardware y software</em> útil para los sistemas de seguridad informática, desde su configuración inicial, hasta el monitoreo en red, teniendo en cuenta las especificaciones técnicas, estándares y normas de seguridad que ayudarán al uso e implementación de las herramientas sin importar si hay rotación continua de encargados.
            p.mt-3 En la siguiente tabla se listan las herramientas con el <em>link</em> (direcciones web) de acceso a los manuales de cada herramienta descritas en el video anterior.

    .row
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-5
          p.mb-0 <b>Tabla 1.</b> <em>Lista de herramientas y manuales técnicos</em>
      .col-lg-12 
        .tabla
          table
            caption <p> <em>Ref. Creación propia del experto temático con ajustes del Diseñador instruccional </em></p>
            thead
              tr.color1-tabla
                th Herramientas
                th Tipo
                th <em>Link</em> de acesso al manual

            tbody.texto-tabla
              tr.text-small
                td Llaves U2F
                td <em>Hardware</em>
                td
                  a.anexo.mb-4.mb-lg-0(href="https://manuals.plus/es/feitian/epass-fido-nfc-multipass-security-key-manual#user_manual" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://manuals.plus/es/feitian/epass-fido-nfc-multipass-security-key-manual#user_manual 
              tr.text-small
                td <em>Firewall</em> por <em>hardware</em>
                td <em>Hardware</em>
                td
                  a.anexo.mb-4.mb-lg-0(href="https://www.manualpdf.es/cisco/mx67w/manual" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.manualpdf.es/cisco/mx67w/manual          
              tr.text-small
                td <em>Router</em> VPN - VPN <em>Box</em>
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="http://downloads.trendnet.com/TW100-BRV214/manual/SP_Web_TW100-BRV214(1.01).pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> http://downloads.trendnet.com/TW100-BRV214/manual/SP_Web_TW100-BRV214(1.01).pdf 
              tr.text-small
                td <em>hardware</em> de cifrado
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.kingston.com/datasheets/kc600_es.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.kingston.com/datasheets/kc600_es.pdf  
              tr.text-small
                td <em>Tokens</em> PKI
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://efirma.com.py/descargas/Manual%20de%20Administracion%20de%20Token%20ME.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://descargas/Manual%20de%20Administracion%20de%20Token%20ME.pdf                                
              tr.text-small
                td Acelerador SSL/TLS
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.g-sec.lu/sslaudit/documentation.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> hhttps://www.g-sec.lu/sslaudit/documentation.pdf
              tr.text-small
                td Sistema de pago seguro
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.banrep.gov.co/sites/default/files/reglamentacion/dsp_158.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.banrep.gov.co/sites/default/files/reglamentacion/dsp_158.pdf
              tr.text-small
                td Cartera digital
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.gov.co/files/Manual%20de%20Usuario_Servicio_CCD_V1.0.2.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.gov.co/files/Manual%20de%20Usuario_Servicio_CCD_V1.0.2.pdf
              tr.text-small
                td Sensores biométricos
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.solomon.cl/wp-content/uploads/2019/11/Manual-FPT-153.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.solomon.cl/wp-content/uploads/2019/11/Manual-FPT-153.pdf
              tr.text-small
                td Candado 
                td <em>Hardware</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.manuales.com.co/kensington/combination-laptop-lock/manual" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.manuales.com.co/kensington/combination-laptop-lock/manual
              tr.text-small
                td Antivirus 
                td <em>Software</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://support.kaspersky.com/KESWin/11/es-ES/KESWin-11-es-ES.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://support.kaspersky.com/KESWin/11/es-ES/KESWin-11-es-ES.pdf
              tr.text-small
                td <em>Firewall</em> 
                td <em>Software</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.academia.edu/22360402/Manual_de_Usuario_de_Pfsense_Firewall" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.academia.edu/22360402/Manual_de_Usuario_de_Pfsense_Firewall
              tr.text-small
                td <em>Proxy</em> 
                td <em>Software</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://mestreacasa.gva.es/c/document_library/get_file?folderId=500017506371&name=DLFE-1398307.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://mestreacasa.gva.es/c/document_library/get_file?folderId=500017506371&name=DLFE-1398307.pdf
              tr.text-small
                td <em>MDR – Managed Detection and Response</em> 
                td <em>Software</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.ciosummits.com/The_Definitive_Guide_to_Managed_Detection_and_Response_MDR.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.ciosummits.com/The_Definitive_Guide_to_Managed_Detection_and_Response_MDR.pdf
              tr.text-small
                td <em>Pentesting</em> 
                td <em>Software</em>
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.researchgate.net/publication/341255054_GUIA_PRACTICA_PARA_PRUEBAS_DE_PENTEST_BASADA_EN_LA_METODOLOGIA_OSSTMM_V21_Y_LA_GUIA_OWASP_V30" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.researchgate.net/publication/341255054_GUIA_PRACTICA_PARA_PRUEBAS_DE_PENTEST_BASADA_EN_LA_METODOLOGIA_OSSTMM_V21_Y_LA_GUIA_OWASP_V30
              tr.text-small
                td Formación del personal 
                td NA
                td 
                  a.anexo.mb-4.mb-lg-0(href="https://www.oas.org/es/sms/cicte/ciberseguridad/publicaciones/2016%20-%20Buenas%20Practicas%20CSIRT.pdf" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-small <b>Enlace Web.</b> https://www.oas.org/es/sms/cicte/2016%20Buenas%20Practicas%20CSIRT.pdf

    .row.cajon-texto.mt-5
      .tarjeta.cajon-color.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img6_tema1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Ya se conocen las herramientas y sus características. Es hora de  estudiar los equipos usados para la protección de sistemas.
             
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2  Configuración básica de equipos


    .row
      .col-lg-3
        figure
        img(src="@/assets/curso/temas/tema1/img7_tema1.svg", alt="alt").imagen-decorativa-2 
      .col-lg-9
          p  Los activos de información en una entidad deben ser preservados, y para ello se requiere de protección, ya sea con buenas prácticas de administración o mediante equipos que impidan el acceso no autorizado de usuarios a los repositorios de los mismos. Teniendo en cuenta lo anterior, a continuación, se describe paso a paso la configuración de algunos de los equipos más usados para la protección de los sistemas en las entidades.

    .row.mt-5
      .col-lg-12
        p <b>Llaves U2F</b>
        p.mt-5 Para el uso del <em>token</em> o llave U2F es necesario realizar dos registros y seguir estos pasos:  
    
    .row.justify-content-center.mb-4
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4
          PasosB.color-acento-botones
            .row.justify-content-center(titulo="Paso 1").pt-3
              .col-lg-9.mb-4.mb-lg-0
                h5 1er. Registro 
                p.mt-3 Verificación en Google
                ol.lista-ol
                  li 
                    span.text-bold 1. 
                    | Inicie sesión con de google Chrome en una computadora.
                  li 
                    span.text-bold 2. 
                    | Haga <em>click</em> en ‘mi cuenta’ -> ‘inicio de sesión y seguridad’ -> ‘verificación en dos pasos’. Inicie sesión con de google Chrome en una computadora.
                  li 
                    span.text-bold 3. 
                    | Haga clic en ‘agregar clave de seguridad’ y siga las instrucciones para completar el registro.
                  li 
                    span.text-bold 4. 
                    | Se le informará que inserte su llave de seguridad <em>ePass</em> FIDO® durante el proceso de registro.        
                  li 
                    span.text-bold 5. 
                    | Haga <em>click /</em> toque el botón para comprobar la presencia del usuario cuando el indicador de autenticación parpadee. Su registro se completará en un momento.

              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img8_tema1.svg', alt='')

            .row.justify-content-center(titulo="Paso 2").pt-3
              .col-lg-9.mb-4.mb-lg-0
                h5 2do. Registro
                p.mt-3 Programa de protección avanzada de Google
                ol.lista-ol
                  li 
                    span.text-bold 1. 
                    | Acceso: página de inicio de Programa de protección avanzada con un Navegador Chrome:
                  li  
                    a.anexo.mb-4.mb-lg-0(href="https://www.academia.edu/22360402/Manual_de_Usuario_de_Pfsense_Firewall" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-link.svg")
                        .anexo__texto
                          p <b>Enlace Web.</b> https://www.academia.edu/22360402/Manual_de_Usuario_de_Pfsense_Firewall
                
                  li 
                    span.text-bold 2. 
                    | Haga <em>click</em> en ‘¡empieza ya!’.
                  li 
                    span.text-bold 3. 
                    | Prepare 2 llaves de seguridad y haga <em>clic</em> en ‘tengo 2 llaves de seguridad’.
                  li 
                    span.text-bold 4. 
                    | Se le pedirá que ingrese la contraseña otra vez.
                  li 
                    span.text-bold 5. 
                    | Registre la clave de seguridad una por una y haga <em>clic</em> en ‘continuar’.
                  li 
                    span.text-bold 6. 
                    | Lea y confirme las notificaciones sobre el Programa de protección avanzada y haga <em>clic</em> en ‘encender’. Su registro se completará en un momento.                         
            
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img9_tema1.svg', alt='') 

    .row.mt-5
      .col-lg-12
        p <b>Acelerador SSL/TLS</b>
        p.mt-5 Los pasos para realizar la configuración de estos aceleradores son:


    .row.justify-content-center.mb-5.mt-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img10_tema1.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 1- <em>Scan</em>
            p.mb-0 Ingrese al <em>host</em> que va a escanear y el puerto apropiado.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img11_tema1.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 2- <em>Clear</em>
            p.mb-0 Limpie los resultados.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img12_tema1.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 3-  <em>Option</em> 
            p.mb-0 Solo mostrar conjuntos de cifrado admitidos.
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img13_tema1.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 4-  <em>Experimental</em>
            p.mb-0 Huellas dactilares de motor SSL engine (ver ‘<em>Fingerprint’</em> Experimental).

    .row.mt-5
      .col-lg-12
        p <b>Sistema de pago seguro</b>
        p.mt-5 Para realizar pagos con datáfono de forma segura, tenga en cuenta:
   
    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-primario
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Autenticación")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img14_tema1.svg", alt="alt")
              .col-lg-10    
                   p.mb-3 El ingreso al sistema de información se debe realizar a través del portal de aplicaciones SEBRA (que hace parte de la plataforma SEBRA). En este portal, el proceso de autenticación fuerte es de múltiple factor (<em>pin</em> definido por el usuario y <em>token OTP-One Time Password</em>). Luego de completar la autenticación en SEBRA, se habilita a través de este el acceso del usuario hacia el CUD mediante un mecanismo de <em>single-sign-on</em> (SSO).
          
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Control de acceso y autorización")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img15_tema1.svg", alt="alt")
              .col-lg-10   
                  p.mb-3 Existen dos fases de control de acceso: la primera ya descrita en el documento anexo a través del portal SEBRA, y la segunda se realiza al ingresar al sistema CUD a través de su integración con el S3, donde el acceso a las funciones o pantallas está controlado según los roles y perfiles que el delegado de la ‘entidad participante’ haya configurado para el usuario (únicamente se pueden ejecutar las funciones autorizadas por estos

          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Integridad y confidencialidad")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img16_tema1.svg", alt="alt")
              .col-lg-10    
                  p.mb-3 La comunicación entre los usuarios y el aplicativo se realiza usando protocolos seguros de comunicación (en este caso https con TLS versión X).

          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Observancia")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img17_tema1.svg", alt="alt")
              .col-lg-10    
                  p.mb-3 Las principales acciones de los usuarios, desde la autenticación inicial hasta la captura y aprobación de transferencias de fondos, son almacenadas en tablas de la base de datos del sistema cuya información no puede ser modificada debido a los controles de cambio de datos implementados a través de herramientas de monitoreo, alerta y protección de bases de datos (tecnologías de <em>database security</em>).
         
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Trazabilidad de las transacciones realizadas en el CUD")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img18_tema1.svg", alt="alt")
              .col-lg-10    
                  p.mb-3 Desde el momento en que se autentica en el sistema, a través del proceso de <em>single-sign-on</em> desde el portal SEBRA, el usuario es almacenado en una tabla que registra sus acciones por medio de la acción de ‘inicio de sesión’.
          
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Registro")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img19_tema1.svg", alt="alt")
              .col-lg-10    
                  p.mb-3 Los registros de operación de los servicios involucrados en el Portal SEBRA, ‘servicio de autenticación fuerte’ y S3 son conservados en una herramienta de industria que la entidad maneja para este fin.
       
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="No repudio")
            .row
              .col-lg-2
                  img(src="@/assets/curso/temas/tema1/img20_tema1.svg", alt="alt")
              .col-lg-10    
                  p.mb-3 Debido a que todas las acciones realizadas por los usuarios están completamente registradas y protegidas por los esquemas de observancia y auditoría ya descritos, las transacciones hechas a través del sistema cuentan con evidencia digital suficiente para evitar el repudio de estas.
   
    .row.mt-5
      .col-lg-12
        p <b>Sensores biométricos</b>
        p.mt-5 Es el proceso de comparar la huella que lee el equipo con las huellas almacenadas, luego la identificación de la misma o plantilla correspondiente, y, finalmente, la verificación del usuario que la registró. A continuación se describen los tipos de autenticación:

    .row.mt-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta-tarjeta--azul")
        .row(titulo="Autentificación (Verificación) 1:1")
         .col-md-12.mb-4.mb-md-0
            p De este modo, ingresa un número de ID de usuario y luego la huella dactilar correspondiente. Las huellas dactilares asociadas al número de ID serán comparadas 1-1 con la leída. Esta autenticación 1-1 tarda un período de tiempo muy breve, sin importar el número de usuarios registrados. No hay necesidad de hacer modificaciones especiales en la configuración del sistema.
        
        .row(titulo="Autentificación (Identificación) 1:")  
          .col-md-12.mb-4.mb-md-0
            p En este modo solo es necesario que el usuario ponga su huella dactilar en el sensor del equipo. Aunque el procedimiento de la autentificación es simple, este método durará un poco más de tiempo que la autentificación 1.1 si hay muchos usuarios registrados. No hay necesidad de hacer ningún ajuste especial en la configuración del sistema.

        .row(titulo="Autentificación por Clave")
          .col-md-12.mb-4.mb-md-0
            p Una clave de 1-5 dígitos de largo puede ser usada para validar una autentificación de acceso. Se puede usar este método en casos especiales, como cuando las huellas de un trabajador están muy deterioradas, o el sensor del equipo esté dañado.

    
    .row
      .tarjeta.color-primario.p-3.mb-5.mt-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img21_tema1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Configuración básica de equipos
                p.text-small Para conocer la configuración de cada uno de los equipos más usados para la protección, se le invita a ver el documento. (Anexo 1)
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1_Configuracion_basica_de_equipos.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.cajon-texto.mt-5
      .tarjeta.cajon-color.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img22_tema1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-small Luego de conocer la configuración básica de algunos equipos es momento de conocer cómo se realiza el monitoreo a los mismos.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
