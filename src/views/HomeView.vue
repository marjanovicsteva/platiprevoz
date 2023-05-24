<script setup>
import ChooseLocation from '../components/ChooseLocation.vue';
import CirclePay from '../components/CirclePay.vue';
import IconClose from '../components/icons/IconClose.vue';
</script>

<template>
  <main>
    <ChooseLocation @locationChanged="handleLocationChange"></ChooseLocation>

    <div id="options">
      <CirclePay v-for="option in options" :opcija="option" :zona="zona" :cena="cene[zona][option.vreme]" @showQR="showQR"></CirclePay>
    </div>

    <div id="popup" class="popup begaj">
      <div class="popup-header">
        <h2>Scan</h2>

        <IconClose @click="hideQR" class="c-pointer"></IconClose>
      </div>

      <div id="qrcode"></div>

      <p>Skeniraj QR kod da platis prevoz preko telefona.</p>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      options: [
        { vreme: 90, tekst: "90 min" },
        { vreme: 1, tekst: "1 dan"  },
        { vreme: 7, tekst: "7 dana" },
        { vreme: 30, tekst: "30 dana" }
      ],
      cene: {
        A: {
          90: 50,
          1: 120,
          7: 800,
          30: 2200
        },
        B: {
          90: 50,
          1: 120,
          7: 800,
          30: 2200
        },
        C: {
          90: 100,
          1: 150,
          7: 1000,
          30: 3300
        }
      },
      zona: 'A',
      qr: null
    };
  },
  methods: {
    handleLocationChange(data) {
      this.zona = data.zona
    },
    showQR(data) {
      this.qr.makeCode(`sms:9011:${data.zona}${data.opcija.vreme}`)

      document.getElementById('popup').classList.remove('begaj')
    },
    hideQR() {
      document.getElementById('popup').classList.add('begaj')
    }
  },
  mounted() {
    this.qr = new QRCode(document.getElementById('qrcode'), {
        text: 'Steva',
        colorDark: '#ffffff', // base.css --vt-white
        colorLight: '#2f6196' // base.css --vt-blue
      })
  },
  components: { ChooseLocation }
}
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 75px;
    max-width: calc(100vw - 20px);
    margin: 0 auto;
    margin-top: 70px;
  }

  #options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
    flex-wrap: wrap;
  }

  .popup {
    position: fixed;
    left: 20px;
    bottom: 20px;
    background-color: var(--color-accent);
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    transition-duration: 1s;
    width: 296px;
  }

  .popup h2 {
    font-weight: bold;
  }

  .popup * {
    color: var(--color-text);
  }

  .popup-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .begaj {
    left: -100%;
  }

  .c-pointer {
    cursor: pointer;
  }
</style>