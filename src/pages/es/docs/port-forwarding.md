---
layout: ../../../layouts/DocLayout.astro
title: "Reenvío de puertos"
description: "Sintaxis de reenvío de puertos local de Mobile SSH y gestión de túneles para Android."
---

# Reenvío de puertos

Mobile SSH admite el reenvío de puertos SSH local. Un puerto local en el dispositivo Android escucha en `127.0.0.1` y reenvía el tráfico a través de la conexión SSH a un host y puerto remotos.

## Sintaxis del túnel guardado

Las reglas de reenvío de puertos se separan por comas. Cada entrada usa una de dos formas:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Forma corta:

```text
8080
```

Esto vincula `127.0.0.1:8080` en el dispositivo Android y lo reenvía a `localhost:8080` desde el punto de vista del servidor.

Forma completa:

```text
3000:localhost:3000
```

Esto vincula `127.0.0.1:3000` en el dispositivo Android y lo reenvía por SSH a `localhost:3000` en el lado remoto.

Varios reenvíos:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Agregar un túnel a un servidor guardado

1. Abre **Servidores guardados**.
2. Agrega o edita un perfil de servidor.
3. Introduce las reglas de reenvío en **Reenvío de puertos**.
4. Guarda el servidor.
5. Conéctate al servidor.

La app aplica los reenvíos guardados después de que la sesión SSH se conecta.

## Gestionar túneles activos

Mientras estás conectado, selecciona la sesión y abre la vista de túneles desde la barra de herramientas de la terminal. Desde ahí puedes inspeccionar los reenvíos locales activos, agregar un túnel nuevo o quitar un reenvío local.

## Vinculación de dirección

Mobile SSH vincula los reenvíos locales a `127.0.0.1` en el dispositivo Android. Es intencional: mantiene el túnel local al dispositivo y evita sorpresas de loopback solo IPv6. Otras apps en el mismo dispositivo Android podrían conectarse al puerto local reenviado si Android permite su acceso de red.

## Ejemplos comunes

Acceder a un servicio web que se ejecuta en el servidor remoto:

```text
8080
```

Luego abre `http://127.0.0.1:8080` desde un navegador en el dispositivo Android.

Acceder a un servidor de desarrollo:

```text
3000:localhost:3000
```

Acceder a una base de datos interna accesible desde el servidor SSH:

```text
15432:db.internal:5432
```

## Solución de problemas de túneles

- Asegúrate de que la sesión SSH esté conectada antes de agregar túneles en tiempo de ejecución.
- Comprueba que el puerto local no esté ya en uso.
- Comprueba que el host y el puerto remotos sean accesibles desde el servidor SSH.
- Usa `localhost` cuando el servicio de destino esté en el propio servidor SSH.
- Usa el nombre DNS interno o la IP del servidor al reenviar a otro host detrás del servidor SSH.
