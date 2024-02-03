type SubmitObject = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type SubmitResponse = {
  status: "success" | "error" | "info" | "warn" | undefined;
  title: string;
  message: string;
}

async function submit(obj: SubmitObject): Promise<SubmitResponse> {
  try {
    //https://formsubmit.co/ajax/mauriciodurgante@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/mauriciodurgante@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) throw new Error("Erro ao enviar mensagem.")

    return { status: "success", title: "Sucesso", message: "Mensagem enviada com sucesso!" }
  } catch (err: any) {
    return { status: 'error', title: "Erro", message: err.message };
  }}

  export default submit