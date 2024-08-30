import image1 from "../../assets/paneer/1.png"
import image2 from "../../assets/paneer/2.png"
import image3 from "../../assets/paneer/3.png"

export const paneerProducts = [
  {
    id: 1,
    brand: "Amul",
    category: "Dairy",
    details: {
      grams: "200 g",
      actualRate: 105,       
      discountedRate: 125,   
      images: image1, 
      offer: "10% off",   
    },
  },
  {
    id: 2,
    brand: "Mother Dairy",
    category: "Organic Dairy",
    details: {
      grams: "500g × 2",
      actualRate: 250,
      discountedRate: 275,  
      images: image2,
      offer: "10% off",  
      pics:"2pcs (500g)"   
    },
  },
  {
    id: 3,
    brand: "Nestle",
    category: "Low-Fat Dairy",
    details: {
      grams: "100g",
      actualRate: 55,        
      discountedRate: 60,   
      images:image1,      
      offer: "10% off",     
    },
  },
  {
    id: 4,
    brand: "Britannia",
    category: "Fresh Dairy",
    details: {
      grams: "300g",
      actualRate: 150,
      discountedRate: null, 
      images: image2, 
    },
  },
  {
    id: 5,
    brand: "Nandini",
    category: "Local Dairy",
    details: {
      grams:"250g × 2 ",
      actualRate: 120,       
      discountedRate: null, 
      images:image3, 
      pics:"2pcs (250g)"  
    },
  },
  {
    id: 6,
    brand: "Milky Mist",
    category: "Premium Dairy",
    details: {
      grams: "100g × 2",
      actualRate: 170,
      discountedRate: 193,  
      images:image1, 
      offer: "10% off",
      pics:"2pcs (100g)"
         
    },
  },
  {
    id: 7,
    brand: "Gowardhan",
    category: "Traditional Dairy",
    details: {
      grams: 400,
      actualRate: 200,
      discountedRate: null, 
      images:image2,      

    },
  },
];

export const paneerDescription = {
  heading: "Description",
  description:
    "Paneer is a fresh and soft dairy product, rich in protein and calcium. It is made from pure milk and is a versatile ingredient used in a variety of dishes.",
  points: [
    "Rich source of protein and calcium",
    "100% vegetarian",
    "No preservatives or artificial additives",
    "Perfect for curries, salads, and snacks",
    "Made from fresh cow milk",
  ],
};

export const importantPaneerInfo = {
  heading: "Important Information",
  description:
    "Amul Paneer is a premium dairy product made from fresh cow's milk. It offers a rich, creamy texture and is a high source of protein, ideal for vegetarians. Commonly used in Indian dishes such as curries and snacks, it is free from preservatives and artificial additives. Its versatility makes it perfect for grilling, frying, or adding to various recipes. Enjoy consistent quality and natural flavor in every bite.",
};


export const salesDetails = {

    heading:"Sales Deatils",

    sellerName: "Amul Dairy Products",
    fssaiNumber: "123456789012",
    address: "Amul Dairy, Sardar Patel Cooperative Complex, Anand, Gujarat, India. Pincode: 388001.",
    customerCare: "+91-123-456-7890 support@amul.com",
        
    
};
