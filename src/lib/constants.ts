export const COMPANY = {
  name: "GEGAL UTAMA SDN BHD",
  phone: "011-53164241",
  whatsappNumber: "601153164241",
  email: "gegalutama@gmail.com",
  address: "162A, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak",
  facebook: "https://www.facebook.com/share/14YRfB9VnEf/",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5!2d101.09!3d4.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2smy!4v1",
  mapLink:
    "https://www.google.com/maps/search/162A+Jalan+Tasek+Timur+Taman+Tasek+Indra+31400+Ipoh+Perak",
};

export const STATES = [
  "Selangor",
  "Kuala Lumpur",
  "Putrajaya",
  "Negeri Sembilan",
  "Melaka",
  "Johor",
  "Perak",
  "Kedah",
  "Pulau Pinang",
  "Kelantan",
  "Terengganu",
  "Pahang",
  "Perlis",
  "Sabah",
  "Sarawak",
  "Labuan",
];

export const LOAN_AMOUNTS = Array.from({ length: 30 }, (_, i) => (i + 1) * 1000);

export const WHATSAPP_BASE_URL = `https://wa.me/${COMPANY.whatsappNumber}`;

export function getWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
