# Olimpiadas_nacionales_2019
Documentacion de la API para la consulta y modificacion de recursos asociados al sistema **Urgencitas**


# API Reference
## Auth
* Log-in con una cuenta de usuario:
    * ``` POST | /api/auth/sign-in ```
    * Request Body:
    * ``` 
        # Para loguear es necesario realizar la peticion utilizando el metodo de autenticacion Basic:
    
        - username: { email }
        - password: { contraseña }
        ```
        
* Sign-in para crear una cuenta en el sistema:
    * ``` POST | /api/auth/sign-up ```
    * Request Body:
    * ```
        {
            "nombre_usuario": { nombre },
            "apellido_usuario": { apellido },
            "contraseña": { contraseña },
            "email_usuario": { email },
            "telefono_usuario": { telefono },
            "tipo_usuario": { 1 (admin) | 0 (usuario) }
        }
        ```
----
## Alarm
* Consultar la lista de alarmas activadas :
    * ``` GET | /api/alarm ```
    * Request Body: **None**

* Consultar una alarma especifica de la lista:
    * ``` GET | /api/alarm/:alarmaId ```
    * Request Body: **None**
----
## Trigger
* Activar una alarma:
    * ``` POST | /api/trigger ```
    * Request Body:
    * ``` 
        {
            "type": { emergency | normal },
            "location": { ubicacion },
            "area": { id de area registrada }
        }
        ```
----
## Areas
* Consultar la lista de areas:
    * ``` GET | /api/areas ```
    * Request Body: **None**

* Consultar un area especifica de la lista:
    * ``` GET | /api/areas/:areaId ```
    * Request Body: **None**

* Crear un area:
    * ``` POST | /api/areas ```
    * Request Body:
    * ```
        {
            "nombre_area": { nombre }
        }
        ```

* Editar un area de la lista:
    * ``` PUT | /api/areas/:areaId ```
    * Request Body:
    * ```
        {
            "nombre_area": { nombre }
        }
        ```

* Eliminar un area de la lista:
    * ``` DELETE | /api/areas/:areaId ```
    * Request Body: **None**
----
## Patients
* Consultar la lista de pacientes:
    * ``` GET | /api/patients ```
    * Request Body: **None**

* Consultar un paciente especifico de la lista:
    * ``` GET | /api/patients/:pacienteId ```
    * Request Body: **None**

* Crear un paciente:
    * ``` POST | /api/patients ```
    * Request Body:
    * ```
        { 
            "nombre_pasiente": { nombre },
            "apellido_pasiente": { apellido },
            "telefono_pasiente": { telefono },
            "dni_pasiente": { dni },
            "ubicacion_pasiente": { ubicacion },
            "alergia": { alergia },
            "estado": { estado de salud }
        }
        ```

* Editar un paciente de la lista:
    * ``` PUT | /api/patients/:pacienteId ```
    * Request Body:
    * ```
        {
            "nombre_pasiente": { nombre },
            "apellido_pasiente": { apellido },
            "telefono_pasiente": { telefono },
            "dni_pasiente": { dni },
            "ubicacion_pasiente": { ubicacion },
            "alergia": { alergia },
            "estado": { estado de salud }
        }
        ```

* Eliminar un paciente de la lista:
    * ``` DELETE | /api/patients/:pacienteId ```
    * Request Body: **None**
----
## Users
* Consultar la lista de usuarios:
    * ``` GET | /api/users ```
    * Request Body: **None**

* Consultar un usuario especifico de la lista:
    * ``` GET | /api/users/:usuarioId ```
    * Request Body: **None**

* Crear un usuario:
    * ``` POST | /api/users ```
    * Request Body:
    * ```
        { 
            "nombre_usuario": { nombre },
            "apellido_usuario": { apellido },
            "contraseña": { contraseña },
            "email_usuario": { email },
            "telefono_usuario": { telefono },
            "tipo_usuario": { 1 (admin) | 0 (usuario) }
        }
        ```

* Editar un usuario de la lista:
    * ``` PUT | /api/users/:usuarioId ```
    * Request Body:
    * ```
        {
            "nombre_usuario": { nombre },
            "apellido_usuario": { apellido },
            "email_usuario": { email },
            "telefono_usuario": { telefono },
            "tipo_usuario": { 1 (admin) | 0 (usuario) }
        }
        ```

* Eliminar un usuario de la lista:
    * ``` DELETE | /api/nurses/:usuarioId ```
    * Request Body: **None**
----
## Nurses
* Consultar la lista de enfermeros:
    * ``` GET | /api/nurses ```
    * Request Body: **None**

* Consultar un enfermero especifico de la lista:
    * ``` GET | /api/nurses/:enfermeroId ```
    * Request Body: **None**

* Crear un enfermero:
    * ``` POST | /api/nurses ```
    * Request Body:
    * ```
        { 
            "nombre_enfermero": { nombre },
            "apellido_enfermero": { apellido },
            "especialidad": { especialidad }
        }
        ```

* Editar un enfermero de la lista:
    * ``` PUT | /api/nurses/:enfermeroId ```
    * Request Body:
    * ```
        {
            "nombre_enfermero": { nombre },
            "apellido_enfermero": { apellido },
            "especialidad": { especialidad }
        }
        ```

* Eliminar un enfermero de la lista:
    * ``` DELETE | /api/nurses/:enfermeroId ```
    * Request Body: **None**
----
## Reports
* Consultar la lista de reportes:
    * ``` GET | /api/reports ```
    * Request Body: **None**

* Consultar un reporte especifico de la lista:
    * ``` GET | /api/reports/:reporteId ```
    * Request Body: **None**

* Crear un reporte:
    * ``` POST | /api/reports ```
    * Request Body:
    * ```
        { 
            "enfermero_reporte": { id de enfermero },
            "pasiente_reporte": { id de paciente },
            "alarma_reporte": { id de alarma },
            "atendido_reportes": { 0 (NO atendido) | 1 (atendido) },
            "descripcion_reporte": { descripcion del reporte }
        }
        ```

* Editar un reporte de la lista:
    * ``` PUT | /api/reports/:reporteId ```
    * Request Body:
    * ```
        {
            "enfermero_reporte": { id de enfermero },
            "pasiente_reporte": { id de paciente },
            "alarma_reporte": { id de alarma },
            "atendido_reportes": { 0 (NO atendido) | 1 (atendido) },
            "descripcion_reporte": { descripcion del reporte }
        }
        ```

* Eliminar un reporte de la lista:
    * ``` DELETE | /api/reports/:reporteId ```
    * Request Body: **None**