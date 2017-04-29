<template>
  <div>
    <div class="center due">
      <span class="due-text">{{ due }}</span>
    </div>

    <div class="center timeline">
      <div v-for="line in timeline">
        <p class="datetime">datetime: {{ line.Datetime }}</p>
        <p class="content">station: {{ line.Station }}</p>
      </div>
    </div>

    <div class="center from">
      from date: {{ from }}
    </div>

    <div class="center to">
      to date: {{ to }}
    </div>
    <div class="center purpose">
      purpose: {{ purpose }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: ['due', 'timeline', 'from', 'to', 'purpose']
}
</script>

<style>
div.due {
  padding: 30px;
}

.due-text {
  font-size: 36px;
}
</style>
