// Feature flags for KLEERO landing.
// Toggle these to enable/disable functionality without deleting code.
export const FEATURES = {
  // Set to true once Twilio WhatsApp sandbox is replaced with production number
  // and the async webhook fix (502 timeout on receipt photos) is deployed.
  SHOW_WHATSAPP: false,
} as const;