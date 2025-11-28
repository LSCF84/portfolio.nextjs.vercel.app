"use client";
import React from 'react';
// Usamos solo etiquetas <a> estándar en lugar de next/link para mayor compatibilidad en el entorno de compilación.

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117] text-white">
      {/* El estilo de la animación se incluye con <style jsx> (o <style jsx global>) para una implementación 
        rápida dentro del componente.
        CORRECCIÓN: Se pasó explícitamente `jsx={true}` y `global={true}` para eliminar la advertencia de React.
      */}
      <style jsx={true} global={true}>{`
        /* ------------------------------------- */
        /* Animación del Robot */
        /* ------------------------------------- */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); } /* Sutil movimiento hacia arriba y rotación */
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .robot-float {
          animation: float 4s ease-in-out infinite;
        }

        /* Estilos de enfoque para el botón */
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Contenedor Principal de la Alerta */}
      <div className="max-w-xl w-full mx-4 p-8 sm:p-12 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl text-center transition duration-500 ease-in-out transform hover:shadow-indigo-500/30">
        
        <div className="mb-6">
          {/* Icono del Robot (animado) */}
          <p className="text-7xl mb-4 robot-float" role="img" aria-label="Robot de error">🤖</p>

          {/* Código de Error */}
          <p className="text-6xl sm:text-7xl font-extrabold text-red-500 font-mono tracking-widest">
            404
          </p>
        </div>
        
        {/* Título Graciosos y Relevante a Vercel/Next.js */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
          ¡Componente Perdido! (Error de Hydration)
        </h1>
        
        {/* Mensaje Principal con Referencias Técnicas */}
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Esta ruta parece estar "deshidratada" o el componente que buscabas no se renderizó. Vercel no pudo encontrar la página.
        </p>

        {/* Bloque de Consejos Rápidos (Debug) */}
        <div className="bg-[#21262d] p-4 rounded-lg text-left mb-8 border border-[#30363d]">
          <p className="font-semibold text-indigo-400 mb-2">
            &lt;DebugTip /&gt;:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Verifica si la ruta en el archivo `pages/` (o `app/`) es correcta.</li>
            <li>Comprueba que no falte ningún `import` o `export` de tu componente.</li>
            <li>Si no funciona, probablemente haya que hacer un `npm install` de nuevo.</li>
          </ul>
        </div>

        {/* Botón de Acción Principal */}
