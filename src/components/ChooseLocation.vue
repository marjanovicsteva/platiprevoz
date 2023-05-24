<script setup>
import IconDown from './icons/IconDown.vue';
</script>

<template>
    <div class="location-picker">
        <div @click="toggleChooseLocation" @change="handleChange">
            <select v-if="izaberi_lokaciju" id="izaberi-lokaciju" v-model="oblast">
                <option data-zona="C">Sve</option>
                <option data-zona="A">Beograd</option>
                <option data-zona="A">Novi Beograd</option>
                <option data-zona="A">Zemun</option>
                <option data-zona="A">Surcin</option>
                <option data-zona="A">Grocka - Severno od puta 347</option>
                <option data-zona="B">Grocka - Juzno od puta 347</option>
                <option data-zona="B">Lazarevac</option>
                <option data-zona="B">Mladenovac</option>
                <option data-zona="B">Obrenovac</option>
                <option data-zona="B">Barajevo</option>
                <option data-zona="B">Sopot</option>
            </select>
            <h1 v-else>{{ oblast }} <IconDown color="#2f6196"></IconDown></h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            oblast: 'Beograd',
            izaberi_lokaciju: false,
            oblasti: [
                {
                    naziv: 'Sve',
                    zona: 'C'
                },
                {
                    naziv: 'Beograd',
                    zona: 'A'
                },
                {
                    naziv: 'Novi Beograd',
                    zona: 'A'
                },
                {
                    naziv: 'Zemun',
                    zona: 'A'
                },
                {
                    naziv: 'Surcin',
                    zona: 'A'
                },
                {
                    naziv: 'Grocka - Severno od puta 347',
                    zona: 'A'
                },
                {
                    naziv: 'Grocka - Juzno od puta 347',
                    zona: 'B'
                },
                {
                    naziv: 'Lazarevac',
                    zona: 'B'
                },
                {
                    naziv: 'Mladenovac',
                    zona: 'B'
                },
                {
                    naziv: 'Obrenovac',
                    zona: 'B'
                },
                {
                    naziv: 'Barajevo',
                    zona: 'B'
                },
                {
                    naziv: 'Sopot',
                    zona: 'B'
                }
            ]
        }
    },
    methods: {
        toggleChooseLocation() {
            if (!this.izaberi_lokaciju) {
                this.izaberi_lokaciju = !this.izaberi_lokaciju
            }
        },
        handleChange(e) {
            let zona = this.oblasti.find(oblast => oblast.naziv == this.oblast).zona
            this.$emit('locationChanged', { naziv: this.oblast, zona: zona })
            this.izaberi_lokaciju = !this.izaberi_lokaciju
        }
    }
}
</script>

<style scoped>
    .location-picker {
        cursor: pointer;
    }
</style>