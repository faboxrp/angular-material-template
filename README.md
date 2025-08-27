# Angular Material Template

Una plantilla moderna de Angular con Material Design que implementa las mejores prácticas y los últimos estándares de Angular 20.

## ✨ Características

- **Angular 20** - Última versión con standalone components
- **Material Design 3** - Componentes de Angular Material con theming personalizado
- **Server-Side Rendering (SSR)** - Configuración completa con Angular Universal
- **Responsive Design** - Layout adaptativo usando Angular CDK Layout
- **Theming Avanzado** - Sistema de temas personalizable con soporte para modo claro/oscuro
- **TypeScript** - Tipado fuerte y configuración moderna
- **Testing Ready** - Configurado con Jasmine y Karma

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/faboxrp/angular-material-template.git

# Navegar al directorio
cd angular-material-template

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200/
```

### Build

```bash
# Build para producción
npm run build

# Build para desarrollo con watch mode
npm run watch
```

### Testing

```bash
# Ejecutar tests
npm test
```

### SSR (Server-Side Rendering)

```bash
# Build y servir con SSR
npm run build
npm run serve:ssr:angular-material-template
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── component-dashboard/     # Dashboard con grid responsive
│   ├── component-navigation/    # Navegación lateral con toolbar
│   ├── component-tree/         # Componente de árbol jerárquico
│   ├── component-drag-ndrop/   # Funcionalidad drag & drop
│   ├── app.ts                  # Componente raíz standalone
│   ├── app.html                # Template principal
│   └── app.css                 # Estilos globales
├── custom-theme.scss           # Tema personalizado Material Design
├── _theme-colors.scss          # Paleta de colores personalizada
├── styles.css                  # Estilos globales de la aplicación
├── docs/
│   └── theming.md             # Documentación de theming
└── public/                     # Assets estáticos
```

## 🎨 Theming y Personalización

El proyecto utiliza el nuevo sistema de theming de Angular Material v19 con:

- **Paletas de colores personalizadas** definidas en `_theme-colors.scss`
- **Soporte automático para modo claro/oscuro** usando `light-dark()` CSS function
- **Tipografía Roboto** con pesos personalizados
- **Variables CSS del sistema** de Material Design 3

### Personalizar Colores

Para cambiar los colores del tema, modifica el archivo `src/_theme-colors.scss`:

```scss
$primary-palette: mat.define-palette(mat.$blue-palette);
$tertiary-palette: mat.define-palette(mat.$orange-palette);
```

### Modo Oscuro

El tema soporta automáticamente modo claro y oscuro basado en las preferencias del sistema. Para forzar un modo específico, modifica el `color-scheme` en `custom-theme.scss`.

## 📱 Componentes Incluidos

### Navigation Component
- Navegación lateral responsiva
- Toolbar con menú hamburguesa
- Adaptación automática a dispositivos móviles

### Dashboard Component
- Grid layout responsivo
- Cards con Material Design
- Adaptación automática de columnas según el tamaño de pantalla

### Tree Component
- Estructura de árbol jerárquica
- Expandible/colapsable
- Iconos de Material

### Drag & Drop Component
- Funcionalidad de arrastrar y soltar
- Integración con Angular CDK

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 20, TypeScript 5.9
- **UI**: Angular Material 20, Angular CDK
- **Styling**: SCSS, Material Design 3
- **Build**: Angular CLI, Webpack
- **SSR**: Angular Universal, Express
- **Testing**: Jasmine, Karma
- **Code Quality**: Prettier

## 📦 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Build para producción
- `npm run watch` - Build en modo watch
- `npm test` - Ejecuta los tests
- `npm run serve:ssr` - Sirve la aplicación con SSR

## 🎯 Roadmap

- [ ] Implementar PWA capabilities
- [ ] Añadir más componentes de Material Design
- [ ] Integrar i18n para múltiples idiomas
- [ ] Añadir más ejemplos de theming
- [ ] Implementar lazy loading para módulos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 

## 🔗 Enlaces Útiles

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.dev)
- [Material Design 3](https://m3.material.io)
- [Angular CDK](https://material.angular.dev/cdk)

---

**Nota**: Este template está configurado con las mejores prácticas de Angular y Material Design. Es una excelente base para proyectos empresariales y aplicaciones modernas.
