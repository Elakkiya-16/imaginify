IMAGINIFY - AI Image Transformation

Imaginify is an AI-powered image transformation platform that allows users to enhance and modify images effortlessly. Built with Next.js, TypeScript and CSS,JavaScript , it leverages Cloudinary AI to provide cutting-edge image editing features.

Features

✅ Image Restoration – Enhance old or damaged images.
✅ Recoloring – Convert black-and-white photos into color.
✅ Object Removal – Remove unwanted elements from images.
✅ Generative Filling – Fill missing parts intelligently.
✅ Background Removal – Isolate subjects by removing backgrounds.

Tech Stack

Frontend: JavaScript, TypeScript, CSS

Backend: Node.js

AI Integration: Cloudinary AI


Installation & Setup

Prerequisites

Ensure you have Node.js and MongoDB installed.

Steps to Run Locally

1. Clone the repository:

git clone https://github.com/yourusername/imaginify.git
cd imaginify


2. Install dependencies:

npm install


3. Set up environment variables:
Create a .env.local file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


4. Run the application:

npm run dev


5. Access the application:
Open http://localhost:3000 in your browser.

Acknowledgments

🔹 Inspired by a YouTube creator.
🔹 Thanks to Cloudinary for their powerful AI transformations.
