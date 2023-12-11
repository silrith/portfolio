<template>
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Berk Ozerdogan | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
            <a href="#"><font-awesome-icon class="footerIcon" :icon="['fas', 'arrow-up']" /></a>
        </div>
    </footer>
</template>

<style scoped>
.footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background-color: var(--second-bg-color);
}

.footer-text{
    font-size: 1.3rem;
}

.footer-iconTop a{
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    background-color: var(--main-color);
    border-radius: .3rem;
    border: .2rem solid var(--main-color);
    z-index: 1;
    overflow: hidden;
}

.footer-iconTop a .footerIcon{
    font-size: 1.5rem;
    color: var(--bg-color);
}

.footer-iconTop a:hover .footerIcon{
    color: var(--main-color);
}

.footer-iconTop a::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--second-bg-color);
    z-index: -1;
    transition: .5s;
}

.footer-iconTop a:hover::before{
    width: 100%;
}
</style>