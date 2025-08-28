# Chainsaw Man : Reze Arc

[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-17+-007ACC?style=flat-square&logo=primeng)](https://primeng.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)

##  Overview

Enterprise-grade Angular application featuring an immersive Chainsaw Man themed interface with advanced component architecture, leveraging PrimeNG's robust UI component library for enhanced user experience.

##  Architecture

### Core Structure
```
src/
├── app/
│   ├── componentes/
│   │   ├── container-2/           # Secondary container module
│   │   └── container-principal/   # Main container module
│   ├── app.config.ts             # Application configuration
│   ├── app.routes.ts             # Routing configuration
│   └── app.ts                    # Root component
├── assets/
│   └── img-episodes/             # Episode imagery assets
└── styles.css                   # Global stylesheets
```

### Component Hierarchy
- **Container Principal**: Primary layout component 
- **Container 2**: Secondary modular component for content segregation
- **Modular Architecture**: Scalable component-based structure following Angular best practices

##  Technology Stack

### Frontend Framework
- **Angular 17+**: Modern TypeScript-based framework
- **TypeScript 5.0+**: Strongly-typed superset of JavaScript

### UI Components & Animations
- **PrimeNG**: Enterprise-class UI component suite
  - **Galleria**: High-performance image gallery with thumbnail navigation
  - **Toast**: Non-intrusive notification system
  - **AnimateOnScroll**: Scroll-triggered animations for enhanced UX

### Development Tools
- **Angular CLI**: Command-line interface for Angular development
- **Webpack**: Module bundler with tree-shaking optimization

##  PrimeNG Implementation

### Galleria Component
Advanced image gallery with carousel functionality for episode showcase

### Toast Notifications
Real-time notification system for user feedback and status updates

### AnimateOnScroll
Scroll-triggered animations that enhance visual engagement as content comes into view

## Installation & Setup

### Prerequisites
```bash
Node.js >= 18.x
npm >= 9.x
Angular CLI >= 17.x
```

### Installation
```bash
# Clone repository
git clone <repository-url>
cd chainsaw-man-app

# Install dependencies
npm install

# Install PrimeNG and dependencies
npm install primeng primeicons
npm install @angular/animations

# Development server
ng serve
```

### Build Configuration
```bash
# Production build
ng build --configuration production

# Bundle analysis
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
```

##  Features

### Core Functionality
- **Episode Gallery**: Interactive media showcase with PrimeNG Galleria
- **Toast Notifications**: Real-time user feedback system
- **Modular Components**: Reusable and maintainable architecture
- **Performance Optimized**: Lazy loading and tree-shaking implementation

### PrimeNG Integrations
- **Advanced Animations**: Smooth transitions and micro-interactions
- **Cross-browser Compatibility**: IE11+ support

## 🔧 Configuration

### PrimeNG Configuration
```typescript
// app.config.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastModule,
    GalleriaModule
  ]
})
```

##  Performance Metrics

### Current Performance Analysis
- **Lighthouse Performance**: 66/100 - *Requires optimization for production standards*
- **First Contentful Paint**: 2.3s - *Above industry average, needs improvement (target: <1.8s)*
- **Largest Contentful Paint**: 3.9s - *Critical issue, significantly exceeds recommended 2.5s threshold*
- **Total Blocking Time**: 40ms - *Excellent performance, well above average web applications*
- **Cumulative Layout Shift**: 0 - *Perfect score, exceptional layout stability*
- **Speed Index**: 2.3s - *Acceptable performance, within industry standards*


