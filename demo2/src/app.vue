<template>
    <div>
        <Icon icon="solidInfo"/>
    </div>
</template>

<script>
import { Icon } from 'patsnap-biz';
import "@patsnap-ui/icon/assets/solid/info.svg";
export default {
    components: {
        Icon
    },
    created(){
        console.log(Icon)
    }
}
</script>

<style>

</style>