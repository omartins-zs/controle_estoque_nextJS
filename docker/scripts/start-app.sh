#!/bin/sh
set -e

echo "[start-app] Inicializando container de controle de estoque..."

export NODE_ENV="${NODE_ENV:-production}"
export PORT="${PORT:-3000}"
export HOSTNAME="${HOSTNAME:-0.0.0.0}"
export NEXT_TELEMETRY_DISABLED=1

# Aquecimento assíncrono das rotas principais para evitar cold start
(
  sleep 2
  wget -q -O /dev/null "http://127.0.0.1:${PORT}/api/health" 2>/dev/null || true
  wget -q -O /dev/null "http://127.0.0.1:${PORT}/login" 2>/dev/null || true
  wget -q -O /dev/null "http://127.0.0.1:${PORT}/" 2>/dev/null || true
  echo "[start-app] Cache inicial de rotas aquecido com sucesso."
) &

echo "[start-app] Subindo servidor Next.js Standalone em ${HOSTNAME}:${PORT}..."
exec node server.js
