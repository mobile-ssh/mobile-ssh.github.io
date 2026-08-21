---
layout: ../../../layouts/DocLayout.astro
title: "Reenvío de puertos"
description: "Sintaxis de reenvío de puertos local de Mobile SSH, destinos IPv6 y cómo se levantan los túneles guardados en Android e iOS."
---

# Reenvío de puertos

Mobile SSH admite el reenvío de puertos SSH local tanto en Android como en iOS. Un puerto local en el dispositivo escucha en `127.0.0.1` y reenvía el tráfico a través de la conexión SSH a un host y puerto remotos.

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

Esto vincula `127.0.0.1:8080` en el dispositivo y lo reenvía a `localhost:8080` desde el punto de vista del servidor.

Forma completa:

```text
3000:localhost:3000
```

Esto vincula `127.0.0.1:3000` en el dispositivo y lo reenvía por SSH a `localhost:3000` en el lado remoto.

Varios reenvíos:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Agregar un túnel a un servidor guardado

1. Abre **Saved Servers**.
2. Agrega o edita un perfil de servidor.
3. Introduce las reglas de reenvío en **Port forwards**.
4. Guarda el servidor.
5. Conéctate al servidor.

La app aplica los reenvíos guardados después de que la sesión SSH se conecta.

## Los túneles pertenecen al perfil del servidor

Los reenvíos se declaran en el servidor guardado y se levantan cuando ese servidor se conecta. No hay una pantalla aparte para agregar o quitar un túnel a mitad de sesión en ninguna de las dos plataformas: para cambiar tus reenvíos, edita el perfil del servidor y vuelve a conectar.

Es un compromiso deliberado — un túnel que vive en el perfil vuelve cada vez que te conectas, incluso tras una reconexión en una red nueva, sin que tengas que rehacerlo a mano.

## Destinos IPv6

Un destino IPv6 debe ir entre corchetes para que los dos puntos no puedan confundirse con el separador de puerto:

```text
8080:[2001:db8::1]:80
```

Una dirección IPv6 desnuda, sin corchetes, se rechaza por ambigua en lugar de interpretarse mal en silencio. La misma forma con corchetes funciona en el campo de dirección de un servidor, con un puerto opcional detrás (`[fe80::1]:22`).

## Vinculación de dirección

Mobile SSH vincula los reenvíos locales a `127.0.0.1` en el dispositivo. Es intencional: mantiene el túnel local al dispositivo y evita sorpresas de loopback solo IPv6. Otras apps en el mismo dispositivo podrían conectarse al puerto local reenviado si el sistema operativo permite su acceso de red.

## Ejemplos comunes

Acceder a un servicio web que se ejecuta en el servidor remoto:

```text
8080
```

Luego abre `http://127.0.0.1:8080` desde un navegador en el mismo dispositivo.

Acceder a un servidor de desarrollo:

```text
3000:localhost:3000
```

Acceder a una base de datos interna accesible desde el servidor SSH:

```text
15432:db.internal:5432
```

## Solución de problemas de túneles

- Asegúrate de que la sesión SSH esté conectada — los reenvíos se levantan después de que lo haga la sesión.
- Comprueba que el puerto local no esté ya en uso.
- Comprueba que el host y el puerto remotos sean accesibles desde el servidor SSH.
- Usa `localhost` cuando el servicio de destino esté en el propio servidor SSH.
- Usa el nombre DNS interno o la IP del servidor al reenviar a otro host detrás del servidor SSH.
