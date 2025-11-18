const templates = {
    home: `
      <section>
        <h2>Apoiando o Suinocultor Brasileiro</h2>
        <img src="assets/images/Banner.porco.png" alt="Banner ilustrativo com criação de suínos" class="banner-img">
        <p>A <strong>Toicinhos</strong> é uma organização do terceiro setor dedicada a fortalecer a Suinocultura no Brasil. Nossa missão é fornecer apoio técnico, logístico e educacional aos pequenos e médios produtores de suínos em todo o território nacional.</p>
        <p>Acreditamos que, com união e tecnologia, podemos garantir um setor mais justo, sustentável e lucrativo para todos os envolvidos nessa cadeia produtiva.</p>
      </section>
      
      <section>
        <h2>Entre em contato</h2>
        <p>Estamos prontos para ouvir você. Seja para dúvidas, parcerias ou apoio, nossa equipe esta a disposição.</p>
        <h3>Informações de Contato</h3>

        <address>       
          <dl>
            <dt>E-mail:</dt>
            <dd><a href="mailto:contato@toicinhos.org.br">contato@toicinhos.org.br</a></dd>
            
            <dt>Telefone:</dt>
            <dd><a href="tel:+5581999117291">(81) 99911-7291</a></dd>

            <dt>Sede</dt>
            <dd>Macaparana, PE, Brasil</dd>
          </dl>
        </address> 
      </section>
    `,

    projetos: `
    <section>
      <h2>Faça Parte da Mudança</h2>
      <p>Buscamos pessoas comprometidas para expandir nosso impacto. Confira nossos editais abertos:</p>
      
      <div class="grid-12">
        
        <article class="col-6 card">
          <h3>Edital para Voluntários</h3>
          <img src="assets/images/Pessoas_trabalhando_juntas(1).png" alt="Pessoas trabalhando juntas" class="card-img">
          <p>Procuramos voluntários nas áreas de Zootecnia, Veterinária e Marketing Digital para apoio remoto aos nossos associados. Seja a diferença na vida de um Suinocultor.</p>
          <p> 
            <a href="assets/docs/Edital_Voluntarios.pdf" download class="btn-download">
              📄 Baixar Edital (PDF) 
            </a>
          </p>
        </article>

        <article class="col-6 card">
          <h3>Processo Seletivo - Terceirizados</h3>
          <img src="assets/images/Tecnologia_no_campo(1).png" alt="Desenvolvimento de tecnologia no campo" class="card-img">
          <p>Estamos contratando serviços de desenvolvimento de software (PJ), para criação de um aplicativo de manejo de rebanho.</p>
          <p> 
            <a href="assets/docs/Edital_Terceirizados.pdf" download class="btn-download">
              📄 Baixar Edital (PDF) 
            </a>
          </p>
        </article>
      
      </div>
    </section>

    <section>
      <h2>Apoie Nossa Causa</h2>
      <p>Sua Doação é fundamental para mantermos nossos projetos ativos.</p>
      
      <div class="grid-12">
        
        <article class="col-6 card">
          <h3>Doe via PIX</h3>
          <p>Use nossa chave aleatória ou escaneie o QR Code:</p>
          <img src="assets/images/codigo_qr.png" alt="QR Code para Transferência da Doação" style="max-width: 150px; margin: 10px auto;">
          
          <label for="pix-key">Chave:</label>
          <input type="text" id="pix-key" value="29024e84-80b1-411a-9ecc-b4bc27e86897" readonly style="width: 100%;">
        </article>

        <article class="col-6 card">
          <h3>Transferência Bancária</h3>
          <p><strong>Banco Porco Nordeste</strong></p>
          <p>Agência: 0238</p>
          <p>Conta Corrente: 56789-0</p>
          <p>CNPJ: 00.123.456/0001-78</p>
        </article>
      
      </div>
    </section>
    `,

    cadastro: `
      <section>
        <h2>Junte-se à Toicinhos</h2>
        
        <form id="formProdutor">
          <fieldset>
            <legend>Cadastro de Produtores</legend>
            <p class="form-description">Ao se cadastrar, você ganha acesso a materiais exclusivos e consultoria técnica.</p>
            
            <div class="grid-12">
                
                <div class="col-12 form-group">
                    <label for="name">Nome Completo:</label>
                    <input type="text" id="name" name="nome" required placeholder="Seu nome Completo">          
                </div>

                <div class="col-12 form-group">
                    <label for="email">Seu melhor E-mail:</label>
                    <input type="email" id="email" name="email" required placeholder="exemplo@dominio.com">
                </div>

                <div class="col-6 form-group">
                    <label for="cpf_cnpj">CPF ou CNPJ:</label>
                    <input type="text" id="cpf" name="cpf_cnpj" required 
                           placeholder="000.000.000-00" 
                           minlength="11" maxlength="18">
                    <span id="erro-cpf" style="color: var(--color-error); font-size: 0.8rem; display:none; margin-top:5px;">CPF Inválido</span>
                </div>

                <div class="col-6 form-group">
                    <label for="nascimento">Data de Nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento" required>
                </div>

                <div class="col-6 form-group">
                    <label for="telefone">Telefone/Celular:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" required>
                </div>
                
                <div class="col-6 form-group">
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" placeholder="00000-000" required>
                </div>

                <div class="col-12 form-group">
                    <label for="endereco">Endereço Completo:</label>
                    <input type="text" id="endereco" name="endereco" required>
                </div>

                <div class="col-8 form-group">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>
                </div>

                <div class="col-4 form-group">
                    <label for="estado">Estado (UF):</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                </div>

                <div class="col-12 form-group">
                    <img src="assets/images/Gemini_Generated_Image_rwomeprwomeprwom.png" 
                         alt="Mapa do Brasil com sedes do programa ilustrada por porcos" 
                         class="banner-img" 
                         style="max-width: 100%; height: auto; margin-top: 20px;">
                </div>

                <div class="col-12 form-group checkbox-group">
                    <input type="checkbox" id="termos" name="termos" required>
                    <label for="termos">
                        Li e aceito os <a href="#termos" target="_blank">Termos de Associação</a>
                    </label>
                </div>

            </div> 
          </fieldset>
          
          <button type="submit" class="btn-submit">Quero me Associar</button>
        </form>
    `
};