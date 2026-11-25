/* Ícones em SVG inline (traço 1.8) e logotipo vetorial provisório da Matuto Motos. */
(function () {
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    heart: '<path d="M12 20.3s-7.4-4.5-9.3-9C1.4 8.1 3.3 4.6 6.9 4.6c2.2 0 3.6 1.3 5.1 3 1.5-1.7 2.9-3 5.1-3 3.6 0 5.5 3.5 4.2 6.7-1.9 4.5-9.3 9-9.3 9z"/>',
    bag: '<path d="M5 8h14l-1.2 12.1a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    right: '<path d="m9 5 7 7-7 7"/>',
    left: '<path d="m15 5-7 7 7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m6 15 6-6 6 6"/>',
    arrowRight: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    store: '<path d="M4 10v10h16V10"/><path d="M3 10 5 4h14l2 6"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12.4 2.8 2.8 5.4-5.6"/>',
    shield: '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    box: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    filter: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    sort: '<path d="M7 4v16M3.5 16.5 7 20l3.5-3.5M17 20V4M13.5 7.5 17 4l3.5 3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="m14 6 4 4"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c5 0 9 6 9 6a16 16 0 0 1-2.6 3.2M6.6 6.6C4.3 8.1 3 12 3 12s4 6 9 6c1.5 0 2.9-.4 4.1-1.1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
    eye: '<path d="M3 12s4-6.5 9-6.5S21 12 21 12s-4 6.5-9 6.5S3 12 3 12z"/><circle cx="12" cy="12" r="3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    download: '<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
    scan: '<path d="M3 7.5V4h3.5M21 7.5V4h-3.5M3 16.5V20h3.5M21 16.5V20h-3.5"/><path d="M7 8v8M10 8v8M13.5 8v8M17 8v8"/>',
    sheet: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 15.5h7M9 19h7M12 12v7"/>',
    alert: '<path d="M12 3.5 2.5 20h19L12 3.5z"/><path d="M12 10v4.5M12 17.2v.01"/>',
    imageOff: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m3 16 5-5 4 4 3-3 6 6"/><path d="M3 3l18 18"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m3 18 5-5 4 4 3-3 6 6"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8-10-10z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
    cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/>',
    idCard: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M5.8 16.2c.6-1.4 1.8-2.2 3.2-2.2s2.6.8 3.2 2.2M15 10h3.5M15 13.5h3.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.2"/><rect x="13" y="4" width="7" height="7" rx="1.2"/><rect x="4" y="13" width="7" height="7" rx="1.2"/><rect x="13" y="13" width="7" height="7" rx="1.2"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    wrench: '<path d="M20.5 7.6a4.6 4.6 0 0 1-6.1 4.4l-7.1 7.1a2.1 2.1 0 0 1-3-3l7.1-7.1a4.6 4.6 0 0 1 5.9-5.9l-2.9 2.9.4 2.6 2.6.4 3-3c.1.5.1 1 .1 1.6z"/>',
    moto: '<circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16 9.5 10H14l4.5 6"/><path d="M9.5 10 8 7.5H5.5M14 10l-1.6-3.2H15.5l1.4 2.7"/><path d="M10.5 16h3.5"/>',
    garage: '<path d="M3 10 12 4l9 6v10H3z"/><path d="M7 20v-6h10v6M7 17h10"/>',
    chart: '<path d="M4 20V11M10 20V5M16 20v-6M2.5 20h19"/>',
    trend: '<path d="M3 17 9 11l4 4 8-8"/><path d="M14 7h7v7"/>',
    entrada: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 20h14"/>',
    saida: '<path d="M12 20V8M7 13l5-5 5 5"/><path d="M5 4h14"/>',
    ajuste: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',
    logout: '<path d="M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4M16 17l5-5-5-5M21 12H9"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    dots: '<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8v.01"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.2 14c2 .7 3.3 2.7 3.3 6"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    message: '<path d="M4 5h16v11H8.5L4 20V5z"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    swap: '<path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>',
    printer: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3"/><path d="M7 14h10v7H7z"/>',
    zap: '<path d="M13 2.5 4.5 14h7l-1 7.5L19 10h-7l1-7.5z"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z" fill="currentColor" stroke="none"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10.5V4.5a1.5 1.5 0 0 1 3 0v6M14 10.5V6a1.5 1.5 0 0 1 3 0v7c0 4.4-2.5 8-6.5 8-2.6 0-4.3-1.5-5.6-3.6L3.4 14.6a1.5 1.5 0 0 1 2.5-1.7L8 15.5"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/>',
    cart: '<path d="M3 4h2.5l2.2 11h10.6l2.2-8H6.6"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
    /* categorias */
    cMotor: '<rect x="7" y="3" width="10" height="9" rx="1.5"/><path d="M7 6.2h10M7 8.8h10"/><path d="M10.2 12 9.3 16.8M13.8 12l.9 4.8"/><circle cx="12" cy="18.6" r="2.4"/>',
    cTransmissao: '<circle cx="12" cy="12" r="5.6"/><circle cx="12" cy="12" r="1.8"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    cFreios: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.6"/><path d="M12 6.4v.01M17.6 12h.01M12 17.6v.01M6.4 12h.01M15.9 8.1h.01M15.9 15.9h.01M8.1 15.9h.01M8.1 8.1h.01"/><path d="M18.6 5.6a9 9 0 0 1 2.3 4.6" stroke-width="3.2"/>',
    cEletrica: '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M7 7.5V5.5h3v2M14 7.5V5.5h3v2"/><path d="M6.8 13.5h3.2M14 13.5h3.2M15.6 11.9v3.2"/>',
    cIluminacao: '<path d="M10.5 5.5a6.5 6.5 0 0 0 0 13H12v-13h-1.5z"/><path d="M15.5 8 21 6.5M15.5 12H21.5M15.5 16l5.5 1.5"/>',
    cSuspensao: '<circle cx="12" cy="3.8" r="1.8"/><circle cx="12" cy="20.2" r="1.8"/><path d="M12 5.6V7.5M12 16.5v1.9"/><path d="M8 7.5h8M8 16.5h8"/><path d="m9 7.8 6 1.4-6 1.4 6 1.4-6 1.4 6 1.4"/>',
    cPneus: '<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="4.6"/><path d="M12 3.2v2.2M12 18.6v2.2M3.2 12h2.2M18.6 12h2.2M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M5.8 18.2l1.5-1.5M16.7 7.3l1.5-1.5"/>',
    cOleos: '<path d="M12 3s-6 6.6-6 10.6a6 6 0 0 0 12 0C18 9.6 12 3 12 3z"/><path d="M9.4 14.2A2.6 2.6 0 0 0 12 16.8"/>',
    cCarenagens: '<path d="M3 15.5c2.2-5.2 6-8.3 12-8.3h5.5l-2.1 5.1c-1 2.6-3.1 4.2-6 4.2H3z"/><path d="M8.5 12h6"/>',
    cCabos: '<path d="M4 6.5h5.5l10 4.6a1.5 1.5 0 0 1-1.1 2.8L9 11H4z"/><path d="M4 11c0 5 3.5 8.5 8 8.5h8"/>',
    cAcessorios: '<rect x="4" y="7.5" width="16" height="12" rx="3"/><path d="M4 12.5h16M10 12.5v2h4v-2M8 7.5v-2h8v2"/>',
    cRodas: '<circle cx="12" cy="12" r="8.8"/><circle cx="12" cy="12" r="2"/><path d="M12 10V3.6M13.7 13l5.5 3.3M10.3 13l-5.5 3.3M13.8 11.2l6-2.6M10.2 11.2l-6-2.6M12 14v6.4"/>',
    cProtetores: '<path d="M5.5 4.5v8a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4v-8"/><path d="M5.5 9h13"/><rect x="3.5" y="13" width="3.2" height="6" rx="1.2"/><rect x="17.3" y="13" width="3.2" height="6" rx="1.2"/>',
    cRetrovisores: '<ellipse cx="14.5" cy="7.5" rx="6.5" ry="4.2" transform="rotate(-18 14.5 7.5)"/><path d="M10.5 11.3 6.5 20"/><path d="M4.5 20.2h4"/>',
    cCapacetes: '<path d="M3.5 15.2a8.5 8.5 0 0 1 17-2.2v3.6H11.2l-2 2H4.5a1 1 0 0 1-1-1v-2.4z"/><path d="M11.2 10.2h9.1M11.2 10.2v6.4"/>',
  };

  const WHATS = '<path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/>';

  function icon(nome, cls) {
    if (nome === 'whatsapp') {
      return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + WHATS + '</svg>';
    }
    const p = P[nome] || P.info;
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }

  /* Pix (losango estilizado) */
  const PIX = '<svg class="ic pix" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1.8 15.7 5.5l-2.3 2.3a2 2 0 0 1-2.8 0L8.3 5.5 12 1.8zm0 20.4-3.7-3.7 2.3-2.3a2 2 0 0 1 2.8 0l2.3 2.3-3.7 3.7zM1.8 12l3.7-3.7 2.3 2.3a2 2 0 0 1 0 2.8l-2.3 2.3L1.8 12zm20.4 0-3.7 3.7-2.3-2.3a2 2 0 0 1 0-2.8l2.3-2.3 3.7 3.7z"/></svg>';

  /* Selo (redesenho vetorial provisório do logo das artes) */
  function selo(cls) {
    return '<svg class="selo ' + (cls || '') + '" viewBox="0 0 240 214" role="img" aria-label="Moto Matuto Peças — Distribuidora">' +
      '<path d="M6 70H34l3-37C62 18 90 10 120 10s58 8 83 23l3 37h28v52h-32l-6 28c-20 22-46 36-76 44-30-8-56-22-76-44l-6-28H6z" fill="#fff" stroke="#fff" stroke-width="12" stroke-linejoin="round"/>' +
      '<path d="M6 70H34l3-37C62 18 90 10 120 10s58 8 83 23l3 37h28v52h-32l-6 28c-20 22-46 36-76 44-30-8-56-22-76-44l-6-28H6z" fill="#0d0d0d" stroke="#FCDD08" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M46 34c22-11 46-16 74-16s52 5 74 16" fill="none" stroke="#FCDD08" stroke-width="2" opacity=".55"/>' +
      '<text x="120" y="63" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="35" letter-spacing="3" fill="#FCDD08">MOTO</text>' +
      '<rect x="10" y="73" width="220" height="46" fill="#0d0d0d" stroke="#FCDD08" stroke-width="3"/>' +
      '<text x="120" y="108" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="44" textLength="186" lengthAdjust="spacingAndGlyphs" fill="#fff">MATUTO</text>' +
      '<text x="120" y="117.5" text-anchor="middle" font-family="Barlow Condensed" font-weight="700" font-size="9" letter-spacing="3.2" fill="#FCDD08">DISTRIBUIDORA</text>' +
      '<text x="120" y="158" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="35" letter-spacing="3" fill="#FCDD08">PEÇAS</text>' +
      '<path d="M68 136 58 146l10 10M172 136l10 10-10 10" fill="none" stroke="#FCDD08" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<text x="122" y="204" text-anchor="middle" transform="rotate(-4 120 196)" font-family="Kaushan Script" font-size="27" fill="#FCDD08" stroke="#0d0d0d" stroke-width="6" paint-order="stroke" stroke-linejoin="round">Cuida e Acelera!!</text>' +
      '</svg>';
  }

  /* Logo horizontal do cabeçalho: selo + nome */
  function logo(cls) {
    return '<span class="logo ' + (cls || '') + '">' + selo() +
      '<span class="logo-txt"><b>MATUTO MOTOS</b><small>Distribuidora de peças</small></span></span>';
  }

  window.ICON = icon;
  window.PIX = PIX;
  window.SELO = selo;
  window.LOGO = logo;
})();
