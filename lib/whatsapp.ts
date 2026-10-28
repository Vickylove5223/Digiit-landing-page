export const WHATSAPP_RAW_PHONE = '07086429380'
export const WHATSAPP_INTL_PHONE = '2347086429380'

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled custom message.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Hello Digiit, I would like to learn more about your employee loans.'
  const text = encodeURIComponent(message || defaultMsg)
  return `https://wa.me/${WHATSAPP_INTL_PHONE}?text=${text}`
}

/**
 * Pre-configured WhatsApp URL for "Talk to sales" CTAs.
 */
export const TALK_TO_SALES_WHATSAPP_URL = getWhatsAppUrl(
  'Hello Digiit, I would like to talk to sales about Digiit employee loan solutions for my organization.'
)

/**
 * Pre-configured WhatsApp URL for general support & floating chat widget.
 */
export const GENERAL_SUPPORT_WHATSAPP_URL = getWhatsAppUrl(
  'Hello Digiit, I would like to learn more about Digiit employee loans.'
)
