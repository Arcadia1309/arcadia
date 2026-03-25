<template>
    <div class="primary-container text-center">
        <div class="text-center text-2xl font-semibold mb-2 text-yellow-600">Services At Arcadia Legal Associates</div>
        <div class="text-center text-xs mb-4 text-[#2E4053]">(Click on any section to see more infromation*)</div>
        <div class="cards-section flex flex-col justify-between justify-items-center gap-10 ml-[10%] mr-[10%] grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-10 mb-30">
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(0)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_1.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-[#2E4053]">Civil & Commercial Litigation</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(1)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_2.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2">Family and Matrimonial Law</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(2)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_3.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Criminal Defense and Bail Representation</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(3)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_4.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Real Estate and Title Verification</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(4)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_5.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>                    
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Intellectual Property Rights (IPR)</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-40 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(5)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_6.png" alt="law" class="h-20 w-20 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Consumer Protection and Product Liability</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-45 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(6)">
                   <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_7.png" alt="law" class="h-25 w-25 mt-2 mb-5">
                    </div> 
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Contract Drafting and Legal Documentation</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-45 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(7)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_8.png" alt="law" class="h-25 w-25 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Alternate Dispute Resolution</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-45 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(8)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_9.png" alt="law" class="h-25 w-25 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Writs and Constitutional Remedies</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-45 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(9)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_10.png" alt="law" class="h-25 w-25 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Employment and Labour Advisory</h3>
                </div>
            </div>
            <div class="w-full mx-auto">
                <div class="h-45 px-2 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-amber-500" @click="openModal(10)">
                    <div class="flex items-center justify-center">
                        <img src="../assets/icons/img_11.png" alt="law" class="h-25 w-25 mt-2 mb-5">
                    </div>
                    <h3 class="text-l font-semibold mb-2 text-gray-800">Legal Consultation and Retainership</h3>
                </div>
            </div>
        </div>
    </div>


  <!-- Modal Container (Initially Hidden) -->
  <div id="modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <!-- Modal Content -->
    <div class="bg-white rounded-lg p-10 w-full max-w-4xl shadow-lg">
      <h2 id="modal-title" class="text-2xl font-semibold mb-4 text-center text-[#2E4053]">{{ modalTitle }}</h2>
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
                modalTitle: 'Title',
                modalContent: 'Content',
                content:[
                        ["Civil and Commercial Litigation","At Arcadia Legal Associates, we approach litigation as a disciplined pursuit of justice through lawful reasoning and strategic clarity. Whether handling property conflicts, contractual breaches, or commercial disputes, we deliver thorough representation with a deep understanding of both procedural and substantive law. Our focus remains on securing long-term solutions and protecting our clients’ interests through well-prepared advocacy in trial and appellate forums."],
                        ["Family and Matrimonial Law","Disputes within families require careful handling with compassion, discretion, and professionalism. At Arcadia, we assist clients through sensitive matters such as divorce, child custody, alimony, and protection against domestic abuse. Our aim is to provide legal clarity while upholding dignity and emotional well-being. We strive to balance the legal complexities with human understanding, helping clients navigate personal transitions with confidence."],
                        ["Criminal Defense and Bail Representation","The protection of individual liberty and the right to a fair trial are at the core of our criminal law practice. We provide robust defense strategies in matters ranging from anticipatory and regular bail to complex criminal trials. Our approach is analytical and rights-oriented, driven by a commitment to constitutional values and procedural fairness. Every case we take is treated with the seriousness it deserves, and every client is given clear, honest guidance at every stage."],
                        ["Real Estate and Title Verification","In real estate transactions, clarity of ownership is the foundation of trust. At Arcadia, we assist clients with comprehensive title due diligence, verification of encumbrances, examination of chain of ownership, and vetting of legal documents including sale deeds, agreements, and permissions. Our real estate advisory ensures that transactions are conducted with legal certainty, protecting our clients from future litigation and regulatory complications. Whether you are purchasing property, investing in land, or entering into joint development, we offer legal clarity with precision and foresight."],
                        ["Intellectual Property Rights (IPR)","We believe that ideas deserve protection. At Arcadia, we assist individuals, businesses, and creators in securing their intellectual assets through proper registration and enforcement. From trademarks, copyrights, and designs to infringement litigation and advisory on brand protection, we provide end-to-end IPR services. Our team works with clarity and strategy to ensure that the creativity and innovation of our clients are safeguarded in law and respected in the marketplace."],
                        ["Consumer Protection and Product Liability","Arcadia stands firmly for the rights of consumers. We represent clients in matters involving defective goods, deficient services, real estate disputes, and digital fraud. Our team ensures timely redressal through forums and commissions while maintaining a strong focus on evidence, consumer laws, and regulatory compliance. We believe consumer justice is a key element of a fair marketplace and an informed society."],
                        ["Contract Drafting and Legal Documentation","Clear and comprehensive legal documentation is the cornerstone of any secure transaction. Our team prepares, vets, and reviews a wide range of contracts including partnership deeds, sale agreements, service contracts, and employment terms. Every document we deliver is designed for legal enforceability, clarity of terms, and protection of interest. We aim to remove ambiguity and ensure that agreements reflect mutual intent without room for confusion or future conflict."],
                        ["Alternate Dispute Resolution","Disputes can often be resolved without entering courtrooms. Through structured processes like mediation, conciliation, and arbitration, we assist our clients in finding efficient, confidential, and cost-effective resolutions. Our team approaches each dispute with a resolution-focused mindset while preserving relationships and minimizing unnecessary escalation. We view alternate dispute mechanisms as practical tools that empower parties to arrive at durable solutions."],
                        ["Writs and Constitutional Remedies","Arcadia is committed to the protection of individual rights and public interest through constitutional advocacy. We represent clients before High Courts and the Supreme Court in matters involving fundamental rights, administrative inaction, and government accountability. Our work includes filing writ petitions such as habeas corpus, mandamus, and certiorari to safeguard freedoms guaranteed under the Constitution. We view constitutional litigation as a meaningful expression of justice in action."],
                        ["Employment and Labour Advisory","We assist employers and employees in building workplaces that are both lawful and just. From employment contracts and compliance with labour regulations to dispute resolution and workplace investigations, our advisory services are practical and rooted in industry standards. We support fair employment practices and provide solutions that promote harmony, clarity, and accountability at the workplace."],
                        ["Legal Consultation and Retainership","Our legal consultation and retainership services provide consistent legal support tailored to the needs of individuals, professionals, startups, and organizations. Clients benefit from ongoing legal advice, preventive strategies, and timely guidance across a range of legal issues. We work not only to solve problems when they arise but to anticipate and prevent them through structured legal planning and support."]
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