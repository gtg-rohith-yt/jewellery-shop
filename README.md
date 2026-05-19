
# 💎 Aura Jewels | Easy Management Guide

This website is designed for beginners. You can manage everything by editing simple text files. **No coding required!**

## 📂 How to Manage Your Website

All your data is stored in the `src/data/` folder.

### 1. Adding/Editing Products
Open `src/data/products.ts`. You will see a list of products. To add a new one, copy an existing product block and change the details.
- **`price`**: Current selling price.
- **`oldPrice`**: Original price (shows as strikethrough).
- **`image`**: Link to image or path like `/products/my-ring.jpg`.

### 2. Changing Business Details
Open `src/data/business.ts`. Here you can change:
- **`whatsappNumber`**: Your WhatsApp number (Include country code, NO plus sign).
- **`upiId`**: Your UPI ID for payments.
- **`socialLinks`**: Instagram and Facebook links.
- **`shipping`**: Set delivery charges and free shipping limits.

### 3. Replacing Images
Go to the `public/` folder on your computer:
- Put product images in `public/products/`.
- Put banner images in `public/banners/`.
- Put your UPI QR code in `public/payment/qr.jpg`.
- Put your logo in `public/logo/logo.png`.

*Note: Make sure the file names in your data files match the names in these folders.*

### 4. Updating Categories
Open `src/data/categories.ts` to add or rename jewellery categories (e.g., Rings, Necklaces).

---

## 🚀 How to Deploy Updates

1. **Edit Files**: Make your changes in VS Code.
2. **Commit & Push**:
   ```bash
   git add .
   git commit -m "Updated products and prices"
   git push origin main
   ```
3. **Automatic Update**: Netlify will automatically detect the push and update your website in 1-2 minutes!

## 🛠 Tech Stack
- **Framework**: Next.js 15
- **Data**: Static TypeScript Objects
- **Deployment**: GitHub + Netlify
