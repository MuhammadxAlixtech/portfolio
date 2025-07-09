# 🧑‍💻 Muhammad Ali - Developer Portfolio

A clean, responsive portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, featuring a secure contact form powered by **Resend** and **Invisible reCAPTCHA**.

<br/>

## 🚀 Features

- ⚡️ Blazing fast and modern stack (Next.js + App Router)
- 🎨 Styled using Tailwind CSS with responsive design
- 📬 Contact form with email delivery via Resend
- 🛡️ Spam protection using Invisible Google reCAPTCHA v2
- 🌐 Deployed on [ali-muhammad.xyz](https://ali-muhammad.xyz)
- 💼 Sections: Home, About, Projects, Contact

<br/>

## 📷 Home Page Preview

> Includes a professional intro and your photo side by side.

<br/>

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend Email API](https://resend.com/)
- [Google reCAPTCHA v2 (Invisible)](https://www.google.com/recaptcha/)
- [Vercel Deployment](https://vercel.com)

<br/>

## 📁 Project Structure

```

src/
app/
page.tsx         # Home
about/
contact/
page.tsx       # Contact form
components/
Navbar.tsx
Footer.tsx
...
public/
assets/
profile.jpg      # Your photo
.env.local           # Env vars for resend & recaptcha

````

<br/>

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=your-resend-api-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
````

These should also be set in Vercel for deployment.

<br/>

## 📬 Contact Form Logic

* Client-side form uses `react-google-recaptcha` to trigger **Invisible reCAPTCHA**.
* If verified, it sends the form data to `/api/contact` route.
* Backend verifies the token and sends the email via Resend.

<br/>

## 🚀 Running Locally

```bash
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

## 🌐 Deployment

This project is optimized for [Vercel](https://vercel.com):

1. Push your repo to GitHub
2. Import the project in Vercel
3. Set your environment variables
4. Assign your custom domain (`ali-muhammad.xyz`)
5. Done 🎉

---

## 🙋‍♂️ About Me

Hi, I'm **Muhammad Ali** — a passionate developer with interests in **AI/ML**, **blockchain**, and **quantum computing**.
I've done my B.Tech in **Artificial Intelligence and Machine Learning**, and I actively participate in **competitive programming**.

* Expert on Codeforces (Rank: Top 600 globally)
* 4⭐ on Codechef
* Passionate about building real-world tech solutions.

<br/>

## 📫 Contact

Want to collaborate or hire? Use the [Contact Form](https://ali-muhammad.xyz/contact) — powered by reCAPTCHA & Resend!

---

## 📜 License

This project is licensed under the MIT License.


