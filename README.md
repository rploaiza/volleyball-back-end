
***
# Volleyball Back-end

* El desarrollo del servidor es en Node.Js con una base de datos mongo, la db se encuentra en la plataforma mlab de tal manera que esta en la nube y el servidor desplegado en heroku.

* URL del API Rest: https://back-end-volleyball.herokuapp.com/

* URL Front-End: https://front-end-volleyboll.herokuapp.com/

* URL repositorio git front-end: https://github.com/rploaiza/volleyball-front-end

#### Crear nuevo equipo `POST /team`
Ejemplo: `POST /team` `{"name":"NDeveloper"}`

Entrada| Respuesta
--|--
`name: string` | `OK (201)`

#### Ver los equipos `GET /team`
> Devuelve los equipos con su nombre y su puntuación

Ejemplos: `GET /team` `{"name":"NDeveloper", "score": 20}, {"name":"NText","score":10}`

Entrada| Respuesta
--|--
`name: string`<br>`score?: number` | `OK (200)`

#### Buscar un equipo `GET /team/{code}`
> Devuelve el `team`

Ejemplos: `GET /team/1` `{"name":"NDeveloper", "score": 20}`

Entrada| Respuesta
--|--
`name: string`<br>`score?: number` | `OK (200)`

#### Actualizar de forma parcial un equipo `PATH /team/{code}`
> Actualiza `puntuación` de un team

Ejemplo: `PATH /team/2` `{"score":10}`

Parámetros | Respuesta | Respuesta si<br>_code_ no existe<br>_code_ no entero
--|--|--
-- | `OK (200) {"code":2,"name":"NDeveloper","score":10}` | `NOT_FOUND(404)` `{"exception":"ThemeIdNotFoundException"}`<br> `{"exception":"NumberFormatException"}`

#### Poblar la base de datos `POST /db/seed`
> Poblar de información en la base de datos.

Ejemplos: `POST /db/seed` `{"name":"NDeveloper", "score": 20}, {"name":"NText","score":10}`

Entrada| Respuesta
--|--
`name: string`<br>`score?: number` | `OK (200)`

#### Despoblar la base de datos `DELETE /db/delete`
> Elimina toda la información en la base de datos.

Ejemplos: `DELETE /db/delete` `{}`

Entrada| Respuesta
--|--
`` | `OK (200)`
