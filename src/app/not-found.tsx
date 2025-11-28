<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Componente No Encontrado | Portfolio Vercel</title>
    <!-- Carga de Tailwind CSS para un estilo moderno y oscuro -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Define un color de fondo base para el cuerpo */
        body {
            background-color: #0d1117; /* Color similar al de GitHub/Vercel Dark */
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        }
        /* Estilos de enfoque para el botón */
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        /* ------------------------------------- */
        /* Animación del Fantasma (Ghost) */
        /* ------------------------------------- */
        /* Define los keyframes para el movimiento sutil */
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(-1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        /* Aplica la animación al emoji */
        .ghost-float {
            animation: float 4s ease-in-out infinite;
        }
    </style>
</head>
<body>

    <!-- Contenedor Principal de la Alerta -->
    <div class="max-w-xl w-full mx-4 p-8 sm:p-12 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl text-white text-center transition duration-500 ease-in-out transform hover:shadow-indigo-500/30">
        
        <div class="mb-6">
            <!-- Icono de Error (simulando un emoji grande y animado) -->
            <p class="text-7xl mb-4 ghost-float" role="img" aria-label="Fantasma o calavera">👻</p>

            <!-- Código de Error -->
            <p class="text-6xl sm:text-7xl font-extrabold text-red-500 font-mono tracking-widest">
                404
            </p>
        </div>
        
        <!-- Título Graciosos y Relevante a Vercel/Next.js -->
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
            ¡Componente Perdido! (Error de Hydration)
        </h1>
        
        <!-- Mensaje Principal con Referencias Técnicas -->
        <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            Esta ruta parece estar "deshidratada" o el componente que buscabas no se renderizó. Vercel no pudo encontrar la página.
        </p>

        <!-- Bloque de Consejos Rápidos (Debug) -->
        <div class="bg-[#21262d] p-4 rounded-lg text-left mb-8 border border-[#30363d]">
            <p class="font-semibold text-indigo-400 mb-2">
                &lt;DebugTip /&gt;:
            </p>
            <ul class="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>Verifica si la ruta en el archivo `pages/` (o `app/`) es correcta.</li>
                <li>Comprueba que no falte ningún `import` o `export` de tu componente.</li>
                <li>Si no funciona, probablemente haya que hacer un `npm install` de nuevo.</li>
            </ul>
        </div>

        <!-- Botón de Acción Principal -->
        <a href="/" class="btn-primary inline-block px-10 py-3 bg-indigo-600 text-white font-semibold rounded-full text-lg shadow-xl transition duration-300 ease-in-out">
            Volver al Main Layout (Inicio)
        </a>
        
    </div>

</body>
</html>
