
# Aura Jewels | Handmade Minimalist Luxury

This is a premium Next.js 15 application for **Aura Jewels**, featuring a handcrafted jewelry collection with a direct-to-WhatsApp ordering system and UPI payment integration.

## ✨ Features

- **Modern UI**: Built with React 19, Next.js 15, and Tailwind CSS.
- **Shopping Experience**: Integrated Cart and Wishlist functionality.
- **Checkout Form**: Captures customer details (Name, Phone, Address, City, Pincode) before ordering.
- **WhatsApp Integration**: Generates a pre-formatted order message including customer and product details.
- **Responsive Design**: Optimized for both mobile and desktop users.
- **PWA Ready**: Includes manifest for installation on mobile devices.

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 📦 Deployment

### GitHub & Netlify

To push this project to your GitHub repository and deploy:

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aura Jewels Shop"
   ```

2. **Push to GitHub**:
   *(Replace `<your-username>` with your actual GitHub username)*
   ```bash
   git remote add origin https://github.com/<your-username>/jewellery-shop.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com/).
   - Click **Add new site** > **Import from an existing project**.
   - Select **GitHub** and authorize.
   - Choose the `jewellery-shop` repository.
   - Netlify will automatically detect the Next.js settings. Click **Deploy**.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Icons**: Lucide React
- **State Management**: Zustand (Local Storage persistence)
