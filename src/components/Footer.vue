<template>
    <footer>
        <!-- <p>Created with love</p> -->
        <div>
            <a>GitHub</a>
            <a>LinkedIn</a>
            <a href="">BG Naplata</a>
            <a href="">Prodajna mesta</a>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: fixed;
        bottom: 0;
        padding: 10px;
        width: 100%;
        background-color: var(--color-accent);
        color: var(--color-text);

    }

    div {
        list-style-type: none;
        display: flex;
        justify-content: center;
        column-gap: 20px;
    }
</style>