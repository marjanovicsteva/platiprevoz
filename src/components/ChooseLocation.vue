<script setup>
import IconDown from './icons/IconDown.vue';
</script>

<template>
    <div class="location-picker">
        <div @click="toggleChooseLocation" @change="handleChange">
            <!-- <select v-if="izaberi_lokaciju" id="izaberi-lokaciju" v-model="oblast">
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
            </select> -->
            <div v-if="izaberi_lokaciju" class="location-picker-overlay">
                <p v-for="mesto in oblasti" @click="handleLocationClicked" :data-naziv="mesto.naziv" :data-kratak="mesto.kratak_naziv" :data-zona="mesto.zona">{{ mesto.naziv }}</p>
            </div>
            <h1 v-else id="location-picked">{{ oblast }} <IconDown color="#2f6196"></IconDown></h1>
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
                    kratak_naziv: 'Grocka',
                    zona: 'A'
                },
                {
                    naziv: 'Grocka - Juzno od puta 347',
                    kratak_naziv: 'Grocka',
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
                
                setTimeout(() => {
                    let ps = document.querySelectorAll('.location-picker-overlay p')
                    for (let i = 0; i < ps.length; i++) {
                        setTimeout(() => {
                            this.showElement(ps[i])
                        }, (i+1)*100)
                    }

                }, 100)
            } else {
                this.izaberi_lokaciju = !this.izaberi_lokaciju
            }
        },
        handleChange(e) {
            let zona = this.oblasti.find(oblast => oblast.naziv == this.oblast).zona
            this.$emit('locationChanged', { naziv: this.oblast, zona: zona })
            this.izaberi_lokaciju = !this.izaberi_lokaciju
        },
        handleLocationClicked(e) {
            this.oblast = e.target.dataset.kratak || e.target.dataset.naziv
            this.$emit('locationChanged', { naziv: e.target.dataset.oblast, zona: e.target.dataset.zona })
        },
        showElement(el) {
            el.classList.add('sezame-otvori-se')
        },
        hideElement(el) {
            el.classList.remove('sezame-otvori-se')
        }
    },
    
}
</script>

<style scoped>
    .location-picker {
        cursor: pointer;
    }

    .location-picker-overlay {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: var(--color-background);
        opacity: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0 20px;
    }

    p {
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
        transition-duration: 0.5s;
        transform: translateY(100px);
        color: transparent;
    }

    p:hover {
        text-decoration: underline;
    }

    .sezame-otvori-se {
        transform: translateY(0);
        color: var(--color-heading);
    }
</style>