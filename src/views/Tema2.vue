<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Monitoreo de equipos

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-8
        .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p.mt-5 El monitoreo continuo de los equipos que hacen parte de la red de seguridad de la información sigue unos protocolos o procedimientos descritos en la normatividad ISO 27000. Estos deben ser establecidos o personalizados de acuerdo al tipo y necesidad de la empresa. Trae consigo la operación de herramientas que protegen y controlan los activos, así como de aquellas que vigilan y gestionan los incidentes que se puedan presentar.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img1_tema2.svg', alt='Texto que describa la imagen').imagen-decorativa-3  
    .row.justify-content-around.align-items-center.mt-3
      .col-lg-2
        img(src='@/assets/curso/temas/tema2/img2_tema2.svg', alt='Texto que describa la imagen').imagen-decorativa-4
      .col-lg-10
       .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p.mt-5 El monitoreo se hace a elementos tangibles que requieren de la seguridad física que otorga diversos equipos comerciales; estos están condicionados por el buen funcionamiento de los <em>firewalls, proxy-caché,</em> redes privadas virtuales, identificadores, firmas, entre otros. De allí que las amenazas serán controladas y los ataques a los sistemas informáticos o instalaciones no causará un daño crítico, lo que permitirá que las operaciones de la entidad no se vean interrumpidas.

    .row.mt-5
      .col-lg-12
        p Se conocen dos tipos de herramientas que se deben tener en cuenta:
      .col-lg-12
        img(src='@/assets/curso/temas/tema2/img3_tema2.png', alt='Texto que describa la imagen')
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Herramientas de monitoreo y gestión

    .row.justify-content-around.align-items-center.mt-5.background-full
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img5_tema2.png', alt='Texto que describa la imagen').imagen-full-tema-1
      .col-lg-8
        p(data-aos="fade-down") El monitoreo y gestión en red es la acción que permite aumentar la seguridad, proporcionando información que todas las áreas de Tecnología de la Información, TI,  se requieren para asegurar un óptimo funcionamiento y aplicar gestión o toma de decisiones precisas en caso de presentar ataques o intentos de acceso no autorizados. Para ello, es indispensable la aplicación o ejecución de herramientas y #[em software] que detecten deficiencias o necesidades para ser abordadas de manera preventiva y no correctiva, de tal forma que se pueda mantener a salvo la información.
 
    .row
      .col-lg-12.mt-5
        p Explore las herramientas de monitoreo de red que actualmente son más efectivas y que tienen un papel protagónico al momento de medir la integridad en la infraestructura TI. 
          br
          br
          |La información descrita se tomó con referencia en la página oficial de #[em SolarWinds.]

    .row.mt-5
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="<b><em>Network Performance Monitor (NPM)</em></b>" :icono="require('@/assets/curso/temas/tema2/icon1_tema2.svg')")
          .row
            .col-md-12
              h4 Monitoreo de red
              p.mb-0 Permite tener una idea precisa del estado de la red <em>on time</em>, sin importar la cantidad de proveedores o tipos de redes.
              ul.lista-ul--color.mt-3
                li
                  i.fas.fa-check
                  p.mb-0 Suministra el historial de utilización para planificar tu capacidad.
                li
                  i.fas.fa-check
                  p.mb-0 Se generan alertas cuando algo va mal en un sistema crítico. 
                li
                  i.fas.fa-check
                  p.mb-0 Soluciones para la nube y las instalaciones siempre disponibles en un solo lugar. 
                li
                  i.fas.fa-check
                  p.mb-0 Los #[i firewalls] no se van a utilizar en exceso.
                li
                  i.fas.fa-check
                  p.mb-0 Si algún equipo falla se sabrá del incidente al instante, sin importar en donde te encuentres.
                li
                  i.fas.fa-check
                  p.mb-0 Cuenta con Monitoreo, instalación, mantenimiento y seguimiento por parte de #[i Network Operation Center] (NOC).            

        .py-4.py-md-5(titulo="<b><em>Network Traffic Analyzer (NTA)</em></b>" :icono="require('@/assets/curso/temas/tema2/icon2_tema2.svg')")
          .row
            .col-md-12
              h4 Monitoreo de tráfico en red
              p Permite que la información de la empresa se transmita sin problemas, evitando cuellos de botella y asumiendo el control total de la red. Realiza Monitoreo <em>on time</em> (tiempo real) del ancho de banda mediante el análisis de tráfico, visualizando el desempeño de cada sección analizada. 
              ul.lista-ul--color.mt-3
                li
                  i.fas.fa-check
                  p.mb-0 Monitorea el uso del ancho de banda por aplicación, protocolo y grupo de direcciones IP.
                li
                  i.fas.fa-check
                  p.mb-0 Recibe alertas si el tráfico de la aplicación de repente aumenta, disminuye o desaparece por completo. 
                li
                  i.fas.fa-check
                  p.mb-0 Analice los patrones del tráfico de red a lo largo de meses, días o minutos al explorar cualquier elemento de la red en profundidad. 
                li
                  i.fas.fa-check
                  p.mb-0 Cuenta con compatibilidad de conmutadores distribuidos de #[i VMware vSphere.]
                li
                  i.fas.fa-check
                  p.mb-0 Correlaciona datos de red de apilamiento cruzado de #[i PerfStack™.]

        .py-4.py-md-5(titulo="<b><em>Server and Application Monitor (SAM)</em></b>" :icono="require('@/assets/curso/temas/tema2/icon3_tema2.svg')")
          .row
            .col-md-12
              h4 Monitoreo de aplicaciones
              p <em>Software</em> que monitorea los sistemas informáticos, aplicaciones y servidores. Debido a su versatilidad, permite la puesta en marcha en cuestión de minutos con infinitas posibilidades de personalización.
              ul.lista-ul--color.mt-3
                li
                  i.fas.fa-check
                  p.mb-0 Monitorea todo tu entorno de servidores locales, nube o aplicaciones híbridas y tu infraestructura con una sola herramienta.
                li
                  i.fas.fa-check
                  p.mb-0 Más de 1200 plantillas de monitoreo de infraestructuras, sistemas y aplicaciones.
                li
                  i.fas.fa-check
                  p.mb-0 Monitoreo integral de las aplicaciones de #[i Microsoft,] los sistemas, el hipervisor, y los productos #[i IaaS, PaaS y SaaS.]
                li
                  i.fas.fa-check
                  p.mb-0 Visualiza y asigna las relaciones basadas en comunicaciones dinámicas entre aplicaciones y servidores para detectar problemas de red que disminuyen la velocidad de tus aplicaciones.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Herramientas de protección y control


    .row.justify-content-center
      .col-lg-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img7_tema2.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 En el génesis de la era digital los ataques cibernéticos eran técnicamente poco sofisticados, pero con el paso del tiempo, se han desarrollado métodos más complejos, que buscan ‘agujeros negros’ en los sistemas operativos. Estos existen en todos y hacen referencia a errores en la configuración. Para que un sistema esté completamente protegido, requiere de la implementación y buen uso de una mezcla de diversas herramientas existentes en el mercado, ya que no existe ninguna que proteja al 100%.

    .row.mt-5
      .col-lg-12 
        p A continuación, se detallan las herramientas más usadas para la protección y control del sistema que almacena la información y la red de una empresa:

    .row.mt-5.justify-content-center
      .col-lg-10.bg-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta--azul")
          .row(titulo="<em>Next Generation Firewall (NGF)</em>")
            .col-md-4.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/img8_tema2.png', alt='Texto que describa la imagen')       
            .col-md-8
              p Sistema, o conjunto de sistemas, que se sitúan entre 2 redes y establecen una política de seguridad, que consiste en proteger una red privada de otra red poco confiable, como por ejemplo el internet. Acción: bloquear acceso a redes no confiables mediante filtros previamente establecidos por el administrador de los sistemas <em>(Microsoft Ignite, s.f.)</em> 

          .row(titulo="<em>Proxy</em>-cache")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img9_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Servidor situado entre el del usuario y otra red externa (internet) actuando como protector al separar las redes y acelerar el acceso a páginas web. Acción: restringir los contenidos de diversas páginas como, por ejemplo: contenido para adultos, <em>pop up,</em> ventanas emergentes. <em>(Microsoft Ignite, s.f.)</em>
          
          .row(titulo="Filtrado de contenidos")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img10_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Sistema automatizado para el procesamiento de grandes volúmenes de datos aplicando acciones a los contenidos que cumplen criterios específicos.	 Acción: controlar el contenido que se pueda desplegar en las páginas visitadas. <em>(Microsoft Ignite, s.f.)</em>

          .row(titulo="<em>Access Control List</em> ACL")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img11_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Grupo de reglas establecidas de acuerdo a preferencia en el tráfico de redes. Las reglas incluyen el direccionamiento IP de origen y destino, el puerto del paquete. Acción: permitir o denegar el tráfico que ingresa o sale de una red. <em>(Microsoft Ignite, s.f.)</em>

          .row(titulo="Redes Privadas Virtuales VPN")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img12_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Es una conexión cifrada a Internet que se hace a través de un dispositivo a una red (por ejemplo, internet). Acción: permitir que los usuarios trabajen de forma remota y que se espíe el tráfico de la red por personas no autorizadas. <em>(Microsoft Ignite, s.f.)</em>

          .row(titulo="<em>Intrusion Detection System</em> IDS")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img13_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Aplicación que detecta el acceso no autorizado a un ordenador o a una red. Acción: monitorear el tráfico entrante de una red para ser comparado con una base de datos en continua actualización, en donde se encuentra una la lista de diversas amenazas. <em>(Microsoft Ignite, s.f.)</em>

          .row(titulo="<em>Intrusion Prevention System</em> IPS")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img14_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Sistema con actividad preventiva, ya que protege los sistemas de ataques e intrusiones.	 Acción: analizar <em>on time</em> todas las conexiones y protocolos para determinar si se produce o se va a producir un incidente. <em>(Microsoft Ignite, s.f.)</em>

          .row(titulo="<em>Web Application Firewall</em> WAF")
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/img15_tema2.png', alt='Texto que describa la imagen')       

            .col-md-8.mb-4.mb-md-0
              p Sistema que actúa como intermediario entre usuarios y aplicaciones web, que se rigen por un conjunto de reglas previamente definidas. Acción: controlar las comunicaciones HTTP (solicitud-respuesta) y analizarlas antes de conectar con los usuarios o aplicaciones externas. <em>(Microsoft Ignite, s.f.)</em>








</template>

<script>
export default {
  name: 'Tema2',
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
