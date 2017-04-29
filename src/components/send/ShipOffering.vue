<template>
  <div class="ship_offering__form">
    <div class="ship_offering__form__address">
      <input type="text" class="text-input text-input--transparent" placeholder="To: " value="">
    </div>
    <div class="ship_offering__form__datetime">
      <input type="text" class="text-input text-input--transparent" placeholder="Datetime:" value="">
    </div>
    <div class="ship_offering__form__from_where">
      <input type="text" class="text-input text-input--transparent" placeholder="From where:" value="">
    </div>
    <div class="ship_offering__form__to_where">
      <input type="text" class="text-input text-input--transparent" placeholder="To where:" value="">
    </div>
    <div class="ship_offering__form__purpose">
      <input type="text" class="text-input text-input--transparent" placeholder="Purpose:" value="">
    </div>
    <div class="ship_offering__form__email">
      <input type="text" class="text-input text-input--transparent" placeholder="Email:" value="">
    </div>

    <button class="button--large--cta" style="width: 95%; margin: 0 auto;" @click="processConfirm()">Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'ShipOffering',
  methods: {
    processConfirm: function() {
      this.$router.push({ path: '/myprojects/projects' })
    }
  }
}
</script>
