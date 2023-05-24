<script setup>
import IconMenu from './icons/IconMenu.vue'
import IconClose from './icons/IconClose.vue';
</script>

<template>
    <div>
        <header>
            <span class="logo">PlatiPrevoz.com</span>

            <span id="otvori" @click="toggleMenu">
                <IconMenu :size="25"></IconMenu>
            </span>
        </header>

        <nav id="nav">
            <div>
                <div id="zatvori" @click="toggleMenu">
                    <IconClose :size="25"></IconClose>
                </div>
                <div id="meni">
                    <a href="https://bgnaplata.rs/">BG Naplata</a>
                    <a href="https://bgnaplata.rs/prodajna-mesta/">Prodajna mesta</a>
                </div>
            </div>
            <div id="linkovi">
                <a href="https://github.com/marjanovicsteva">GitHub</a>
                <a href="https://www.linkedin.com/in/stevan-marjanovic/">LinkedIn</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        toggleMenu() {
            document.getElementById('nav').classList.toggle('open');
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--color-accent);
}

nav {
    position: fixed;
    text-align: right;
    z-index: 2;
    top: 0;
    left: 100vw;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-accent);
    padding: 20px;
    transition-duration: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#meni {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
}

#meni a {
    font-size: 2rem;
    color: var(--color-text);
    text-decoration: none;
}

#meni a:hover {
    text-decoration: underline;
}

#linkovi {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-self: end;
}

#linkovi a {
    color: var(--color-text);
}

#otvori {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
}

#zatvori > * {
    cursor: pointer;
}

.open {
    left: 0;
}

.logo {
    font-style: italic;
    font-weight: bold;
}
</style>
