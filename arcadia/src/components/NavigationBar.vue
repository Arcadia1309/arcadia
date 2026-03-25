<!-- <template>
    <header class="flex w-full bg-white text-sm py-2">
        <div class="max-w-[w-full] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div class="items-center justify-center">
                <a class="flex" href="/" aria-label="Brand">
                    <img src="../assets/logo.png" class="h-25 w-60 ml-15 sm:ml-0 sm:h-35 sm:w-80" alt="Logo">
                </a>
            </div>
            <div class="flex flex-row items-center gap-5 sm:gap-3 md:gap-5 2xl:gap-10 sm:justify-end sm:mt-15 text-[12px] md:text-[15px]">  
                <a id="link1" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/home">Home</router-link></a>
                <a id="link2" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/about">About Us</router-link></a>
                <a id="link3" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/services">Our Services</router-link></a>
                <a id="link4" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/team">Our Team</router-link></a>
                <a id="link5" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/blog">Blog </router-link></a>
                <a id="link6" class="font-medium text-black hover:text-gray-400" href="javascript:void(window.open('https://form.jotform.com/252284436630456','blank','scrollbars=yes,toolbar=no,width=700,height=500'))">Careers</a>
                <a id="link7" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/contact">Contact</router-link></a>
            </div>
        </div>
    </header>
</template> -->

<template>
    <div class="w-full bg-white text-sm py-2 items-center justify-center">
        <div class="flex justify-center">
            <a href="/" aria-label="Brand">
                    <img src="../assets/logo.png" class="h-25 w-60 ml-15 sm:ml-0 sm:h-35 sm:w-80" alt="Logo">
            </a>
        </div>
        <div>
            <div class="flex justify-center gap-5 sm:gap-3 md:gap-15 2xl:gap-20 mt-15 sm:mt-0 text-[12px] md:text-[15px]">  
                <a id="link1" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/home" :class="{ 'underline font-bold': $route.path === '/home' }">Home</router-link></a>
                <a id="link2" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/about" :class="{ 'underline font-bold': $route.path === '/about' }">About Us</router-link></a>
                <a id="link3" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/services" :class="{ 'underline font-bold': $route.path === '/services' }">Our Services</router-link></a>
                <a id="link4" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/team" :class="{ 'underline font-bold': $route.path === '/team' }">Our Team</router-link></a>
                <a id="link5" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/blog" :class="{ 'underline font-bold': $route.path === '/blog' }">Blog </router-link></a>
                <a id="link6" class="font-medium text-black hover:text-gray-400" href="javascript:void(window.open('https://form.jotform.com/252284436630456','blank','scrollbars=yes,toolbar=no,width=700,height=500'))">Careers</a>
                <a id="link7" class="font-medium text-black hover:text-gray-400" href="#"><router-link to="/contact" :class="{ 'underline font-bold': $route.path === '/contact' }">Contact</router-link></a>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';

const $route = useRoute();
</script>