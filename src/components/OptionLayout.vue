<script setup>
import CirclePay from './CirclePay.vue';
</script>

<template>
    <div id="all-options">
        <CirclePay type="primary" :opcija="primaryOption" :zona="zona" :cena="cene[zona][primaryOption.vreme]"></CirclePay>
        
        <div id="options">
            <CirclePay v-for="option in options.filter(o => o.vreme !== primary)" type="secondary" :opcija="option" :zona="zona" :cena="cene[zona][option.vreme]" @showQR="showQR"></CirclePay>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'options', 'zona', 'cene' ],
    data() {
        return {
            primary: 90
        }
    },
    computed: {
        primaryOption() {
            return this.options.find(option => option.vreme === this.primary)
        },
    }
}
</script>

<style scoped>
/* OPTIONS */
#options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 10px;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 10px;
    line-height: 1.2;
  }

  #all-options {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
  }

  .primary {
    height: 200px;
    width: 200px;
  }

  .secondary {
    text-align: center;
    width: 100%;
    padding: 10px 10px;
    border: 2px solid var(--color-accent);
    background-color: transparent;
    color: var(--color-accent);
    flex: 1 1 0;
  }
</style>