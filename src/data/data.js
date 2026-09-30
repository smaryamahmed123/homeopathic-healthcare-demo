export const doctors = [
  {
    id: "d1",
    name: "Dr. Sara Ahmed",
    specialty: "Skin & Allergy",
    qualification: "DHMS, Certified Homeopathic Physician",
    experience: "9 years",
    fee: 1200,
    rating: 4.8,
    reviews: 126,
    location: "Gulshan-e-Iqbal, Karachi",
    clinic: "Natural Care Clinic",
    verified: true,
    image: "https://i.pravatar.cc/300?img=47",
    about: "Demo profile for a homeopathic physician. This content is fictional and intended only for the website prototype.",
    slots: ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"]
  },
  {
    id: "d2",
    name: "Dr. Ahmed Khan",
    specialty: "General Homeopathy",
    qualification: "DHMS, Homeopathic Physician",
    experience: "12 years",
    fee: 1500,
    rating: 4.7,
    reviews: 98,
    location: "North Nazimabad, Karachi",
    clinic: "Shifa Wellness Centre",
    verified: true,
    image: "https://i.pravatar.cc/300?img=12",
    about: "Fictional demo profile showing qualifications, consultation details and availability.",
    slots: ["9:30 AM", "12:00 PM", "3:30 PM"]
  },
  {
    id: "d3",
    name: "Dr. Hira Malik",
    specialty: "Women & Family Care",
    qualification: "DHMS, Homeopathic Physician",
    experience: "7 years",
    fee: 1000,
    rating: 4.6,
    reviews: 74,
    location: "Bahadurabad, Karachi",
    clinic: "WellSpring Clinic",
    verified: true,
    image: "https://i.pravatar.cc/300?img=44",
    about: "Fictional demo profile. Not a real healthcare professional.",
    slots: ["11:00 AM", "1:00 PM", "5:00 PM"]
  }
];

export const clinics = [
  {
    id: "c1",
    name: "Natural Care Clinic",
    location: "Gulshan-e-Iqbal, Karachi",
    rating: 4.8,
    reviews: 210,
    services: ["General Homeopathy", "Skin & Allergy", "Family Care"],
    doctors: ["d1"],
    verified: true
  },
  {
    id: "c2",
    name: "Shifa Wellness Centre",
    location: "North Nazimabad, Karachi",
    rating: 4.7,
    reviews: 164,
    services: ["General Homeopathy", "Family Care"],
    doctors: ["d2"],
    verified: true
  }
];

export const pharmacies = [
  {
    id: "p1",
    name: "Healthy Life Pharmacy",
    location: "Nazimabad, Karachi",
    rating: 4.8,
    reviews: 320,
    delivery: true,
    verified: true
  },
  {
    id: "p2",
    name: "CarePlus Pharmacy",
    location: "Gulshan-e-Iqbal, Karachi",
    rating: 4.6,
    reviews: 189,
    delivery: true,
    verified: true
  }
];

export const medicines = [
  { id: "m1", name: "Arnica 30C", category: "Homeopathic", price: 450, stock: 24, pharmacy: "Healthy Life Pharmacy", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80" },
  { id: "m2", name: "Allergy Relief Drops", category: "Allergy Care", price: 650, stock: 18, pharmacy: "Healthy Life Pharmacy", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=700&q=80" },
  { id: "m3", name: "Digestive Support", category: "Digestive Care", price: 520, stock: 42, pharmacy: "CarePlus Pharmacy", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=80" },
  { id: "m4", name: "Skin Care Tablets", category: "Skin Care", price: 480, stock: 9, pharmacy: "CarePlus Pharmacy", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=80" }
];

export const appointments = [
  { id: "a1", doctor: "Dr. Sara Ahmed", date: "18 Sep 2026", time: "10:00 AM", type: "Video consultation", status: "Confirmed" },
  { id: "a2", doctor: "Dr. Ahmed Khan", date: "22 Sep 2026", time: "3:30 PM", type: "Clinic visit", status: "Pending" }
];
