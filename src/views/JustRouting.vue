<template>
   <global-table
      :list="getList"
      :listHeaders="getListHeaders"
      :showTotals="true"
      :actions="getActions"
      :downInfo="getDownInfo"
   >  
   </global-table>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default { computed: mapGetters(['getList', 'getListHeaders', 'getActions', 'getDownInfo']) }
</script>