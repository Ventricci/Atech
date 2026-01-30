import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, description } = body;

    // Validações básicas no servidor
    if (!name || !phone || !email || !description) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Monta o corpo do e-mail em formato HTML
    const emailBody = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background-color: #16425B;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #16425B;
            }
            .value {
              margin-top: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Nova Mensagem de Contato - ATECH</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Telefone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">E-mail:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Descrição:</div>
                <div class="value">${description}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar e-mail usando Resend
    try {
      const data = await resend.emails.send({
        from: 'ATECH - Contato <onboarding@resend.dev>', // Domínio de teste do Resend
        to: 'rafaelpereiradecastro06@gmail.com',
        replyTo: email,
        subject: `Nova mensagem de contato - ${name}`,
        html: emailBody,
      });

      console.log('E-mail enviado com sucesso:', data);

      return NextResponse.json(
        { message: 'Mensagem enviada com sucesso' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Erro ao enviar e-mail:', emailError);
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Por favor, tente novamente.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
