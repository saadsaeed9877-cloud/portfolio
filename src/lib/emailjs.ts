import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

// Flag to track if EmailJS is properly configured
let isConfigured = false

// Initialize EmailJS only if public key is available
if (PUBLIC_KEY) {
  try {
    emailjs.init(PUBLIC_KEY)
    isConfigured = true
    console.log('EmailJS initialized successfully')
  } catch (error) {
    console.error('EmailJS initialization failed:', error)
    isConfigured = false
  }
} else {
  console.warn('EmailJS public key not found. Email functionality will not work. Please set VITE_EMAILJS_PUBLIC_KEY in your .env.local')
}

export interface EmailParams {
  to_email: string
  from_name: string
  from_email: string
  subject: string
  message: string
}

export async function sendEmail(params: EmailParams): Promise<{ success: boolean; message: string }> {
  // Check if EmailJS is properly configured
  if (!isConfigured || !PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    const missingVars = []
    if (!PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY')
    if (!SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID')
    if (!TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID')
    
    const message = `Email service not configured. Missing: ${missingVars.join(', ')}. Please see EMAILJS_SETUP.md for instructions.`
    console.error(message)
    return {
      success: false,
      message: 'Email service not configured. Please contact me directly at ' + params.to_email,
    }
  }

  try {
    const templateParams = {
      to_email: params.to_email,
      from_name: params.from_name,
      from_email: params.from_email || 'noreply@portfolio.local',
      subject: params.subject,
      message: params.message,
    }

    console.log('Sending email with params:', { ...templateParams, message: templateParams.message.substring(0, 50) + '...' })

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)

    console.log('Email sent successfully:', response)

    if (response.status === 200) {
      return {
        success: true,
        message: 'Letter dispatched successfully! I will read it shortly.',
      }
    }

    return {
      success: false,
      message: 'Failed to send letter. Please try again.',
    }
  } catch (error) {
    console.error('Email error:', error)
    
    // Provide specific error messages based on error type
    let errorMessage = 'An error occurred while sending your letter.'
    
    if (error instanceof Error) {
      if (error.message.includes('auth')) {
        errorMessage = 'Authentication failed. Please check your EmailJS configuration.'
      } else if (error.message.includes('service') || error.message.includes('template')) {
        errorMessage = 'Email service or template not found. Please check your configuration.'
      }
    }
    
    return {
      success: false,
      message: errorMessage + ' Please try again or contact directly at ' + params.to_email,
    }
  }
}
