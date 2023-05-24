<template>
    <div class="circle" @click="handleClick">
        <div class="vreme">
            {{ opcija.tekst }}
        </div>

        <div class="cena">
            {{ cena }} din
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'opcija', 'zona', 'cena' ],
    methods: {
        handleClick() {
            if (window.is_mobile()) {
                window.location.href = `sms:9011?&body=${this.zona}${this.opcija.vreme}`
            } else {
                this.$emit('showQR', { opcija: this.opcija, zona: this.zona })
            }
        }
    }
}
</script>

<style scoped>
    .circle {
        width: 150px;
        height: 150px;
        background-color: var(--color-accent);
        color: var(--vt-text);
        text-decoration: none;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        transition-duration: 0.2s;
    }

    .vreme {
        font-size: 2rem;
        font-weight: 200;
        line-height: 1;

        margin-top: 10px;
    }

    .cena {
        font-weight: 200;
        color: lightgrey;
    }

    .circle:hover {
        filter: brightness(0.8)
    }
</style>