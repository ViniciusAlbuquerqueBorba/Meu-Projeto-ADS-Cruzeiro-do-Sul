const Validation = {
    // Função para iniciar a escuta do formulário
    init: () => {
        const form = document.getElementById('formProdutor');
        if (form) {
            form.addEventListener('submit', Validation.handleSubmit);
            
            // Máscara simples para CPF enquanto digita
            const cpfInput = document.getElementById('cpf');
            if(cpfInput) {
                cpfInput.addEventListener('input', (e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    value = value.replace(/(\d{3})(\d)/, "$1.$2");
                    value = value.replace(/(\d{3})(\d)/, "$1.$2");
                    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                    e.target.value = value;
                });
            }
        }
    },

    handleSubmit: (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        
        const cpf = document.getElementById('cpf').value;
        const erroCpf = document.getElementById('erro-cpf');
        
        // Verifica consistência do CPF
        if (!Validation.isCPF(cpf)) {
            alert("Atenção: Os dados informados possuem inconsistências.");
            document.getElementById('cpf').style.border = "2px solid red";
            erroCpf.style.display = "block";
            return; // Para o envio
        }

        // Se passou
        document.getElementById('cpf').style.border = "1px solid #ccc";
        erroCpf.style.display = "none";
        alert("Cadastro realizado com sucesso! (Simulação)");
        // Aqui você poderia limpar o form: event.target.reset();
    },

    // Algoritmo matemático de validação de CPF (Receita de bolo padrão)
    isCPF: (cpf) => {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111") return false;
            
        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(9))) return false;
        
        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11) rev = 0;
        if (rev != parseInt(cpf.charAt(10))) return false;
        
        return true;
    }
};