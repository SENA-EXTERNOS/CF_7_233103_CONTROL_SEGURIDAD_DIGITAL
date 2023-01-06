export default {
  global: {
    componenteFormativo: 'Ciberseguridad, herramientas de monitoreo y control',
    descripcionCurso:
      'La configuración, operación, validación y verificación de herramientas de control de seguridad digital, que permiten mitigar los riesgos según procedimientos técnicos de la política y normatividad de la ciberseguridad, aspecto fundamental para verificar la funcionalidad y el cumplimiento de la cadena de custodia de los incidentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de <em> hardware</em> y <em> software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manuales técnicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Configuración básica de equipos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Monitoreo de equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Herramientas de monitoreo y gestión',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas de protección y control',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Respuesta a incidentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Validación de controles de seguridad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cadenas de custodia',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manuales técnicos',
      referencia:
        'Perdigón Llanes, R. (2022). Evaluación Del Rendimiento De Cortafuegos Basados En Software Libre. NOVASINERGIA 5(1), p. 31-42.',
      tipo: 'Articulo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_43539a8d908740c09c11297e9b1b872a ',
    },
    {
      tema: 'Respuesta a incidentes',
      referencia:
        'Chicano Tejada, E. (2014). Gestión De Incidentes De Seguridad Informática. IC Editorial.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB44101 ',
    },
    {
      tema: 'Herramientas de protección y control',
      referencia:
        'The Economist. (2003). Herramientas para la seguridad: de como un paquete de trucos tecnológicos puede mejorar, pero no garantizar, su seguridad. En Gestión de TI.  (p. VI-IX) Nexos. Sociedad, ciencia y literatura S.A. 25(310).',
      tipo: 'Capítulo de artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_lrcgauss_A110619588 ',
    },
    {
      tema: 'Herramientas de protección y control',
      referencia:
        'Hámornik, B. P. & Krasznay, C. (2019). Human Factors Approach to Cybersecurity Teamwork The Military Perspective. Advances in Military Technology. 2(14), p. 291-305.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_virtualprovpro21063',
    },
  ],
  glosario: [
    {
      termino: 'Acelerador <em>SSL/TLS</em>',
      significado:
        '<em>Secure Sockets Layer</em> (SSL) son protocolos criptográficos que se utilizan con certificados de confianza para garantizar que la comunicación en las redes sea segura.',
    },
    {
      termino: 'Antivirus',
      significado:
        'permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuestos a <em>software</em> malicioso o cualquier otro tipo de <em>malware.</em>',
    },
    {
      termino: 'Candado universal para portátil',
      significado:
        'candado con cable de seguridad utilizado para anclar los laptop en un lugar fijo.',
    },
    {
      termino: 'Cartera digital',
      significado:
        'también conocida como <em>e-wallet,</em> es una espacio virtual donde se almacenan datos bancarios, tarjeta de crédito, entre otros.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'sistema para prevenir y proteger la red privada de ataques de otras redes.',
    },
    {
      termino: '<em>Firewall</em> por <em>hardware</em>',
      significado:
        'unidad física tipo <em>box</em> que protege la red de amenazas externas. El dispositivo se instala entre el servidor de la empresa y el internet, permitiendo o denegando el acceso de datos según condiciones específicas del usuario.',
    },
    {
      termino: 'Formación del personal',
      significado:
        'aunque no esté catalogada como herramienta tecnológica,  es importante contar con funcionarios que tengan conocimientos básicos y precavidos al momento de interactuar con las herramientas o dispositivos que almacenan la información.',
    },
    {
      termino: '<em>Hardware</em> de cifrado',
      significado:
        'procesador que maneja cifrado de los datos mediante clave pública o privada. Su función es alojar algoritmos que permiten cifrado o descifrado de esos datos.',
    },
    {
      termino: 'Llave U2F',
      significado:
        'unidad USB de doble autenticación que permite generar claves para ingreso seguros es diversos lugares, la persona que no posea esta llave, no podrá vulnerar las cuentas del propietario.',
    },
    {
      termino: 'MDR – <em>Managed Detection and Response</em>',
      significado:
        'es un servicio en seguridad avanzado, donde se proporciona la búsqueda de amenazas y monitoreo inteligente de las mismas.',
    },
    {
      termino: '<em>Pentesting</em>',
      significado:
        'Pruebas que realizan los expertos mediante técnicas avanzadas para detectar posibles amenazas o áreas con puntos débiles que los piratas informáticos pueden aprovechar.',
    },
    {
      termino: '<em>Proxy</em>',
      significado:
        'programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e internet, filtrando todos los paquetes entre ambos.',
    },
    {
      termino: '<em>Router</em> VPN – VPN <em>Box</em>',
      significado:
        'dispositivo que soporta redes virtuales privadas (VPN) con el propósito de redirigir el tráfico de internet a través de redes privadas seguras.',
    },
    {
      termino: 'Sensores biométricos',
      significado:
        'son sistemas mecánicos o electrónicos que se usan para leer o capturar las huellas dactilares. En ciberseguridad, los sensores biométricos se usan como control de acceso a lugares donde está almacenada la información; si el usuario no es reconocido por el sensor, el acceso al sitio será denegado.',
    },
    {
      termino: 'Sistema de pago seguro',
      significado:
        'pago electrónico a través de tarjetas físicas mediante datafonos que pueden soportar banda magnética, chip, o tarjeta de proximidad.',
    },
    {
      termino: 'Tokens PKI',
      significado:
        '<em>Public Key Infrastructure</em> (infraestructura de clave pública), es un sistema que proporciona certificados digitales, además de claves privadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República. (2022). <em> Manual de sistemas de pago circular externa operativa y de servicios</em>. DSP -158.  ',
      link: '',
    },
    {
      referencia:
        'Boronat Pérez, A. (s.f.).  <em> Servidor proxy caché squid.</em>',
      link: '',
    },
    {
      referencia:
        'Cárdenas, A., Galvis, A., Ospina J. y Pérez, R. (s.f.). <em> Manual de Usuario de Pfsense Firewall.</em> Sense FreeBSD',
      link: '',
    },
    {
      referencia: 'Cisco. (s.f.). <em> Manual Cisco MX67W.</em> ',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de Función Pública -DAFP. (2020). <em>Guía para gestionar incidentes de seguridad de la información.</em> Proceso de Tecnologías de la Información.',
      link: '',
    },
    {
      referencia:
        'Efirma. (2016). <em> Guía de uso. Administración de Token ME Bit4id - PKI Manager.</em> ',
      link: '',
    },
    {
      referencia:
        'Esentire. (s.f.).  <em>The Definitive Guide to Managed Detection and Response (MDR).</em> ',
      link: '',
    },
    {
      referencia:
        'Garzón, J. & Gaviria Valencia, R.  (2015).  <em> Guía práctica para pruebas de pentest basada en la metodología OSSTMM v2.1 y la guía OWASP v3.0</em> ',
      link: '',
    },
    {
      referencia:
        'Hapag-Lloyd. (s.f.). <em> Manual de la llave de seguridad ePass FIDO-NFC MultiPass.</em>',
      link:
        'https://manuals.plus/es/feitian/epass-fido-nfc-multipass-security-key-manual#user_manual',
    },
    {
      referencia:
        'Kaspersky. (2020). <em>Kaspersky Endpoint Security para Windows. AO Kaspersky Lab</em>',
      link: '',
    },
    {
      referencia:
        'Kaspersky. (s.f.). <em> Ransomware: los ataques más resonantes.</em>',
      link:
        'https://latam.kaspersky.com/resource-center/threats/top-ransomware-2020',
    },
    {
      referencia:
        'Kensington. (s.f.). <em>Kensington Combination Laptop Lock manual.</em>',
      link: '',
    },
    {
      referencia:
        'Kingston. (s.f.). <em> Unidad con autocifrado basada en hardware con NAND TLC 3D.</em>',
      link: '',
    },
    {
      referencia:
        'Microsoft Ignite. (s.f.). <em> Servidor de red de Microsoft SMB v1: firmar digitalmente las comunicaciones (siempre)</em>',
      link:
        'https://learn.microsoft.com/es-es/windows/security/threat-protection/security-policy-settings/smbv1-microsoft-network-server-digitally-sign-communications-always ',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones – MinTic. (2022). <em> Guía No 8. Controles de Seguridad y Privacidad de la Información.</em>',
      link: '',
    },
    {
      referencia:
        'Organización de Estados Americanos -OEA. (2016). <em> Buenas Prácticas para establecer un CSIRT nacional.</em>',
      link: '',
    },
    {
      referencia:
        'Satizibal, J. (2020). <em> Manual de usuario carpeta ciudadana digital. Agencia Nacional Digital.</em>',
      link: '',
    },
    {
      referencia: 'SolarWinds, (s.f.). <em> Innovar la TI</em>.',
      link: 'https://www.solarwinds.com/es/',
    },
    {
      referencia:
        'Solomon. (2018). <em> Reloj Control FPT MANUAL DE USUARIO TERMINAL FPT Biométrico Reloj Control FPT-153.</em>',
      link:
        'https://www.solomon.cl/wp-content/uploads/2019/11/Manual-FPT-153.pdf',
    },
    {
      referencia: 'Trendnet. (2022). <em> TW100-BRV214</em>',
      link:
        'http://downloads.trendnet.com/TW100-BRV214/manual/SP_Web_TW100-BRV214(1.01).pdf',
    },
    {
      referencia:
        'Zoller, T. (s.f.).  <em> SSL Audit – TLS / SSL Scanner. G-SEC.</em>',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
