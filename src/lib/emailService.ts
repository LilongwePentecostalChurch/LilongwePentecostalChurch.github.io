import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export interface EmailPayload {
  form_type: string;
  from_name: string;
  from_email?: string;
  phone?: string;
  details: string;          // any extra fields, pre-formatted
}

/**
 * Send a form submission to the church email via EmailJS.
 * Returns the EmailJS response or throws on error.
 */
export async function sendFormEmail(payload: EmailPayload) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      form_type:  payload.form_type,
      from_name:  payload.from_name,
      from_email: payload.from_email || 'Not provided',
      phone:      payload.phone      || 'Not provided',
      details:    payload.details,
    },
    PUBLIC_KEY,
  );
}
