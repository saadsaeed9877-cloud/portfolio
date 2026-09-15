# EmailJS Setup Guide

The portfolio contact form uses **EmailJS** to send emails directly from the browser without needing a backend server.

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up for a free account
- Verify your email

### 2. Add Email Service (Gmail)
1. In Dashboard → **Email Services** → Click **Add Service**
2. Select **Gmail**
3. Follow the Gmail authentication steps
4. Once authenticated, copy your **Service ID** (looks like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** → Click **Create New Template**
2. Use this template structure:

```
Subject: {{subject}}
From: {{from_email}} ({{from_name}})

{{message}}
```

3. Save the template and copy your **Template ID** (looks like `template_xxxxxxx`)

### 4. Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Add to Your Project
Create a `.env.local` file in the project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

Replace with your actual keys from EmailJS.

### 6. Test It
- Go to the Contact page
- Fill out the form and click "Dispatch Letter"
- You should see a success toast notification
- Check your inbox for the email

## Template Variables

The form will send these variables to your email:

- `to_email` - Your email (saadsaeed9877@gmail.com)
- `from_name` - Visitor's name
- `from_email` - Visitor's email
- `subject` - Email subject
- `message` - Full formatted letter

## Troubleshooting

**"EmailJS initialization failed" warning:**
- Make sure your `VITE_EMAILJS_PUBLIC_KEY` is set correctly in `.env.local`
- Restart the dev server after updating `.env.local`

**Emails not sending:**
- Check your EmailJS dashboard for error logs
- Verify Gmail service is properly authenticated
- Make sure your template ID is correct

**Rate Limiting:**
- EmailJS free tier has limits (200 emails/day)
- Check pricing if you need more

## More Info

- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Email Service Setup](https://www.emailjs.com/docs/service/)
- [Email Template Setup](https://www.emailjs.com/docs/template/)
