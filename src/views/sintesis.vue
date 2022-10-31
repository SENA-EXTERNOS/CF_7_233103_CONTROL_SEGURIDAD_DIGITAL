<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-botones.mb-3.mt-5
        p.mb-0 <b>Control de la seguridad digital</b> 
        p.mb-0 Síntesis: Ciberseguridad, herramientas de monitoreo y control
  
    .row
      .col-lg-12.mt-5
        p Como refuerzo a continuación, encontrará la síntesis del componente formativo de una forma gráfica, así podrá repasar las diferentes temáticas tratadas en el mismo.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
