# ticketing-core-service

Core microservice for ticket operations (CRUD). Handles creation, retrieval, and management of ticket entities.

## ✅ Completado

- **Scaffold Node.js + TypeScript**: estructura completa con Express
- **3 endpoints básicos**: 
  - `GET /tickets` - listar tickets
  - `POST /tickets` - crear ticket
  - `GET /tickets/:id` - obtener ticket por ID
- **Almacenamiento en memoria**: con UUIDs para identificadores únicos
- **3 tests pasando**: health check, CRUD operations, validación de campos obligatorios
- **Backend CI workflow**: incluido `.github/workflows/backend-ci.yml`
- **Dockerfile multi-stage**: optimizado para producción

## Stack

- **Runtime**: Node.js 20 LTS
- **Language**: TypeScript 5.2
- **Framework**: Express 4.18
- **Testing**: Jest 29.6 + supertest 7.1
- **Build**: tsc (TypeScript compiler)

## Quick Start

```bash
cd ticketing-core-service
npm install
npm run dev        # puerto 3001
```

## Tests

```bash
npm test           # 3 tests passing
```

## Endpoints

- `GET /health` - Health check
- `GET /tickets` - Listar todos los tickets
- `POST /tickets` - Crear nuevo ticket
  - Body: `{ title: string, owner: string }`
- `GET /tickets/:id` - Obtener ticket específico

## Build & Deploy

```bash
npm run build      # compila TypeScript a dist/
npm start          # ejecuta dist/index.js
```

## Docker

```bash
docker build -t ticketing-core-service .
docker run -p 3001:3001 ticketing-core-service
```

## Próximos pasos

- Persistencia en PostgreSQL
- Integración con blockchain para NFT minting
- Eventos y notificaciones
- Validación avanzada de tickets
