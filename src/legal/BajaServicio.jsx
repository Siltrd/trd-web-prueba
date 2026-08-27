import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'solicitud', label: 'Cómo solicitar la baja' },
  { id: 'datos', label: 'Datos necesarios' },
  { id: 'confirmacion', label: 'Confirmación de recepción' },
  { id: 'evaluacion', label: 'Evaluación de la baja' },
  { id: 'efectos', label: 'Efectos de la baja' },
  { id: 'procesos', label: 'Procesos de varias sesiones' },
  { id: 'recurrentes', label: 'Servicios recurrentes' },
  { id: 'reintegros', label: 'Reintegros' },
  { id: 'incompletas', label: 'Solicitudes incompletas' },
  { id: 'comunicaciones', label: 'Comunicaciones' },
  { id: 'conservacion', label: 'Conservación del trámite' },
  { id: 'derechos', label: 'Derechos del consumidor' },
  { id: 'contacto', label: 'Contacto' },
];

const BajaServicio = () => {
  return (
    <LegalLayout
      title="Procedimiento de Baja de Servicio"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="alcance">
        <h2>1. Alcance</h2>

        <p>
          Este procedimiento regula la solicitud de baja o finalización de
          servicios contratados a distancia con
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, cuando corresponda conforme a la normativa
          aplicable.
        </p>

        <p>
          La baja de un servicio no debe confundirse con el derecho de
          arrepentimiento.
        </p>
      </section>

      <section id="solicitud">
        <h2>2. Cómo solicitar la baja</h2>

        <p>
          Cuando corresponda, el consumidor podrá solicitar la baja mediante el
          Botón de Baja de Servicio disponible en el sitio web de TDR.
        </p>

        <p>
          El acceso al procedimiento no requerirá la creación de una cuenta ni
          el inicio de sesión.
        </p>

        <p>
          Cuando resulte necesario, TDR podrá aplicar mecanismos razonables de
          verificación de identidad exclusivamente con fines de seguridad y
          validación de la solicitud.
        </p>
      </section>

      <section id="datos">
        <h2>3. Datos necesarios para la solicitud</h2>

        <p>
          Para identificar correctamente el servicio y tramitar la baja, TDR
          podrá solicitar los datos razonablemente necesarios, por ejemplo:
        </p>

        <ul>
          <li>nombre y apellido;</li>
          <li>correo electrónico utilizado en la contratación;</li>
          <li>servicio contratado;</li>
          <li>fecha aproximada de contratación;</li>
          <li>referencia de reserva, contratación o pago, si existiera;</li>
          <li>
            información adicional necesaria para identificar la relación
            contractual.
          </li>
        </ul>
      </section>

      <section id="confirmacion">
        <h2>4. Confirmación de recepción</h2>

        <p>
          Una vez enviada la solicitud, TDR emitirá una constancia de recepción
          con un código identificatorio del trámite.
        </p>

        <p>
          La constancia será enviada dentro de las 24 horas siguientes a la
          recepción de la solicitud, conforme a la normativa aplicable.
        </p>
      </section>

      <section id="evaluacion">
        <h2>5. Evaluación de la baja</h2>

        <p>TDR verificará:</p>

        <ul>
          <li>el servicio contratado;</li>
          <li>su estado actual;</li>
          <li>las prestaciones ya realizadas;</li>
          <li>las prestaciones pendientes;</li>
          <li>los pagos efectuados;</li>
          <li>las condiciones particulares aplicables.</li>
        </ul>
      </section>

      <section id="efectos">
        <h2>6. Efectos de la baja</h2>

        <p>
          La baja producirá la finalización del servicio conforme a las
          condiciones aplicables a la contratación.
        </p>

        <p>
          Cuando existan prestaciones pendientes, se aplicarán las reglas
          previstas en los Términos y Condiciones, la Política de Reservas,
          Cancelaciones y Devoluciones y las condiciones específicas del
          servicio contratado.
        </p>

        <p>
          La baja no genera automáticamente derecho al reintegro de importes
          correspondientes a prestaciones ya realizadas.
        </p>
      </section>

      <section id="procesos">
        <h2>7. Procesos de varias sesiones</h2>

        <p>
          Cuando la baja corresponda a un proceso compuesto por varias sesiones,
          se aplicará la política de finalización anticipada vigente.
        </p>

        <p>
          Las sesiones efectivamente realizadas se imputarán al valor de la
          sesión individual vigente al momento de la contratación y el saldo
          pendiente se calculará conforme a la Política de Reservas,
          Cancelaciones y Devoluciones.
        </p>
      </section>

      <section id="recurrentes">
        <h2>8. Servicios recurrentes o membresías</h2>

        <p>
          Si TDR incorpora en el futuro membresías, suscripciones u otros
          servicios recurrentes, la solicitud de baja tendrá como efecto detener
          futuras renovaciones o cobros conforme a las condiciones particulares
          informadas antes de la contratación.
        </p>

        <p>
          La baja no afectará los importes ya devengados por períodos o
          prestaciones efectivamente utilizados, salvo que corresponda
          legalmente otra solución.
        </p>
      </section>

      <section id="reintegros">
        <h2>9. Reintegros</h2>

        <p>
          Cuando de la baja resulte un saldo a favor del consumidor, TDR
          gestionará el reintegro conforme a la Política de Reservas,
          Cancelaciones y Devoluciones.
        </p>
      </section>

      <section id="incompletas">
        <h2>10. Solicitudes incompletas</h2>

        <p>
          Si la información recibida no permitiera identificar correctamente la
          contratación, TDR podrá solicitar los datos mínimos adicionales
          necesarios.
        </p>

        <p>
          Esta solicitud de información no tendrá por objeto dificultar ni
          impedir el ejercicio del derecho a solicitar la baja.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>11. Comunicaciones</h2>

        <p>
          Las comunicaciones relacionadas con la baja se enviarán al correo
          electrónico informado por el consumidor, salvo que se acuerde otro
          medio adecuado.
        </p>
      </section>

      <section id="conservacion">
        <h2>12. Conservación del trámite</h2>

        <p>
          TDR podrá conservar la constancia de la solicitud, su código
          identificatorio y la resolución adoptada durante el tiempo necesario
          para cumplir obligaciones legales, contractuales y administrativas.
        </p>
      </section>

      <section id="derechos">
        <h2>13. Derechos del consumidor</h2>

        <p>
          Este procedimiento no limita ni sustituye los derechos reconocidos por
          la normativa aplicable.
        </p>
      </section>

      <section id="contacto">
        <h2>14. Contacto</h2>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE CONTACTO / LEGAL]</strong>
        </p>

        <p>
          El formulario correspondiente se integrará en esta página para
          permitir la solicitud directa de baja.
        </p>
      </section>
    </LegalLayout>
  );
};

export default BajaServicio;