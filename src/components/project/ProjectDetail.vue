<template>
  <div>
    <div class="center due">
      {{ due }}
    </div>

    <ul class="center timeline">
      <li v-for="line in timeline">
        <p class="datetime">{{ line.Datetime }}</p>
        <p class="content">{{ line.Station }}</p>
      </li>
    </ul>

    <div class="center from">
      {{ from }}
    </div>

    <div class="center to">
      {{ to }}
    </div>
    <div class="center purpose">
      {{ purpose }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: ['due', 'timeline', 'from', 'to', 'purpose']
}
</script>
