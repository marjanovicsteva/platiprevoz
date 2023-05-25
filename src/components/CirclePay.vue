<template>
    <div class="container" :class="type" @click="handleClick">
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
    props: [ 'opcija', 'zona', 'cena', 'type' ],
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
    .container {
        background-color: var(--color-accent);
        color: var(--vt-text);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        transition-duration: 0.2s;
    }

    .primary {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .primary .vreme {
        font-size: 2rem;
        font-weight: 200;
        line-height: 1;

        margin-top: 10px;
    }

    .primary .cena {
        font-weight: 200;
        color: lightgrey;
    }

    .primary .circle:hover {
        filter: brightness(0.8)
    }

    .secondary {
        text-align: center;
        width: 100%;
        padding: 10px 10px;
    }

    .secondary .vreme {
        white-space: nowrap;
    }

    .secondary .cena {
        white-space: nowrap;
        font-weight: 200;
        font-size: 0.75rem;
    }
</style>