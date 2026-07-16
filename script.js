/*
 * CONFIGURAÇÃO OBRIGATÓRIA
 * Troque o número abaixo pelo WhatsApp responsável pelas inscrições.
 * Use somente números, incluindo código do país (55) e DDD.
 * Exemplo: 5521999999999
 */
const WHATSAPP_NUMBER = "5500000000000";

const form = document.getElementById("registrationForm");
const statusBox = document.getElementById("formStatus");

function showStatus(message, type) {
  statusBox.textContent = message;
  statusBox.className = `form-status ${type} is-visible`;
}

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (WHATSAPP_NUMBER === "5500000000000") {
    showStatus(
      "Configure o número do WhatsApp em assets/js/script.js antes de publicar o site.",
      "error"
    );
    return;
  }

  const data = new FormData(form);

  const message = [
    "*NOVA INSCRIÇÃO — CAPACITAÇÃO EM DISCIPULADO*",
    "",
    `*Nome:* ${data.get("nome")}`,
    `*WhatsApp:* ${data.get("telefone")}`,
    `*E-mail:* ${data.get("email")}`,
    `*Cidade/UF:* ${data.get("cidade")}`,
    `*Igreja/Organização:* ${data.get("igreja") || "Não informado"}`,
    `*Função ministerial:* ${data.get("funcao") || "Não informado"}`,
    `*Motivação:* ${data.get("interesse") || "Não informado"}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  showStatus(
    "Seus dados foram organizados. O WhatsApp será aberto para concluir o envio.",
    "success"
  );

  window.open(url, "_blank", "noopener,noreferrer");
});
