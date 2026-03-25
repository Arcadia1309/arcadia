<template>
    <div>
        <div class="max-w-6xl mx-auto px-4 mb-10">
        <div class="text-center text-2xl font-semibold mb-4 text-yellow-600">Our Legal Team</div>
            <div class="mb-12">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500">
                        <img src="" alt="Krunal Sarode" class="w-60 h-50 rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Krunal Sarode</h4>
                        <p class="text-gray-600 mb-2">Founder and Managing Partner</p>
                        <p class="text-center text-xs text-gray-500">Litigation, Corporate Advisory and Strategic Legal Counsel</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500">
                        <img src="" alt="Vineha Wadgaonkar" class="w-60 h-50 rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Vineha Wadgaonkar</h4>
                        <p class="text-gray-600 mb-2">Co-Founder and Partner</p>
                        <p class="text-center text-xs text-gray-500">Litigation Drafting, Research, Contract Vetting, and Legal Training</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500">
                        <img src="" alt="Prasad Rakh" class="w-60 h-50 rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Prasad Jayat Rakh</h4>
                        <p class="text-gray-600 mb-2">Senior Partner</p>
                        <p class="text-center text-xs text-gray-500"> Research and Criminal Law</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500">
                        <img src="" alt="Atish Kaningdhwaj" class="w-60 h-50 rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Atish Kaningdhwaj</h4>
                        <p class="text-gray-600 mb-2">Senior Partner</p>
                        <p class="text-center text-xs text-gray-500">Administration and Practice Development</p>
                    </div>
                </div>
            </div>
            <div class="text-center">
                    <button type="submit" @click="goToRoute"
                            class="inline-block w-full md:w-auto bg-[#2e4053] text-white px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    View Our Team
                    </button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToRoute() {
    router.push('/team'); // replace '/blog' with your desired route
    }
</script>