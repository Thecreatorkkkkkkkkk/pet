let idCounter = 1; // Contador para o ID

        function agendar() {
            // Captura os valores dos inputs
            const nomePet = document.getElementById('nomePet').value;
            const racapet = document.getElementById('racapet').value;
            const donopet = document.getElementById('donopet').value;
            const telefoneDono = document.getElementById('telefoneDono').value;

            // Cria uma nova linha na tabela
            const tabela = document.getElementById('tabelaAgendamentos');
            const novaLinha = tabela.insertRow();

            // Adiciona as células à nova linha
            const celulaId = novaLinha.insertCell(0);
            const celulaNomePet = novaLinha.insertCell(1);
            const celulaRaca = novaLinha.insertCell(2);
            const celulaDonoPet = novaLinha.insertCell(3);
            const celulaTelefone = novaLinha.insertCell(4);
            const celulaRemover = novaLinha.insertCell(5);

            // Preenche as células com os valores
            celulaId.innerText = idCounter++;
            celulaNomePet.innerText = nomePet;
            celulaRaca.innerText = racapet;
            celulaDonoPet.innerText = donopet;
            celulaTelefone.innerText = telefoneDono;

            // Cria um botão de remover
            const btnRemover = document.createElement('button');
            btnRemover.innerText = 'Remover';
            btnRemover.onclick = function() {
                tabela.deleteRow(novaLinha.rowIndex);
            };
            celulaRemover.appendChild(btnRemover);

            // Limpa os campos do formulário
            document.getElementById('agendamentoForm').reset();
        }