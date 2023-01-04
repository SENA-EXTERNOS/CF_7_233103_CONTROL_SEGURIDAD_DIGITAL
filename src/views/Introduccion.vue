<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-around.align-items-center.mt-3
      .col-lg-12
        .bloque-texto-b.color-primario-intro.p-4
          .bloque-texto-b__texto
            p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará las herramientas para el control de incidentes en ciberseguridad, sin que se profundice en el impacto de estos. De este modo, el enfoque se centrará principalmente en la parametrización de hardware y software, seguridad en sistemas operativos, mecanismos como la criptografía, seguridad perimetral y plataformas de auditorías. Por último, se revisará de forma general la detección de incidentes de seguridad.
      
    .row.justify-content-around.align-items-center.mt-3
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/introduccion/img1_introduccion.svg', alt='Texto que describa la imagen').imagen-decorativa-1  
      .col-lg-7
          p.mt-5 Es necesario implementar y controlar las prácticas de seguridad digital en las organizaciones con apoyo de herramientas que logren minimizar los efectos de los incidentes. Las instituciones en la actualidad están expuestas a vulnerabilidades que pueden ocasionar pérdida de información, daños en equipos de la red o suplantación, lo cual puede generar desconfianza, mal funcionamiento o cierre de la entidad. No se puede asegurar que existe una empresa en el mundo con todos sus procesos completamente protegidos.

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-12
        .bloque-texto-b.color-primario-intro2.p-4
          .bloque-texto-b__texto
            p.mt-3 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
