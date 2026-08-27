import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'confirmacion', label: 'Confirmación de reservas' },
  { id: 'coaching', label: 'Coaching 1 a 1' },
  { id: 'procesos', label: 'Procesos de varias sesiones' },
  { id: 'finalizacion', label: 'Finalización anticipada' },
  { id: 'sound-healing', label: 'Sound Healing y organizaciones' },
  { id: 'experiencias', label: 'Experiencias, eventos y programas' },
  { id: 'recursos', label: 'Recursos digitales' },
  { id: 'arrepentimiento', label: 'Derecho de arrepentimiento' },
  { id: 'baja', label: 'Baja de servicios' },
  { id: 'devoluciones', label: 'Devoluciones' },
  { id: 'medio', label: 'Medio de devolución' },
  { id: 'situaciones', label: 'Situaciones no previstas' },
  { id: 'modificaciones', label: 'Modificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

const ReservasDevoluciones = () => {
  return (
    <LegalLayout
      title="Política de Reservas, Cancelaciones y Devoluciones"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="alcance">
        <h2>1. Alcance</h2>

        <p>
          Esta política regula las reservas, reprogramaciones, cancelaciones,
          inasistencias y devoluciones aplicables a los servicios contratados con
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>.
        </p>

        <p>
          Cuando un servicio tenga condiciones particulares, estas
          complementarán la presente política y serán informadas antes de la
          contratación.
        </p>
      </section>

      <section id="confirmacion">
        <h2>2. Confirmación de reservas</h2>

        <p>
          Una reserva se considera confirmada cuando se hayan cumplido las
          condiciones indicadas para el servicio correspondiente y, cuando
          corresponda, se haya acreditado el pago.
        </p>

        <p>
          En los servicios que requieran coordinación previa de fechas,
          presupuesto o condiciones particulares, la confirmación estará sujeta a
          dicha coordinación.
        </p>
      </section>

      <section id="coaching">
        <h2>3. Coaching 1 a 1 — sesión individual</h2>

        <p>
          Las sesiones individuales de Coaching 1 a 1 tienen una duración de 60
          minutos y se realizan online, salvo que se indique expresamente otra
          modalidad.
        </p>

        <p>
          La fecha y horario elegidos quedan confirmados una vez acreditado el
          pago.
        </p>

        <h3>Reprogramaciones</h3>

        <p>
          La sesión puede reprogramarse con una anticipación mínima de 24 horas
          respecto del horario reservado.
        </p>

        <p>
          Las solicitudes realizadas con menos de 24 horas de anticipación no
          generan derecho a reprogramación.
        </p>

        <h3>Cancelaciones e inasistencias</h3>

        <p>
          Si el cliente cancela con menos de 24 horas de anticipación o no se
          presenta en el horario acordado, el importe correspondiente a esa
          sesión no será reintegrado ni podrá aplicarse a una nueva fecha.
        </p>

        <p>
          Si TDR no pudiera realizar la sesión en la fecha acordada, el cliente
          podrá elegir entre reprogramarla sin coste adicional o recibir el
          reintegro íntegro correspondiente a esa sesión.
        </p>
      </section>

      <section id="procesos">
        <h2>4. Procesos de varias sesiones</h2>

        <p>
          Cuando se contrate un proceso compuesto por varias sesiones, las fechas
          se coordinarán previamente al pago cuando así se indique en la
          propuesta comercial.
        </p>

        <p>
          Una vez acordadas las fechas y acreditado el pago, el proceso quedará
          confirmado.
        </p>

        <p>
          Las reprogramaciones se aplican de manera individual a cada sesión y se
          rigen por el plazo general de 24 horas, salvo que se informe otra
          condición antes de contratar.
        </p>
      </section>

      <section id="finalizacion">
        <h2>5. Finalización anticipada de procesos</h2>

        <p>
          El cliente podrá solicitar la finalización de un proceso antes de
          completar todas las sesiones contratadas.
        </p>

        <p>
          Cuando existan sesiones pendientes, se calculará el importe a
          reintegrar descontando del precio abonado las sesiones efectivamente
          realizadas, valoradas al precio de la sesión individual vigente al
          momento de la contratación.
        </p>

        <p>El saldo resultante será reintegrado conforme a esta política.</p>

        <p>Las sesiones ya realizadas no generan derecho a reintegro.</p>
      </section>

      <section id="sound-healing">
        <h2>6. Sound Healing y servicios para organizaciones</h2>

        <p>
          Los servicios destinados a estudios, centros, hoteles, spas, empresas
          u otras organizaciones podrán estar sujetos a condiciones específicas
          de reserva, anticipo, cancelación, reprogramación, desplazamiento,
          aforo, espacio y equipamiento.
        </p>

        <p>
          Dichas condiciones serán informadas mediante presupuesto o propuesta
          comercial antes de la contratación.
        </p>
      </section>

      <section id="experiencias">
        <h2>7. Experiencias, eventos y programas</h2>

        <p>
          Las experiencias, eventos y programas podrán contar con reglas
          particulares relativas a fecha, lugar, aforo, inscripción, pagos,
          reprogramaciones, cancelaciones, inasistencias y acceso a materiales o
          grabaciones.
        </p>

        <p>Estas condiciones serán informadas antes de la contratación.</p>
      </section>

      <section id="recursos">
        <h2>8. Recursos digitales</h2>

        <p>
          Las condiciones de devolución de recursos digitales dependerán de la
          naturaleza del contenido, la forma de acceso y la normativa aplicable.
        </p>
      </section>

      <section id="arrepentimiento">
        <h2>9. Derecho de arrepentimiento</h2>

        <p>
          Cuando resulte legalmente aplicable, el consumidor podrá ejercer el
          derecho de arrepentimiento respecto de contrataciones realizadas a
          distancia dentro del plazo previsto por la normativa vigente.
        </p>
      </section>

      <section id="baja">
        <h2>10. Baja de servicios</h2>

        <p>
          Cuando corresponda, el cliente podrá solicitar la baja o finalización
          de un servicio en curso mediante el mecanismo habilitado por TDR.
        </p>
      </section>

      <section id="devoluciones">
        <h2>11. Devoluciones</h2>

        <p>
          Cuando corresponda efectuar un reintegro, TDR gestionará la devolución
          dentro de los 5 días hábiles siguientes a la aceptación de la
          solicitud.
        </p>

        <p>
          El plazo de acreditación final podrá depender de la entidad bancaria o
          del medio de pago utilizado.
        </p>
      </section>

      <section id="medio">
        <h2>12. Medio de devolución</h2>

        <p>
          Siempre que sea posible, los reintegros se realizarán mediante el mismo
          medio utilizado para efectuar el pago o mediante otro medio acordado
          con el cliente.
        </p>
      </section>

      <section id="situaciones">
        <h2>13. Situaciones no previstas</h2>

        <p>
          Las situaciones no contempladas expresamente en esta política serán
          evaluadas conforme a las condiciones del servicio contratado y a la
          normativa aplicable.
        </p>

        <p>
          La consideración excepcional de una situación particular por parte de
          TDR no implica la modificación permanente de esta política ni genera
          un derecho automático para futuros casos.
        </p>
      </section>

      <section id="modificaciones">
        <h2>14. Modificaciones</h2>

        <p>
          TDR podrá actualizar esta política cuando cambien sus servicios,
          procesos operativos o la normativa aplicable.
        </p>
      </section>

      <section id="contacto">
        <h2>15. Contacto</h2>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE CONTACTO]</strong>
          <br />
          WhatsApp / teléfono: <strong>[NÚMERO, SI CORRESPONDE]</strong>
        </p>
      </section>
    </LegalLayout>
  );
};

export default ReservasDevoluciones;