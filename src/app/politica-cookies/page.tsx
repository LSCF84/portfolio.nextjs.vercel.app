import Link from 'next/link';
import { Metadata } from 'next';

// Nota: La fuente Poppins ya está cargada en el layout principal.

export const metadata: Metadata = {
  title: 'Política de Cookies | LSCF Development Hub',
  description: 'Política de uso de cookies para el portfolio personal.',
};

const CookiePolicyPage = () => {
  const lastUpdated = "27 de noviembre de 2025";
  const siteUrl = "https://portfolio-nextjs-vercel-app.vercel.app/";
  const contactEmail = "l.sergio.camacho.fernandez@gmail.com"; // **IMPORTANTE: Reemplaza con tu email de contacto real**

  // Definición de colores principales usados consistentemente con el tema general
  const primaryColor = 'text-indigo-600 dark:text-indigo-400';
  const containerBg = 'bg-white dark:bg-gray-800';
  const sectionBg = 'bg-gray-100 dark:bg-gray-700';
  const textColor = 'text-gray-700 dark:text-gray-300';
  const titleColor = 'text-gray-900 dark:text-white';
  
  return (
    // Usa un contenedor flexbox para asegurar que el contenido se centre vertical y horizontalmente
    // La clase 'min-h-screen' y el fondo global deben estar en el layout, pero lo replicamos aquí por seguridad.
    <div className="flex flex-col items-center pt-16 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition duration-300">
      <div className={`max-w-4xl mx-auto w-full ${containerBg} p-8 sm:p-12 rounded-xl shadow-2xl transition-colors duration-300`}>

        <h1 className={`text-4xl font-extrabold ${titleColor} mb-6 border-b border-gray-200 dark:border-gray-700 pb-3`}>
          🍪 Política de Cookies
        </h1>

        <p className={`mb-8 text-lg ${textColor}`}>
          Esta Política de Cookies se aplica al sitio web{' '}
          <a href={siteUrl} className={`underline font-semibold hover:opacity-80 transition-opacity ${primaryColor}`}>
            {siteUrl.replace('https://', '')}
          </a>.
        </p>

        {/* Sección 1: Definición de Cookies */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          1. Definición de Cookies
        </h2>
        <p className={`mb-4 ${textColor}`}>
          Las cookies son pequeños archivos de texto que se almacenan en su navegador o dispositivo para recordar información sobre su visita.
        </p>
        
        {/* Sección 2: Cookies utilizadas */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          2. Tipos de Cookies Utilizadas
        </h2>
        <div className="space-y-6">
          
          {/* Tarjeta 1: Necesarias */}
          <div className={`p-5 ${sectionBg} rounded-lg shadow-inner`}>
            <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>
              Cookies Estrictamente Necesarias
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Son fundamentales para la navegación y las funcionalidades esenciales de la aplicación Next.js (ej: rehidratación, modo oscuro, consentimiento).
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4 mt-2 space-y-1">
              <li>**Framework:** Cookies relacionadas con el enrutamiento y la optimización de Next.js.</li>
              <li>**Tema:** Almacena su preferencia de modo oscuro/claro.</li>
              <li>**Consentimiento:** Almacena su decisión para evitar que el banner reaparezca innecesariamente.</li>
            </ul>
            <p className="text-xs font-medium text-green-600 dark:text-green-400 mt-3">
              Base legal: Interés legítimo (Necesidad técnica).
            </p>
          </div>
          
          {/* Tarjeta 2: Analítica */}
          <div className={`p-5 ${sectionBg} rounded-lg shadow-inner`}>
            <h3 className={`text-xl font-semibold ${titleColor} mb-2`}>
              Cookies de Análisis y Rendimiento (Terceros)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Recopilan información anónima sobre el uso del sitio, permitiéndonos medir el rendimiento y mejorar la experiencia (ej: Google Analytics, Vercel Analytics).
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 ml-4 mt-2 space-y-1">
              <li>**Métricas:** Páginas vistas, tiempo de permanencia, fuentes de tráfico.</li>
            </ul>
            <p className="text-xs font-medium text-red-600 dark:text-red-400 mt-3">
              Base legal: Consentimiento explícito del usuario.
            </p>
          </div>
          
        </div>
        
        {/* Sección 3: Gestión y Revocación */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          3. Control de Preferencias y Revocación
        </h2>
        
        <p className={`mb-6 ${textColor}`}>
          Usted puede cambiar su decisión sobre el uso de cookies no esenciales en cualquier momento.
        </p>
        
        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg border-l-4 border-yellow-500">
            <p className="text-base font-semibold text-yellow-800 dark:text-yellow-300">
                ⚙️ ¿Cómo gestionarlas?
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                Para modificar su consentimiento, simplemente vuelva a la página principal y haga clic en el botón flotante o en el enlace de **"Gestionar Cookies"** para abrir el panel de configuración.
            </p>
        </div>
        
        {/* Nueva Sección 4: Contacto */}
        <h2 className={`text-2xl font-bold ${titleColor} mt-8 mb-4`}>
          4. Contacto
        </h2>
        <p className={`mb-4 ${textColor}`}>
            Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos a través del siguiente correo electrónico:
        </p>
        <p className={`font-semibold ${primaryColor}`}>
            <a href={`mailto:${contactEmail}`} className="hover:underline transition-opacity">
                {contactEmail}
            </a>
        </p>

        <p className={`text-sm text-gray-500 dark:text-gray-400 mt-10 text-center border-t border-gray-200 dark:border-gray-700 pt-4`}>
            Última actualización: {lastUpdated}
        </p>

        {/* Enlace para volver a la página principal */}
        <div className="text-center mt-6">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]">
              Volver al Portafolio
            </a>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CookiePolicyPage;
