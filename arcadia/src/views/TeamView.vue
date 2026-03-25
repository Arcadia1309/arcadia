<template>
    <div>
        <div class="max-w-6xl mx-auto px-4 mb-10">
        <div class="text-center text-2xl font-semibold mb-4 text-yellow-600">Our Legal Team</div>
            <!-- Founding Members -->
            <div class="mb-12">
                <h3 class="text-l font-semibold text-gray-700 mb-6">Founding Members</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(0)">
                        <img src="" alt="Krunal Sarode" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Krunal Sarode</h4>
                        <p class="text-gray-600 mb-2">Founder and Managing Partner</p>
                        <p class="text-center text-sm text-gray-500">Litigation, Corporate Advisory and Strategic Legal Counsel</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(1)">
                        <img src="" alt="Vineha Wadgaonkar" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Vineha Wadgaonkar</h4>
                        <p class="text-gray-600 mb-2">Co-Founder and Partner</p>
                        <p class="text-center text-sm text-gray-500">Litigation Drafting, Research, Contract Vetting, and Legal Training</p>
                    </div>
                </div>
            </div>

            <!-- Senior Partners -->
            <div class="mb-12">
                <h3 class="text-l font-semibold text-gray-700 mb-6">Senior Partners</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(2)">
                        <img src="" alt="Prasad Rakh" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Prasad Jayat Rakh</h4>
                        <p class="text-gray-600 mb-2">Senior Partner</p>
                        <p class="text-center text-sm text-gray-500"> Research and Criminal Law</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(3)">
                        <img src="" alt="Atish Kaningdhwaj" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Atish Kaningdhwaj</h4>
                        <p class="text-gray-600 mb-2">Senior Partner</p>
                        <p class="text-center text-sm text-gray-500">Administration and Practice Development</p>
                    </div>
                </div>
            </div>

            <!-- Senior Associates -->
            <div class="mb-12">
                <h3 class="text-l font-semibold text-gray-700 mb-6">Senior Associates</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(4)">
                        <img src="" alt="Srikant Bansode" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Srikant Bansode</h4>
                        <p class="text-gray-600 mb-2">Senior Associate</p>
                        <p class="text-center text-sm text-gray-500">Civil Litigation</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(5)">
                        <img src="" alt="Amit Icham" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Amit Icham</h4>
                        <p class="text-gray-600 mb-2">Senior Associate</p>
                        <p class="text-center text-sm text-gray-500">Bombay High Court and Criminal Law Matters</p>
                    </div>
                </div>
            </div>

            <!-- Associates -->
            <div class="mb-12">
                <h3 class="text-l font-semibold text-gray-700 mb-6">Associates</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(6)">
                        <img src="" alt="Shubham Lokare" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Shubham Lokare</h4>
                        <p class="text-gray-600 mb-2">Associate</p>
                        <p class="text-center text-sm text-gray-500">data not available</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(7)">
                        <img src="" alt="Kiran Dahitonde" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Kiran Dahitonde</h4>
                        <p class="text-gray-600 mb-2">Associate for Ahmednagar Jurisdiction</p>
                        <p class="text-center text-sm text-gray-500">data not available</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(8)">
                        <img src="" alt="Shekhar Gorde" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Shekhar Gorde</h4>
                        <p class="text-gray-600 mb-2">Associate</p>
                        <p class="text-center text-sm text-gray-500">Litigation and Advisory</p>
                    </div>
                    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(9)">
                        <img src="" alt="Tanaya Deokate" class="w-full h-full rounded-sm mb-4 object-cover">
                        <h4 class="text-lg font-semibold text-gray-800">Adv. Tanaya Deokate</h4>
                        <p class="text-gray-600 mb-2">Junior Associate</p>
                        <p class="text-center text-sm text-gray-500">data not available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Container (Initially Hidden) -->
    <div id="modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <!-- Modal Content -->
        <div class="bg-white rounded-lg p-10 w-full max-w-4xl shadow-lg">
            <h2 id="modal-title" class="text-2xl font-semibold mb-4 text-center text-[#2E4053]"> {{ modalTitle }}</h2>
            <p id="modal-text" class="text-gray-700 text-center mt-10 mb-6 text-justify">{{ modalContent }}</p>
            <div class="flex justify-center space-x-2">
                <button id="closeModal" class="px-4 py-2 text-white rounded bg-[#2E4053] hover:bg-gray-400" @click="closeModal">
                Close
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                modalTitle: 'Name',
                modalContent: 'Content',
                content:[
                        ["Adv. Krunal Sarode","Since beginning his practice in 2017, Krunal J. Sarode has emerged as a trusted legal advisor to individuals, businesses, and institutions across Maharashtra. With deep expertise in Civil Litigation, Criminal Law, Corporate Advisory, Family Law, Service Matters, Land Disputes, and Cooperative Society issues, he provides comprehensive and result-oriented legal solutions tailored to each client’s unique requirements. Based in Mumbai and Pune, Krunal regularly appears before the Bombay High Court and various tribunals, combining meticulous preparation with strategic thinking to achieve effective outcomes. Beyond his litigation practice, he plays a pivotal role as a legal advisor on the bank panels of PDCC Pune, offering expert guidance on banking and cooperative matters. He also serves as the legal head for Chaitanya Corporation, a prominent real estate firm, where he oversees all corporate and regulatory compliance, contracts, and dispute resolution. Krunal is recognised not only for his technical expertise but also for his client-centric approach, ensuring that every matter is handled with diligence, integrity, and a clear focus on results. An alumnus of ILS Law College, Pune, he blends academic rigor with practical advocacy, enabling clients to navigate complex legal challenges with confidence. His commitment to professional excellence and strategic counsel makes him a reliable partner for clients seeking both courtroom representation and advisory solutions."],
                        ["Adv. Vineha Wadgaonkar","Vineha Wadgaonkar is the Co-Founder of Arcadia Legal Associates and leads the firm’s practice in litigation drafting, legal research, contract review, and professional training. She specialises in preparing a wide range of litigation documents, including plaints, written statements, petitions, affidavits, rejoinders, and applications, ensuring they are precise, strategically structured, and legally sound.In addition to her drafting and research work, Vineha advises clients on contract structuring, vetting, and negotiation across multiple sectors, ensuring agreements are legally robust and commercially viable. She also contributes to academic initiatives, mentoring junior associates, and providing training in legal research, drafting, and emerging areas of law.An alumna of ILS Law College, Pune, Vineha holds an LL.M. in Constitutional and Administrative Law from New Law College, Bharati Vidyapeeth University, and a Post Graduate Diploma in Business Management in Cyber Law and Cyber Forensics from NLU Bangalore. She is currently pursuing a Ph.D. on the comparative analysis of Artificial Intelligence and Data Protection regulatory frameworks, focusing on Fundamental Rights in India and globally.Recognised for her meticulous research, analytical rigor, and client-focused approach, Vineha combines academic excellence with practical expertise to provide comprehensive legal guidance. Her work strengthens the firm’s litigation preparation, advisory services, and internal knowledge-building initiatives."],
                        ["Adv. Prasad Jayant Rakh","Prasad Rakh is a practicing advocate across Maharashtra with a focus on criminal law. He holds an LL.M. in Criminal Law from the University of Mumbai and a B.A. LL.B. from ILS Law College, Pune. Prasad is recognised for his strategic litigation skills, meticulous research, and client counselling. He is actively involved in providing legal aid and community service, demonstrating his commitment to access to justice."],
                        ["Adv. Atish Kaningdhwaj","With over a decade of experience in legal practice, Atish Kaningdhwaj helps individuals, businesses, and institutions navigate complex legal challenges with clarity and confidence. His areas of expertise include Arbitration, Corporate Advisory, Criminal Law, Family Law, Service Matters, Land Disputes, and Cooperative Society issues.Based in Mumbai and Pune, Atish regularly appears before the Bombay High Court and various tribunals, offering practical and results-driven legal strategies tailored to each client’s needs. As a certified Arbitrator, he brings a focused and balanced approach to resolving disputes efficiently outside the courtroom.Atish is also committed to access to justice and has consistently undertaken pro bono work for clients who cannot afford legal counsel. An alumnus of ILS Law College, Pune, he combines academic rigor with real-world advocacy to deliver outcomes that matter for his clients."],
                        ["Adv. Shrikant Bansode","Srikant Bansode is an experienced advocate practising primarily in civil litigation across the District Courts of Pune and Mumbai. He holds a law degree from the prestigious ILS Law College, Pune, and has developed strong expertise in handling diverse civil matters, including property disputes, contractual issues, and service-related cases.Known for his diligent approach and attention to detail, Srikant supports complex matters by providing thorough legal research, drafting, and procedural guidance. His practical experience and client-focused mindset enable him to contribute effectively to the firm’s litigation strategy and overall case management."],
                        ["Adv. Amit Icham","Amit Icham is a dedicated advocate practising before the Bombay High Court, with extensive experience in criminal and select civil matters. Born and raised in Nashik, he graduated from ILS Law College, Pune, in 2019, and soon after moved to Mumbai to pursue his legal career. Amit focuses on bails, writ petitions, appeals, revisions, and matters involving constitutional rights, with particular emphasis on the right to a speedy trial. He represents both accused persons and victims, ensuring that each client’s rights are defended and that justice is effectively served.He has substantial experience in the City Civil and Sessions Court, Greater Mumbai, handling sensitive cases with discretion, professionalism, and a client-centered approach. Amit stays abreast of the latest developments in criminal law, recent legislative changes, and landmark judgments, bringing informed and up-to-date strategies to every case.Committed to access to justice, he has also undertaken legal aid work, reflecting his belief in using the law as a tool to help those who cannot afford legal representation."],
                        ["Adv. Shubham Lokare","Shubham Lokare joined Arcadia Legal Associates in 2022 and works remotely while pursuing his LL.M. His academic expertise supports the firm’s legal research and case strategy. Shubham contributes to drafting, research, and client coordination, ensuring high-quality legal support."],
                        ["Adv. Kiran Dahitonde","Kiran Dahitonde practices in Ahmednagar and collaborates with the firm on local matters. His regional expertise and litigation skills ensure effective client representation in the jurisdiction."],
                        ["Adv. Shekhar Gorde","Shekhar Gorde has broad experience in litigation and advisory work. He provides strategic guidance on selected matters, enhancing the firm’s ability to deliver practical and comprehensive legal solutions."],
                        ["Adv. Tanaya Deokate","Tanaya Deokate is a 2024 law graduate and a first-year associate at the firm. She assists with research, drafting, and client coordination, while developing her litigation skills under senior mentorship."]
                    ]
            };
        },
        methods: {
            openModal(num) {
                const modalDialog = document.getElementById('modal');
                modalDialog.classList.remove('hidden');
                this.modalTitle = this.content[num][0];
                this.modalContent = this.content[num][1];
                document.addEventListener('keydown', this.closeModal);
            },
            closeModal() {
                const modalDialog = document.getElementById('modal');
                modalDialog.classList.add('hidden');
                document.removeEventListener('keydown', this.closeModal);

            },
        },
    };
</script>