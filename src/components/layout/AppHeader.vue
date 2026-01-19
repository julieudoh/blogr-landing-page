<template>
    <div class=" flex justify-between items-center p-4 pt-10">
        <div>
            <img :src="headerLogo" alt="Company Logo" />
        </div>

        <a>
            <img src="../../assets/images/icon-hamburger.svg" alt="hamburger icon">
        </a>
    </div>
</template>

<script>
    import logo from '../../assets/images/logo.svg'
export default {
    data(){
        return{
            headerLogo: logo,
        }
    }
}
</script>