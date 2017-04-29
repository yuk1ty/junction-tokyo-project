<template>
  <div>
    <application-header title="Send" direction="/"></application-header>
    <ship-offering></ship-offering>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import ShipOffering from '@/components/send/ShipOffering'

export default {
  name: 'ShipDashboard',
  components: {
    'application-header': ApplicationHeader,
    'ship-offering': ShipOffering
  }
}
</script>
