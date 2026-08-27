import React from 'react';
import LegalLayout from '../components/LegalLayout';

const sections = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'como', label: 'Cómo ejercer el derecho' },
  { id: 'datos', label: 'Datos necesarios' },
  { id: 'confirmacion', label: 'Confirmación de recepción' },
  { id: 'evaluacion', label: 'Evaluación de la solicitud' },
  { id: 'efectos', label: 'Efectos del arrepentimiento' },
  { id: 'reintegros', label: 'Reintegros' },
  { id: 'incompletas', label: 'Solicitudes incompletas' },
  { id: 'comunicaciones', label: 'Comunicaciones' },
  { id: 'conservacion', label: 'Conservación del trámite' },
  { id: 'derechos', label: 'Derechos del consumidor' },
  { id: 'contacto', label: 'Contacto' },
];

const Arrepentimiento = () => {
  return (
    <LegalLayout
      title="Procedimiento de Arrepentimiento"
      updated="26 de agosto de 2026"
      sections={sections}
    >
      <section id="alcance">
        <h2>1. Alcance</h2>

        <p>
          Este procedimiento regula el ejercicio del derecho de arrepentimiento
          respecto de contrataciones realizadas a distancia con
          <strong> Tunica de Realidad</strong>, en adelante
          <strong> “TDR”</strong>, cuando dicho derecho resulte aplicable
          conforme a la normativa vigente.
        </p>

        <p>
          Con carácter general, el consumidor dispone de un plazo de 10 días
          para ejercer el derecho de revocación en las contrataciones realizadas
          a distancia, sin perjuicio de las excepciones o modalidades especiales
          que puedan resultar aplicables.
        </p>
      </section>

      <section id="como">
        <h2>2. Cómo ejercer el derecho</h2>

        <p>
          El consumidor podrá solicitar el arrepentimiento mediante el Botón de
          Arrepentimiento disponible en el sitio web de TDR.
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
          Para identificar correctamente la contratación y tramitar el pedido,
          TDR podrá solicitar únicamente los datos razonablemente necesarios,
          por ejemplo:
        </p>

        <ul>
          <li>nombre y apellido;</li>
          <li>correo electrónico utilizado en la contratación;</li>
          <li>servicio contratado;</li>
          <li>fecha de contratación;</li>
          <li>referencia de reserva, operación o pago, si existiera;</li>
          <li>
            información adicional necesaria para identificar la operación.
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
        <h2>5. Evaluación de la solicitud</h2>

        <p>TDR verificará:</p>

        <ul>
          <li>la contratación correspondiente;</li>
          <li>la fecha en que fue realizada;</li>
          <li>el servicio contratado;</li>
          <li>si el servicio fue prestado total o parcialmente;</li>
          <li>los pagos efectuados;</li>
          <li>
            las demás circunstancias relevantes para determinar el alcance del
            derecho.
          </li>
        </ul>
      </section>

      <section id="efectos">
        <h2>6. Efectos del arrepentimiento</h2>

        <p>
          Cuando el derecho de arrepentimiento resulte procedente, TDR dará curso
          a la revocación de la contratación y realizará las restituciones que
          correspondan conforme a la normativa aplicable.
        </p>

        <p>
          Cuando el servicio haya sido prestado total o parcialmente, el alcance
          de una eventual restitución se determinará en función de las
          prestaciones efectivamente realizadas y de las reglas legales
          aplicables.
        </p>
      </section>

      <section id="reintegros">
        <h2>7. Reintegros</h2>

        <p>
          Cuando corresponda un reintegro, TDR gestionará la devolución conforme
          a su Política de Reservas, Cancelaciones y Devoluciones.
        </p>

        <p>
          Siempre que sea posible, el reintegro se realizará mediante el mismo
          medio utilizado para efectuar el pago o mediante otro medio acordado
          con el consumidor.
        </p>
      </section>

      <section id="incompletas">
        <h2>8. Solicitudes incompletas</h2>

        <p>
          Si la información proporcionada no permitiera identificar correctamente
          la contratación, TDR podrá solicitar los datos mínimos adicionales
          necesarios para tramitar el pedido.
        </p>

        <p>
          Esta solicitud de información no tendrá por objeto dificultar ni
          impedir el ejercicio del derecho.
        </p>
      </section>

      <section id="comunicaciones">
        <h2>9. Comunicaciones</h2>

        <p>
          Las comunicaciones relacionadas con el arrepentimiento se enviarán al
          correo electrónico informado por el consumidor, salvo que se acuerde
          otro medio adecuado.
        </p>
      </section>

      <section id="conservacion">
        <h2>10. Conservación del trámite</h2>

        <p>
          TDR podrá conservar la constancia de la solicitud y de su resolución
          durante el tiempo necesario para acreditar el cumplimiento de sus
          obligaciones legales, contractuales y administrativas.
        </p>
      </section>

      <section id="derechos">
        <h2>11. Derechos del consumidor</h2>

        <p>
          Este procedimiento no limita ni sustituye los derechos reconocidos al
          consumidor por la normativa aplicable.
        </p>
      </section>

      <section id="contacto">
        <h2>12. Contacto</h2>

        <p>
          <strong>Tunica de Realidad — TDR</strong>
          <br />
          Correo electrónico: <strong>[EMAIL DE CONTACTO / LEGAL]</strong>
        </p>

        <p>
          El formulario correspondiente se integrará en esta página para
          permitir el ejercicio directo del derecho.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Arrepentimiento;