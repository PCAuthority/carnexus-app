// ============================================================
// CarNexus — EmailJS configuration
//
// 1. Go to https://www.emailjs.com and sign up (free plan: 200 emails/month)
// 2. Email Services (left sidebar) > Add New Service > connect your Gmail/Outlook/etc.
//    Copy the SERVICE ID it gives you.
// 3. Email Templates > Create New Template. Use this content as a starting point:
//
//    Subject:  CarNexus booking update — {{status_title}}
//    To email: {{to_email}}
//    Body:
//      Hi {{to_name}},
//
//      {{status_message}}
//
//      Trip details:
//      Car type: {{car_type}}
//      Pickup location: {{pickup}}
//      Dates: {{start_date}} to {{end_date}}
//
//      — CarNexus
//
//    Copy the TEMPLATE ID it gives you.
// 4. Account > General > copy your PUBLIC KEY.
// 5. Paste all three values below, save this file, and re-upload it to your repo root.
// ============================================================

const EMAILJS_PUBLIC_KEY  = "f1LgYFUKN0K4zVNr7";
const EMAILJS_SERVICE_ID  = "service_eiifnkc";
const EMAILJS_TEMPLATE_ID = "template_xxzx34n";

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

// Sends a status email to a renter. Never throws — email failures shouldn't block booking actions.
async function sendStatusEmail(booking, statusTitle, statusMessage){
  if (!window.emailjs) return false;
  if (EMAILJS_PUBLIC_KEY.startsWith("PASTE_")) {
    console.warn("EmailJS is not configured yet — skipping email send. Fill in emailjs-config.js.");
    return false;
  }
  try{
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: booking.email,
      to_name: booking.name,
      status_title: statusTitle,
      status_message: statusMessage,
      car_type: booking.vanType,
      pickup: booking.pickupText,
      start_date: booking.startDate,
      end_date: booking.endDate
    });
    return true;
  }catch(e){
    console.error("EmailJS send failed:", e);
    return false;
  }
}
