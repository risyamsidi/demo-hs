// src/config/legalData.json.ts - contenu des pages privacy et terms, une version par langue : copie generique, prete a personnaliser.

import type { Locale } from "@i18n";
import type { LegalDocument } from "./types/configDataTypes";

// Deux documents rendus par le meme template de page. La copie decrit ce que le
// theme fait vraiment : un blog que l'on lit sans compte, une lettre
// d'information, un formulaire de contact, la preference de theme et le cookie
// de langue dans le navigateur ; ni compte, ni abonnement, ni facturation.
// L'utilisateur l'adapte a son site et la fait valider par son conseil. Aucun passage entre crochets ici : les champs a completer vivent
// dans les mentions legales, sous src/i18n/ui/en/pages.ts et son equivalent
// indonesien. Ceci n'est pas un avis juridique, et la version indonesienne n'en est
// pas davantage une : les deux textes disent la meme chose, aucun ne fait foi
// sur l'autre.

type LegalPages = { privacy: LegalDocument; terms: LegalDocument };

const en: LegalPages = {
  privacy: {
    title: "Privacy policy",
    description: "What we collect, why we collect it, and the choices you have over your data.",
    lastUpdated: "2026-09-24",
    sections: [
      {
        title: "Who we are",
        body: "This policy describes what this site collects when you read it, subscribe to its newsletter or write to us. If you have any question about it, you can reach us at any time through the contact page.",
      },
      {
        title: "Information we collect",
        body: "Reading a page collects nothing about you. If you subscribe to the newsletter, we keep your email address; if you write to us, we keep your message and your address to answer it.",
      },
      {
        title: "How we use your information",
        body: "Your email address is used to send you the newsletter you asked for, and nothing else; every issue includes a way to unsubscribe. Your message is used to answer you.",
      },
      {
        title: "Legal bases for processing",
        body: "Where data protection law requires a legal basis, we rely on your consent for the newsletter, on our legitimate interest in answering the messages you send us, and on our legal obligations.",
      },
      {
        title: "Cookies and analytics",
        body: "This site sets no advertising cookie and runs no analytics. Your browser keeps your light or dark theme preference and, if you switch language, a cookie that remembers that choice.",
      },
      {
        title: "How we share information",
        body: "We never sell personal information. We share it only with the processors that help us run the site, such as the host and the email provider that sends the newsletter, each bound by a data processing agreement, and with authorities where the law requires it.",
      },
      {
        title: "Data retention and deletion",
        body: "A newsletter address is deleted when you unsubscribe; a message is deleted once the conversation is over.",
      },
      {
        title: "Your rights",
        body: "Depending on where you live, you may have the right to access, correct, export, restrict or delete the personal information we hold about you, and to object to certain processing. To exercise any of these rights, contact us through the contact page and we will respond within the legal deadline.",
      },
      {
        title: "Changes to this policy",
        body: "We may update this policy as the site or the law evolves. The date at the top of this page always gives the latest version.",
      },
    ],
  },

  terms: {
    title: "Terms of use",
    description: "The terms that govern your use of this site, in plain language.",
    lastUpdated: "2026-09-24",
    sections: [
      {
        title: "Agreement to these terms",
        body: "By reading this site you accept these terms. If you do not accept them, please do not use it.",
      },
      {
        title: "Acceptable use",
        body: "You agree to use the site lawfully and respectfully. You will not attempt to breach its security, disrupt its operation, access data that is not yours, or use its forms to send unlawful or harmful content.",
      },
      {
        title: "Disclaimers and limitation of liability",
        body: "The site and its posts are provided as is, without warranties beyond those that cannot be excluded by law. A post reflects what its author knew on the date it carries; check anything you rely on. To the maximum extent permitted, we are not liable for decisions you make on the basis of what you read here.",
      },
      {
        title: "Changes to the site and these terms",
        body: "Posts are added, corrected and sometimes retired. These terms may also be updated; the date at the top of this page always gives the latest version.",
      },
      {
        title: "Contact",
        body: "Questions about these terms, or about anything else in this document, are welcome through the contact page. For legal notices, use the postal or email address listed there, and we will confirm receipt as soon as possible.",
      },
    ],
  },
};

const id: LegalPages = {
  privacy: {
    title: "Kebijakan privasi",
    description: "Apa yang kami kumpulkan, mengapa kami mengumpulkannya, dan pilihan yang menjadi hak Anda.",
    lastUpdated: "2026-09-24",
    sections: [
      {
        title: "Siapa kami",
        body: "Kebijakan ini menjelaskan apa yang dikumpulkan situs ini ketika Anda membacanya, berlangganan buletinnya, atau menulis kepada kami. Pertanyaan apa pun tentang kebijakan ini dapat Anda kirimkan kapan saja melalui halaman kontak.",
      },
      {
        title: "Data yang kami kumpulkan",
        body: "Membaca sebuah halaman tidak mengumpulkan apa pun tentang Anda. Jika Anda berlangganan buletin, kami menyimpan alamat email Anda; jika Anda menulis kepada kami, kami menyimpan pesan dan alamat Anda agar dapat membalasnya.",
      },
      {
        title: "Cara kami menggunakannya",
        body: "Alamat email Anda dipakai untuk mengirimkan buletin yang Anda minta, dan tidak untuk hal lain; setiap kiriman menyertakan cara untuk berhenti berlangganan. Pesan Anda dipakai untuk membalas Anda.",
      },
      {
        title: "Dasar hukum pemrosesan",
        body: "Bila peraturan perlindungan data mensyaratkan dasar hukum, kami berpegang pada persetujuan Anda untuk buletin, pada kepentingan sah kami untuk membalas pesan yang Anda kirimkan, dan pada kewajiban hukum kami.",
      },
      {
        title: "Cookie dan pengukuran pengunjung",
        body: "Situs ini tidak memasang cookie iklan dan tidak mengukur jumlah pengunjung. Peramban Anda menyimpan preferensi tema terang atau gelap Anda dan, jika Anda mengganti bahasa, sebuah cookie yang mengingat pilihan itu.",
      },
      {
        title: "Berbagi data Anda",
        body: "Kami tidak pernah menjual data pribadi. Kami hanya membagikannya kepada penyedia layanan yang membantu kami menjalankan situs, misalnya penyedia hosting dan layanan pengiriman buletin, yang masing-masing terikat perjanjian pemrosesan data, serta kepada pihak berwenang bila diwajibkan oleh hukum.",
      },
      {
        title: "Penyimpanan dan penghapusan",
        body: "Alamat buletin dihapus saat Anda berhenti berlangganan; sebuah pesan dihapus setelah percakapan selesai.",
      },
      {
        title: "Hak-hak Anda",
        body: "Tergantung tempat tinggal Anda, Anda berhak mengakses data pribadi yang kami simpan tentang Anda, memperbaikinya, mengekspornya, membatasi pemrosesannya atau meminta penghapusannya, serta menolak pemrosesan tertentu. Untuk menggunakan salah satu hak ini, tulislah kepada kami melalui halaman kontak: kami membalas dalam tenggat yang ditetapkan oleh hukum.",
      },
      {
        title: "Perubahan kebijakan ini",
        body: "Kebijakan ini dapat berubah seiring perkembangan situs atau peraturan. Tanggal di bagian atas halaman ini selalu menunjukkan versi terbaru.",
      },
    ],
  },

  terms: {
    title: "Ketentuan penggunaan",
    description: "Ketentuan yang mengatur penggunaan Anda atas situs ini, ditulis dengan bahasa yang jelas.",
    lastUpdated: "2026-09-24",
    sections: [
      {
        title: "Penerimaan ketentuan ini",
        body: "Dengan membaca situs ini, Anda menyetujui ketentuan ini. Jika Anda tidak menyetujuinya, jangan gunakan situs ini.",
      },
      {
        title: "Penggunaan yang wajar",
        body: "Anda setuju untuk menggunakan situs ini dengan menghormati hukum dan orang lain. Anda tidak akan mencoba menembus keamanannya, mengganggu jalannya, mengakses data yang bukan milik Anda, atau memakai formulirnya untuk mengirim konten yang melanggar hukum atau merugikan.",
      },
      {
        title: "Jaminan dan batasan tanggung jawab",
        body: "Situs ini dan artikel-artikelnya disediakan apa adanya, tanpa jaminan lain selain yang tidak boleh dikecualikan oleh hukum. Sebuah artikel mencerminkan apa yang diketahui penulisnya pada tanggal yang tertera: periksalah apa yang Anda jadikan pegangan. Sejauh diizinkan oleh hukum yang berlaku, kami tidak bertanggung jawab atas keputusan yang diambil berdasarkan apa yang Anda baca di sini.",
      },
      {
        title: "Perubahan situs dan ketentuan",
        body: "Artikel bertambah, diperbaiki, dan kadang ditarik. Ketentuan ini juga dapat diperbarui; tanggal di bagian atas halaman ini selalu menunjukkan versi terbaru.",
      },
      {
        title: "Hubungi kami",
        body: "Pertanyaan tentang ketentuan ini, atau tentang hal lain dalam dokumen ini, dapat disampaikan melalui halaman kontak. Untuk pemberitahuan yang bersifat hukum, gunakan alamat pos atau email yang tercantum di sana: kami akan mengonfirmasi penerimaannya secepat mungkin.",
      },
    ],
  },
};

const byLocale: Record<Locale, LegalPages> = { id, en };

/** Les deux documents legaux dans la langue demandee. */
export function getLegalData(locale: Locale): { privacy: LegalDocument; terms: LegalDocument } {
  return byLocale[locale];
}
