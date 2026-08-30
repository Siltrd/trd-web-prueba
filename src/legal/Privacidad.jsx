import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'responsable', label: 'Responsable del tratamiento' },
  { id: 'alcance', label: 'Alcance de esta Política' },
  { id: 'datos', label: 'Datos que podemos recopilar' },
  { id: 'informacion', label: 'Información al proporcionar datos' },
  { id: 'finalidades', label: 'Finalidades del tratamiento' },
  { id: 'base-legal', label: 'Base legal del tratamiento' },
  { id: 'obligatorios', label: 'Datos obligatorios y opcionales' },
  { id: 'proveedores', label: 'Destinatarios y proveedores' },
  { id: 'transferencias', label: 'Transferencias internacionales' },
  { id: 'conservacion', label: 'Conservación de los datos' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'crm', label: 'CRM y notas internas' },
  { id: 'comunicaciones', label: 'Comunicaciones' },
  { id: 'menores', label: 'Menores de edad' },
  { id: 'derechos', label: 'Derechos del titular' },
  { id: 'autoridad', label: 'Autoridad de control' },
  { id: 'cookies', label: 'Cookies y tecnologías similares' },
  { id: 'terceros', label: 'Enlaces y servicios de terceros' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const Privacidad = () => {
  return (
    <LegalLayout
      title="Política de Privacidad"
      updated="27 de agosto de 2026"
      sections={sections}
    >
      <section id="responsable">
        <h2>1. Responsable del tratamiento</h2>

        <p>
          Los datos personales tratados a través de este sitio y de los
          servicios ofrecidos bajo el nombre comercial
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, son responsabilidad de:
        </p>

        <p>
          <strong>[NOMBRE Y APELLIDO / DENOMINACIÓN LEGAL]</strong>
          <br />
          CUIT: <strong>[CUIT]</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
          <br />
          Correo electrónico:{' '}
          <strong>contacto@tunicaderealidad.com</strong>
        </p>

        <p>TDR opera desde la República Argentina.</p>
      </section>

      <section id="alcance">
        <h2>2. Alcance de esta Política</h2>

        <p>
          Esta Política de Privacidad describe cómo TDR recopila, utiliza,
          almacena, comunica y protege los datos personales obtenidos a través
          de:
        </p>

        <ul>
          <li>el sitio web;</li>
          <li>formularios de contacto;</li>
          <li>formularios de arrepentimiento y baja;</li>
          <li>reservas;</li>
          <li>procesos de contratación;</li>
          <li>comunicaciones por correo electrónico;</li>
          <li>herramientas de analítica, cuando se encuentren activas;</li>
          <li>tests o recursos interactivos;</li>
          <li>CRM y herramientas de gestión;</li>
          <li>programas, experiencias y demás servicios ofrecidos por TDR.</li>
        </ul>

        <p>
          Esta Política se aplica a los tratamientos realizados por TDR y no
          sustituye las políticas de privacidad de plataformas o servicios de
          terceros que puedan intervenir.
        </p>
      </section>

      <section id="datos">
        <h2>3. Datos que podemos recopilar</h2>

        <h3>Datos de identificación y contacto</h3>

        <ul>
          <li>nombre y apellido;</li>
          <li>correo electrónico;</li>
          <li>teléfono, cuando resulte necesario y sea facilitado;</li>
          <li>datos de contacto profesional;</li>
          <li>
            empresa, estudio, hotel, spa, centro u organización cuando
            corresponda.
          </li>
        </ul>

        <h3>Datos de contratación y prestación</h3>

        <ul>
          <li>servicio de interés;</li>
          <li>modalidad contratada;</li>
          <li>fechas y horarios;</li>
          <li>estado de reserva;</li>
          <li>historial operativo de servicios;</li>
          <li>sesiones contratadas y realizadas;</li>
          <li>información necesaria para facturación;</li>
          <li>
            códigos y comunicaciones vinculadas con solicitudes de
            arrepentimiento, baja, cancelación o devolución.
          </li>
        </ul>

        <h3>Datos de pago</h3>

        <p>
          TDR podrá tratar la información necesaria para verificar pagos
          realizados mediante los medios habilitados.
        </p>

        <p>
          Cuando el pago sea procesado por un tercero, TDR no necesariamente
          tendrá acceso a todos los datos financieros utilizados por dicho
          proveedor.
        </p>

        <h3>Datos de formularios y consultas</h3>

        <p>
          Cuando el usuario complete un formulario o realice una consulta,
          podrán tratarse los datos facilitados voluntariamente y el contenido
          de la comunicación.
        </p>

        <p>
          TDR no solicita datos clínicos ni otros datos sensibles como requisito
          general para realizar una consulta o contratar sus servicios.
        </p>

        <p>
          Se recomienda no incluir información relativa a salud, vida sexual,
          creencias religiosas, opiniones políticas, afiliación sindical,
          origen racial o étnico u otros datos sensibles que no resulten
          estrictamente necesarios en campos de texto libre o comunicaciones.
        </p>

        <h3>Datos de uso y navegación</h3>

        <p>
          Cuando se encuentren activas herramientas de analítica o medición,
          podrán recopilarse datos técnicos y de navegación, tales como:
        </p>

        <ul>
          <li>dirección IP;</li>
          <li>dispositivo;</li>
          <li>navegador y sistema operativo;</li>
          <li>páginas visitadas;</li>
          <li>duración de la visita;</li>
          <li>interacciones con botones o formularios;</li>
          <li>origen del tráfico;</li>
          <li>parámetros UTM;</li>
          <li>eventos de conversión.</li>
        </ul>

        <p>
          Estos datos podrán recopilarse mediante cookies, etiquetas u otras
          tecnologías similares de acuerdo con la Política de Cookies y, cuando
          corresponda, con las preferencias de consentimiento del usuario.
        </p>

        <h3>Tests o recursos interactivos</h3>

        <p>
          Cuando el usuario utilice tests, cuestionarios o herramientas
          similares, TDR podrá tratar:
        </p>

        <ul>
          <li>las respuestas ingresadas;</li>
          <li>el resultado generado;</li>
          <li>la fecha de realización;</li>
          <li>
            los datos de contacto asociados, cuando el usuario los facilite.
          </li>
        </ul>

        <p>
          Salvo que se indique expresamente otra cosa, estos recursos no tienen
          finalidad clínica ni diagnóstica.
        </p>
      </section>

      <section id="informacion">
        <h2>4. Información al proporcionar datos personales</h2>

        <p>
          Cuando TDR solicite datos personales mediante formularios u otros
          medios, se informará, según corresponda:
        </p>

        <ul>
          <li>la identidad del responsable del tratamiento;</li>
          <li>la finalidad para la que se solicitan los datos;</li>
          <li>
            cuáles respuestas o campos son obligatorios y cuáles son
            facultativos;
          </li>
          <li>
            las consecuencias de proporcionar los datos, de no hacerlo o de
            proporcionar información inexacta;
          </li>
          <li>
            la posibilidad de ejercer los derechos reconocidos por la normativa
            de protección de datos personales.
          </li>
        </ul>

        <p>
          En los formularios del sitio, los campos marcados con un asterisco
          (*) tendrán carácter obligatorio.
        </p>
      </section>

      <section id="finalidades">
        <h2>5. Finalidades del tratamiento</h2>

        <p>TDR podrá utilizar los datos personales para:</p>

        <ul>
          <li>responder consultas y solicitudes de información;</li>
          <li>
            gestionar reservas, reprogramaciones, cancelaciones, solicitudes de
            arrepentimiento, bajas y devoluciones;
          </li>
          <li>administrar la relación comercial;</li>
          <li>organizar contactos y clientes mediante CRM;</li>
          <li>verificar pagos y gestionar facturación;</li>
          <li>prestar los servicios contratados;</li>
          <li>enviar comunicaciones operativas;</li>
          <li>cumplir obligaciones legales, fiscales y administrativas;</li>
          <li>
            medir y mejorar el funcionamiento del sitio cuando se encuentren
            activas herramientas de analítica;
          </li>
          <li>
            enviar comunicaciones comerciales cuando exista consentimiento del
            titular o concurra otro supuesto permitido por la normativa
            aplicable.
          </li>
        </ul>
      </section>

      <section id="base-legal">
        <h2>6. Base legal del tratamiento</h2>

        <p>
          TDR tratará datos personales cuando exista consentimiento del titular,
          cuando el tratamiento resulte necesario para gestionar una relación
          contractual o precontractual, para cumplir obligaciones legales o
          cuando concurra alguno de los demás supuestos permitidos por la
          normativa aplicable.
        </p>

        <p>
          La contratación de un servicio no implica automáticamente el
          consentimiento para recibir comunicaciones promocionales.
        </p>

        <p>
          Cuando una comunicación comercial requiera consentimiento, este se
          solicitará de forma diferenciada respecto de las comunicaciones
          necesarias para prestar o administrar el servicio contratado.
        </p>
      </section>

      <section id="obligatorios">
        <h2>7. Datos obligatorios y opcionales</h2>

        <p>
          Cuando un formulario requiera determinados datos, se indicará cuáles
          son obligatorios.
        </p>

        <p>
          La falta de determinados datos podrá impedir procesar una reserva,
          identificar una contratación, emitir una factura, responder una
          consulta o prestar correctamente el servicio solicitado.
        </p>

        <p>Los campos no requeridos tendrán carácter opcional.</p>

        <p>
          TDR procurará solicitar únicamente los datos adecuados, pertinentes y
          necesarios en relación con la finalidad de cada tratamiento.
        </p>
      </section>

      <section id="proveedores">
        <h2>8. Destinatarios y proveedores</h2>

        <p>
          TDR podrá utilizar proveedores externos para gestionar determinadas
          funciones vinculadas con hosting, CRM, agenda, correo electrónico,
          envío de mensajes, videollamadas, analítica, formularios,
          almacenamiento, pagos, facturación y automatización.
        </p>

        <p>
          Estos proveedores podrán recibir únicamente los datos necesarios para
          prestar sus respectivos servicios, de acuerdo con sus condiciones,
          contratos y políticas aplicables.
        </p>

        <p>
          Entre las herramientas que TDR utiliza actualmente o podrá utilizar,
          según disponibilidad y configuración, se encuentran:
        </p>

        <ul>
          <li>Zoho, incluido su sistema CRM;</li>
          <li>Google;</li>
          <li>Vercel;</li>
          <li>Resend;</li>
          <li>proveedores de agenda o videollamadas;</li>
          <li>proveedores de pago y facturación;</li>
          <li>
            otros proveedores tecnológicos necesarios para la prestación de
            servicios.
          </li>
        </ul>

        <p>
          La lista de proveedores podrá modificarse cuando evolucione la
          infraestructura tecnológica u operativa de TDR.
        </p>
      </section>

      <section id="transferencias">
        <h2>9. Transferencias internacionales de datos</h2>

        <p>
          Algunos proveedores tecnológicos utilizados por TDR pueden almacenar
          o procesar información fuera de la República Argentina.
        </p>

        <p>
          Cuando exista una transferencia internacional de datos personales,
          TDR procurará que se encuentre amparada por un mecanismo admitido por
          la normativa aplicable.
        </p>

        <p>
          Cuando el país de destino no sea considerado adecuado por la
          autoridad competente, podrán utilizarse cláusulas contractuales
          modelo, acuerdos contractuales u otras garantías reconocidas por la
          normativa argentina.
        </p>
      </section>

      <section id="conservacion">
        <h2>10. Conservación de los datos</h2>

        <p>
          Los datos personales se conservarán durante el tiempo necesario para
          cumplir la finalidad para la que fueron recopilados y,
          posteriormente, durante los plazos que resulten necesarios para
          atender obligaciones legales, fiscales, contractuales o
          administrativas.
        </p>

        <p>Con carácter general:</p>

        <ul>
          <li>
            las consultas que no deriven en una contratación podrán eliminarse
            o anonimizarse cuando dejen de resultar necesarias;
          </li>
          <li>
            los datos de clientes podrán conservarse mientras exista relación
            comercial y durante los plazos legales posteriores;
          </li>
          <li>
            los datos fiscales y de facturación se conservarán durante los
            plazos exigidos por la normativa aplicable;
          </li>
          <li>
            las constancias de arrepentimiento, baja, cancelación, devolución y
            comunicaciones asociadas podrán conservarse durante el tiempo
            necesario para acreditar su gestión y cumplimiento;
          </li>
          <li>
            los datos utilizados exclusivamente para comunicaciones
            promocionales se conservarán hasta que el titular retire su
            consentimiento o solicite la baja, sin perjuicio de los datos
            mínimos necesarios para acreditar dicha solicitud.
          </li>
        </ul>

        <p>
          TDR podrá establecer plazos internos más específicos según la
          naturaleza del dato y la finalidad del tratamiento.
        </p>
      </section>

      <section id="seguridad">
        <h2>11. Seguridad</h2>

        <p>
          TDR adopta medidas razonables de seguridad destinadas a proteger los
          datos personales contra acceso no autorizado, pérdida, alteración,
          divulgación indebida o uso fraudulento.
        </p>

        <p>Estas medidas podrán incluir:</p>

        <ul>
          <li>autenticación multifactor;</li>
          <li>control de accesos;</li>
          <li>cifrado cuando corresponda;</li>
          <li>actualización de software;</li>
          <li>gestión segura de credenciales y secretos;</li>
          <li>revisión de permisos;</li>
          <li>utilización de proveedores tecnológicos especializados.</li>
        </ul>

        <p>
          Ningún sistema puede garantizar una seguridad absoluta. TDR procura
          aplicar medidas adecuadas al nivel de riesgo y al tipo de información
          tratada.
        </p>
      </section>

      <section id="crm">
        <h2>12. CRM y notas internas</h2>

        <p>
          TDR podrá utilizar un sistema CRM para gestionar contactos, clientes
          y relaciones comerciales.
        </p>

        <p>El CRM tendrá finalidad comercial y operativa.</p>

        <p>
          No se utilizará como historia clínica ni expediente terapéutico y se
          evitará registrar datos sensibles que no resulten necesarios para la
          gestión del servicio.
        </p>

        <p>
          Las notas internas deberán limitarse a información pertinente para la
          relación comercial, administrativa u operativa con el usuario.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>13. Comunicaciones por correo electrónico y otros medios</h2>

        <p>
          Cuando el usuario contacte a TDR mediante formularios web, correo
          electrónico u otros canales habilitados, los datos y mensajes
          intercambiados podrán tratarse para responder la consulta, gestionar
          una contratación o prestar un servicio.
        </p>

        <p>
          Los formularios del sitio pueden utilizar servicios tecnológicos de
          terceros, como Resend, para transmitir mensajes y confirmaciones al
          correo electrónico de TDR o del usuario.
        </p>

        <p>
          Las comunicaciones operativas necesarias para administrar una
          contratación, reserva, solicitud, baja o devolución no se consideran
          comunicaciones promocionales.
        </p>

        <p>
          El uso de correo electrónico y demás plataformas externas queda
          también sujeto a las políticas de privacidad de sus respectivos
          proveedores.
        </p>
      </section>

      <section id="menores">
        <h2>14. Menores de edad</h2>

        <p>
          Los servicios de TDR están dirigidos principalmente a personas
          mayores de edad.
        </p>

        <p>
          Cuando un servicio pudiera estar dirigido o resultar accesible a
          menores, se establecerán previamente las condiciones, autorizaciones
          y medidas que correspondan conforme a la normativa aplicable.
        </p>
      </section>

      <section id="derechos">
        <h2>15. Derechos del titular</h2>

        <p>
          El titular de los datos podrá ejercer los derechos reconocidos por la
          normativa vigente, incluyendo acceso, rectificación, actualización y
          supresión, así como retirar el consentimiento cuando el tratamiento
          dependa de este y ejercer los demás derechos que resulten aplicables.
        </p>

        <p>
          Las solicitudes podrán enviarse a
          <strong> contacto@tunicaderealidad.com</strong>.
        </p>

        <p>
          TDR podrá solicitar información razonable para verificar la identidad
          del solicitante y evitar el acceso, modificación o supresión de datos
          por terceros no autorizados.
        </p>

        <p>
          Las solicitudes de acceso serán respondidas dentro del plazo legal
          aplicable, actualmente de diez (10) días corridos desde su recepción.
        </p>

        <p>
          Las solicitudes de rectificación, actualización o supresión serán
          atendidas dentro del plazo legal aplicable, actualmente de cinco (5)
          días hábiles.
        </p>

        <p>
          El ejercicio de estos derechos será gratuito en los términos
          previstos por la normativa vigente.
        </p>
      </section>

      <section id="autoridad">
        <h2>16. Autoridad de control</h2>

        <p>
          En Argentina, la autoridad de aplicación en materia de protección de
          datos personales es la
          <strong> Agencia de Acceso a la Información Pública (AAIP)</strong>.
        </p>

        <p>
          El titular podrá acudir a dicha autoridad cuando considere que sus
          derechos no han sido atendidos adecuadamente.
        </p>
      </section>

      <section id="cookies">
        <h2>17. Cookies y tecnologías similares</h2>

        <p>
          El uso de cookies, etiquetas, píxeles y tecnologías similares se
          regula en la Política de Cookies de TDR.
        </p>

        <p>
          Cuando corresponda, el usuario podrá gestionar sus preferencias
          mediante el mecanismo de consentimiento habilitado en el sitio.
        </p>
      </section>

      <section id="terceros">
        <h2>18. Enlaces y servicios de terceros</h2>

        <p>
          El sitio puede contener enlaces hacia plataformas o servicios de
          terceros. TDR no controla sus políticas de privacidad ni sus
          prácticas de tratamiento de datos.
        </p>

        <p>
          Se recomienda revisar las condiciones y políticas del proveedor
          correspondiente antes de facilitar información personal.
        </p>
      </section>

      <section id="modificaciones">
        <h2>19. Modificaciones de esta Política</h2>

        <p>
          TDR podrá actualizar esta Política de Privacidad cuando existan
          cambios legales, tecnológicos, operativos, comerciales, en los
          proveedores utilizados o en las finalidades del tratamiento.
        </p>

        <p>
          La versión vigente estará disponible en el sitio e indicará su fecha
          de última actualización.
        </p>

        <p>
          Cuando un cambio sea material y pueda afectar de manera relevante a
          usuarios o clientes, TDR podrá comunicarlo mediante correo
          electrónico u otro medio adecuado.
        </p>
      </section>

      <section id="contacto">
        <h2>20. Contacto</h2>

        <p>
          Para consultas relacionadas con privacidad o protección de datos:
        </p>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico:{' '}
          <strong>contacto@tunicaderealidad.com</strong>
          <br />
          Domicilio: <strong>[DOMICILIO]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacidad;