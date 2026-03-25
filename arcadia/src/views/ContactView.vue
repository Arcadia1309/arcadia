<template>
    <div class="py-3 px-6 w-full lg:w-1/2 lg:ml-[25%] lg:mr-[25%]">
        <div class="w-full bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-2xl font-semibold text-[#2E4053] mb-4 text-center">Get in Touch with Arcadia Legal Associates</h2>
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
                <input type="hidden" name="access_key" value="b664a17b-5057-4b79-9ed5-2d10f2d1d428">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
                    <input type="text" id="contact" name="contact" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                </div>

                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea id="message" name="message" rows="5" required
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="How can we help you?"></textarea>
                </div>

                <div class="text-center">
                    <button type="submit"
                            class="inline-block w-full md:w-auto bg-[#2e4053] text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
</script>