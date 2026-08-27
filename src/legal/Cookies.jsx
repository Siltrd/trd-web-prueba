import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'que-son', label: 'Qué son las cookies' },
  { id: 'responsable', label: 'Responsable' },
  { id: 'tipos', label: 'Tipos de cookies' },
  { id: 'propias-terceros', label: 'Cookies propias y de terceros' },
  { id: 'consentimiento', label: 'Gestión del consentimiento' },
  { id: 'etiquetas', label: 'Medición y etiquetas' },
  { id: 'analytics', label: 'Google Analytics' },
  { id: 'marketing', label: 'Cookies de marketing futuras' },
  { id: 'duracion', label: 'Duración de las cookies' },
  { id: 'gestion', label: 'Modificar o eliminar cookies' },
  { id: 'transferencias', label: 'Transferencias internacionales' },
  { id: 'privacidad', label: 'Relación con Privacidad' },
  { id: 'actualizaciones', label: 'Actualizaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const Cookies = () => {
  return (
    <LegalLayout
      title="Política de Cookies"
      updated="27 de agosto de 2026"
      sections={sections}
    >
      <section id="que-son">
        <h2>1. Qué son las cookies</h2>

        <p>
          Las cookies son pequeños archivos o identificadores que pueden
          almacenarse en el dispositivo del usuario al visitar un sitio web.
        </p>

        <p>
          También pueden utilizarse tecnologías similares, como etiquetas,
          píxeles, scripts o identificadores de almacenamiento local, para
          recordar preferencias, medir el funcionamiento del sitio, analizar
          el uso de sus páginas o gestionar determinadas funcionalidades.
        </p>

        <p>
          En esta Política, el término “cookies” se utiliza de forma amplia para
          referirse también a tecnologías similares cuando corresponda.
        </p>
      </section>

      <section id="responsable">
        <h2>2. Responsable</h2>

        <p>
          El sitio web de <strong>Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, utiliza cookies y tecnologías similares bajo
          la responsabilidad de:
        </p>

        <p>
          <strong>[NOMBRE Y APELLIDO]</strong>
          <br />
          CUIT: <strong>[CUIT]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
          <br />
          Correo electrónico:{' '}
          <strong>[EMAIL DE CONTACTO / PRIVACIDAD]</strong>
        </p>
      </section>

      <section id="tipos">
        <h2>3. Tipos de cookies que puede utilizar TDR</h2>

        <h3>Cookies necesarias</h3>

        <p>
          Son aquellas indispensables para el funcionamiento básico del sitio o
          para prestar una funcionalidad solicitada por el usuario.
        </p>

        <p>Pueden utilizarse, por ejemplo, para:</p>

        <ul>
          <li>mantener la seguridad del sitio;</li>
          <li>gestionar preferencias esenciales;</li>
          <li>permitir el funcionamiento de formularios;</li>
          <li>recordar elecciones necesarias para la navegación;</li>
          <li>gestionar el consentimiento sobre cookies.</li>
        </ul>

        <p>
          Estas cookies no tienen necesariamente una finalidad analítica o
          publicitaria.
        </p>

        <h3>Cookies de analítica</h3>

        <p>
          Permiten conocer cómo se utiliza el sitio y obtener información
          agregada o estadística sobre la navegación.
        </p>

        <p>Pueden utilizarse para medir, entre otras cosas:</p>

        <ul>
          <li>páginas visitadas;</li>
          <li>tiempo de permanencia;</li>
          <li>origen del tráfico;</li>
          <li>dispositivo o navegador;</li>
          <li>interacciones;</li>
          <li>recorridos dentro del sitio;</li>
          <li>conversiones.</li>
        </ul>

        <p>
          TDR podrá utilizar herramientas de analítica, como Google Analytics,
          cuando se encuentren activas.
        </p>

        <p>
          Estas cookies estarán sujetas a las preferencias de consentimiento
          del usuario cuando así corresponda.
        </p>

        <h3>Cookies de funcionalidad</h3>

        <p>
          Permiten recordar determinadas preferencias o mejorar algunas
          funciones del sitio.
        </p>

        <p>Por ejemplo:</p>

        <ul>
          <li>preferencias de visualización;</li>
          <li>idioma;</li>
          <li>configuraciones elegidas por el usuario.</li>
        </ul>

        <h3>Cookies de marketing y publicidad</h3>

        <p>
          Podrán utilizarse en el futuro para medir campañas, atribuir
          conversiones, crear audiencias o mostrar publicidad relevante.
        </p>

        <p>
          Estas tecnologías pueden incluir herramientas de plataformas
          publicitarias como Google Ads o Meta.
        </p>

        <p>
          TDR no utilizará estas tecnologías de forma activa sin que estén
          previamente configuradas conforme a la normativa aplicable y, cuando
          corresponda, a las preferencias de consentimiento del usuario.
        </p>
      </section>

      <section id="propias-terceros">
        <h2>4. Cookies propias y de terceros</h2>

        <p>
          Las cookies pueden ser propias, cuando son gestionadas directamente
          por TDR o por la infraestructura del sitio, o de terceros, cuando son
          gestionadas por proveedores externos que prestan servicios
          tecnológicos, de analítica, publicidad, reservas, formularios u otras
          funcionalidades.
        </p>

        <p>
          Entre los proveedores que podrán intervenir, según la configuración
          vigente, se encuentran:
        </p>

        <ul>
          <li>Google;</li>
          <li>Zoho;</li>
          <li>Vercel;</li>
          <li>Meta;</li>
          <li>
            otros proveedores tecnológicos necesarios para el funcionamiento o
            medición del sitio.
          </li>
        </ul>

        <p>
          La utilización efectiva de cada proveedor dependerá de las
          herramientas que se encuentren activas en cada momento.
        </p>
      </section>

      <section id="consentimiento">
        <h2>5. Gestión del consentimiento</h2>

        <p>
          Cuando corresponda, TDR pondrá a disposición del usuario un sistema
          para gestionar sus preferencias de cookies.
        </p>

        <p>
          El usuario podrá aceptar, rechazar o configurar determinadas
          categorías, salvo aquellas estrictamente necesarias para el
          funcionamiento del sitio.
        </p>

        <p>
          Las preferencias podrán modificarse posteriormente mediante el
          mecanismo habilitado en el sitio.
        </p>

        <p>
          TDR procurará que las herramientas de analítica, publicidad o
          marketing que dependan de consentimiento no se activen antes de que
          el usuario haya expresado su elección cuando así lo exija la normativa
          aplicable.
        </p>
      </section>

      <section id="etiquetas">
        <h2>6. Herramientas de medición y etiquetas</h2>

        <p>
          TDR podrá utilizar herramientas de gestión de etiquetas y medición,
          como Google Tag Manager, para administrar de forma centralizada
          determinadas tecnologías utilizadas en el sitio.
        </p>

        <p>
          La existencia de una herramienta de gestión de etiquetas no implica
          por sí sola que todas las tecnologías disponibles se encuentren
          activas.
        </p>

        <p>
          Las etiquetas de analítica o marketing se configurarán de acuerdo con
          las preferencias de consentimiento y con las necesidades reales del
          sitio.
        </p>
      </section>

      <section id="analytics">
        <h2>7. Google Analytics</h2>

        <p>
          Cuando Google Analytics se encuentre activo, podrá utilizarse para
          obtener información estadística sobre el uso del sitio y medir
          interacciones y conversiones.
        </p>

        <p>La información tratada podrá incluir:</p>

        <ul>
          <li>dirección IP;</li>
          <li>dispositivo;</li>
          <li>navegador;</li>
          <li>páginas visitadas;</li>
          <li>eventos;</li>
          <li>fuente de tráfico;</li>
          <li>parámetros UTM.</li>
        </ul>

        <p>
          La utilización de Google Analytics estará sujeta a la configuración de
          privacidad y consentimiento adoptada por TDR.
        </p>
      </section>

      <section id="marketing">
        <h2>8. Cookies de marketing futuras</h2>

        <p>
          TDR podrá incorporar en el futuro herramientas de medición
          publicitaria, como:
        </p>

        <ul>
          <li>Google Ads;</li>
          <li>Meta Pixel;</li>
          <li>otras plataformas de publicidad digital.</li>
        </ul>

        <p>
          Estas herramientas no se considerarán activas hasta que
          efectivamente se instalen y configuren.
        </p>

        <p>
          Cuando se incorporen, TDR actualizará esta Política y la configuración
          del sistema de consentimiento cuando corresponda.
        </p>
      </section>

      <section id="duracion">
        <h2>9. Duración de las cookies</h2>

        <p>
          Las cookies pueden ser de sesión, cuando se eliminan al cerrar el
          navegador, o persistentes, cuando permanecen almacenadas durante un
          período determinado o hasta que el usuario las elimina.
        </p>

        <p>
          La duración concreta dependerá de la finalidad y del proveedor
          correspondiente.
        </p>

        <p>
          Cuando el sistema de consentimiento lo permita, el usuario podrá
          consultar información más detallada sobre las cookies activas y su
          duración.
        </p>
      </section>

      <section id="gestion">
        <h2>10. Cómo modificar o eliminar cookies</h2>

        <p>
          El usuario podrá gestionar sus preferencias mediante el sistema de
          consentimiento disponible en el sitio, cuando corresponda.
        </p>

        <p>
          También puede modificar la configuración de su navegador para
          bloquear, limitar o eliminar cookies.
        </p>

        <p>
          La desactivación de determinadas cookies puede afectar algunas
          funcionalidades del sitio.
        </p>
      </section>

      <section id="transferencias">
        <h2>11. Transferencias internacionales</h2>

        <p>
          Algunos proveedores de cookies o tecnologías similares pueden
          procesar información fuera de la República Argentina.
        </p>

        <p>
          Cuando esto ocurra, el tratamiento se realizará conforme a lo
          indicado en la Política de Privacidad de TDR y a las normas
          aplicables sobre transferencias internacionales de datos.
        </p>
      </section>

      <section id="privacidad">
        <h2>12. Relación con la Política de Privacidad</h2>

        <p>
          La información obtenida mediante cookies o tecnologías similares
          puede constituir dato personal cuando permita identificar directa o
          indirectamente a una persona.
        </p>

        <p>
          El tratamiento de esos datos se regirá además por la Política de
          Privacidad de TDR.
        </p>
      </section>

      <section id="actualizaciones">
        <h2>13. Actualizaciones de esta Política</h2>

        <p>
          TDR podrá modificar esta Política de Cookies cuando cambien las
          herramientas utilizadas, las finalidades de medición, los
          proveedores, la configuración del sitio o las exigencias legales o
          regulatorias.
        </p>

        <p>
          La versión vigente estará disponible en el sitio e indicará su fecha
          de última actualización.
        </p>

        <p>
          Cuando se produzcan cambios materiales, TDR podrá informar al usuario
          o solicitar nuevamente su consentimiento cuando corresponda.
        </p>
      </section>

      <section id="contacto">
        <h2>14. Contacto</h2>

        <p>
          Para consultas relacionadas con cookies o privacidad:
        </p>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE PRIVACIDAD]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default Cookies;