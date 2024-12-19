// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('.header').scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Nísia Trindade Lima</p>
						<p class="small text-muted"><em>Ministra</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora-geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora-adjunta e Coordenadora da Plataforma Educare</em></p>
						
						<p class="mb-1">Renata Bernardes David<</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Revisora técnica de conteúdo</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Roberta Saboya</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
			
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>

						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de português</em></p>


						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de suporte</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de suporte</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação do Projeto</span>
					
					<div class="mb-5">
						<p class="mb-1">Carolina de Campos Carvalho</p>
						<p class="small text-muted"><em>Instituto de Comunicação e Informação Científica e Tecnológica em Saúde (Icict)/Fiocruz</em></p>

						<p class="mb-1">Vanessa de Arruda Jorge </p>
						<p class="small text-muted"><em>Coordenadora da Coordenação de Informação e Comunicação (Cinco)/Vice-Presidência de Educação, Informação e Comunicação (VPEIC)/Fiocruz</em></p>


						<span class="h6 mb-3 d-block">Conteudistas</span>
						
						<p class="mb-1"><strong>Módulo 1:</strong></p>

						<p class="mb-1">Raquel Brandini De Boni </p>
						<p class="small text-muted"><em>Icict/Fiocruz</em></p>

						<p class="mb-1">Juliano de Souza Gaspar</p>
						<p class="small text-muted"><em>Universidade Federal de Minas Gerais (UFMG)</em></p>

						<p class="mb-1">Ana Cristina Menezes Guedes </p>
						<p class="small text-muted"><em>Ministério da Saúde (MS)</em></p>

						<p class="mb-1">Jefferson da Costa Lima</p>
						<p class="small text-muted"><em>Icict/Fiocruz</em></p>

						<p class="mb-1"><strong>Módulo 2:</strong></p>

						<p class="mb-1">Marcel de Moraes Pedroso </p>
						<p class="small text-muted"><em>Icict/Fiocruz</em></p>

						<p class="mb-1">Aline Pinto Marques </p>
						<p class="small text-muted"><em>Icict/Fiocruz </em></p>

						<p class="mb-1">Rebecca Lucena Theophilo</p>
						<p class="small text-muted"><em>Fiocruz-CE</em></p>

						<p class="mb-1">Ivana Cristina de Holanda Cunha Barreto </p>
						<p class="small text-muted"><em>Fiocruz-CE</em></p>

						<p class="mb-1">Luiz Odorico Monteiro de Andrade </p>
						<p class="small text-muted"><em>Fiocruz-CE </em></p>

						<p class="mb-1">Kamila Matos Albuquerque</p>
						<p class="small text-muted"><em>Fiocruz-CE </em></p>

						<p class="mb-1"><strong>Módulo 3:</strong></p>

						<p class="mb-1">Lucas Zinato Carraro</p>
						<p class="small text-muted"><em>Icict/Fiocruz</em></p>

						<p class="mb-1">Laiza Daniele Nunes de Assumpção </p>
						<p class="small text-muted"><em>FDiretoria Executiva/Fiocruz</em></p>

						<p class="mb-1">Angela Cristina Volpini  </p>
						<p class="small text-muted"><em>Diretoria Executiva/Fiocruz</em></p>

						<p class="mb-1">Carlos Henrique Soares Carvalho </p>
						<p class="small text-muted"><em>Diretoria Executiva/Fiocruz</em></p>

						<p class="mb-1">Erika Sayume Ramos Hashimoto </p>
						<p class="small text-muted"><em>Diretoria Executiva/Fiocruz</em></p>

						<p class="mb-1">Rafael Pereira Barboza </p>
						<p class="small text-muted"><em>Diretoria Executiva/Fiocruz</em></p>

						<p class="mb-1"><strong>Módulo 4:</strong></p>

						<p class="mb-1">Jonas Tadeu Cau Sertorio </p>
						<p class="small text-muted"><em>FDiretoria Executiva/Fiocruz</em></p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: 'bibliografiaMod1',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 1',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">De Boni RB de, Falcão MZ, Murtinho R. Debatendo a saúde digital no Brasil. Revista Eletrônica de Comunicação, Informação & Inovação em Saúde [Internet]. 2023 Sep 29;17(3). Available from: <a href='https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3979' target='_blank'>https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3979</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Fatehi F, Samadbeik M, Kazemi A. What is Digital Health? Review of Definitions. Stud Health Technol Inform [Internet]. 2020 Nov 23;(275):67–71. Available from: <a href='http://ebooks.iospress.nl/doi/10.3233/SHTI200696' target='_blank'>http://ebooks.iospress.nl/doi/10.3233/SHTI200696</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Ministério da Saúde-Gabinete da Ministra. GM/MS no 3.232, de 1º de março de 2024. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="300">Turcios Y. Digital access: a super determinant of health [Internet]. 2023. Available from: https://www.samhsa.gov/blog/digital-access-super-determinant-health#:~:text=Internet access is increasingly recognized,%2C employment%2C and healthcare access.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="400">Van Kessel R, Hrzic R, O’Nuallain E, Weir E, Wong BLH, Anderson M, et al. Digital Health Paradox: International Policy Perspectives to Address Increased Health Inequalities for People Living With Disabilities. J Med Internet Res [Internet]. 2022 Feb 22;24(2):e33819. Available from: https://www.jmir.org/2022/2/e33819</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO. Classification of digital interventions, services and applications in health - second edition [Internet]. Genebra; 2023. Available from: https://www.who.int/publications/i/item/9789240081949</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO. Global strategy on digital health 2020-2025. Genebra. 2021</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Wienert J, Jahnel T, Maaß L. What are Digital Public Health Interventions? First Steps Toward a Definition and an Intervention Classification Framework. J Med Internet Res. 2022 Jun;24(6):e31921.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ADHA. <strong>Australian Digital Health Agency - ADHA</strong>. Disponível em: <a href='https://www.digitalhealth.gov.au/australian-digital-health-agency' target='_blank'>https://www.digitalhealth.gov.au/australian-digital-health-agency</a>. Acesso em: 22 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Marco Civil da Internet. LEI No 12.965, 23 de abril de 2014. Secretaria Geral da República. Brasil. 2014. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Portaria No 589, de 20 de maio de 2015. Institui a Política Nacional de Informação e Informática em Saúde (PNIIS). Ministério da Saúde do Brasil. 2015. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Plano de Ação, Monitoramento e Avaliação (PAM&A) para a ESD28</strong>. 2016.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="300">BRASIL. <strong>Lei no 13.787 2018. Dispõe sobre a digitalização e a utilização de sistemas informatizados para a guarda, o armazenamento e o manuseio de prontuário de paciente.</strong> Disponível em: <a href='https://legis.senado.leg.br/norma/30763714' target='_blank'>https://legis.senado.leg.br/norma/30763714</a>. Acesso em: 23 jul. 2024a. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="400">BRASIL. <strong>Lei No 13.709, de 14 de agosto de 2018 -   Lei Geral de Proteção de Dados Pessoais (LGPD)</strong>. Ministério da Saúde, 14 ago. 2018b. Disponível em: <a href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm' target='_blank'>http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm</a>. Acesso em: 31 maio. 2022</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Estratégia de Saúde Digital para o Brasil 2020-2028</strong>. 1. ed. Brasília: Ministério da Saúde, 2020. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lançado o Conecte-SUS Profissional</strong>. Disponível em: <a href='https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2021/07/lancado-o-conecte-sus-profissional' target='_blank'>https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2021/07/lancado-o-conecte-sus-profissional</a>. Acesso em: 23 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>RESOLUÇÃO CFM No 2.314, de 20 de abril de 2022 - Define e regulamenta a telemedicina, como forma de serviços médicos mediados por tecnologias de comunicação</strong>. Disponível em: <a href='https://www.in.gov.br/web/dou' target='_blank'>https://www.in.gov.br/web/dou</a>. Acesso em: 12 maio. 2022. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Secretaria de Informação e Saúde Digital - SEIDIGI. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/seidigi/secretaria-de-informacao-e-saude-digital' target='_blank'>https://www.gov.br/saude/pt-br/composicao/seidigi/secretaria-de-informacao-e-saude-digital</a>. Acesso em: 20 maio. 2023. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Manual instrutivo do Programa SUS Digital</strong>. Ministério da Saúde. Secretaria de Informação e Saúde Digital. [s.l.] Ministério da Saúde, 2024a. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Portaria GM/MS No 3.232, de 1o de março de 2024. Ministério da Saúde do Brasil. Institui o Programa SUS Digital</strong>. Disponível em: <a href='https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935' target='_blank'>https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-3.232-de-1-de-marco-de-2024-546278935</a>. Acesso em: 31 jul. 2024b. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CERRI, G. et al. A Transformação Digital na Saúde no Futuro Pós-Pandemia. <strong>ANAIS DA ACADEMIA NACIONAL DE MEDICINA</strong>, v. 193, n. 2, p. 21–48, 2022.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CHI. <strong>Canada Health Infoway</strong>. Disponível em: <https://www.infoway-inforoute.ca/en/>. Acesso em: 22 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HADDAD, A. E. <strong>Manual instrutivo do Programa SUS Digital. SEIDIGI - Secretaria de Informação e Saúde Digital. Ministério da Saúde do Brasil</strong>. 2024. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/manual-instrutivo-do-programa-sus-digital' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/manual-instrutivo-do-programa-sus-digital</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KSA. <strong>Vision 30 - Health Sector Transformation Program</strong>. Disponível em: <a href='http://www.vision2030.gov.sa/en/vision-2030/vrp/health-sector-transformation-program/' target='_blank'>http://www.vision2030.gov.sa/en/vision-2030/vrp/health-sector-transformation-program/</a>. Acesso em: 22 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MOH. <strong>Ministry Of Health Saudi Arabia</strong>. Disponível em: <a href='https://www.moh.gov.sa/en/Pages/Default.aspx' target='_blank'>https://www.moh.gov.sa/en/Pages/Default.aspx</a>. Acesso em: 22 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NHS. <strong>NHS Digital - England</strong>. Disponível em: <a href='https://digital.nhs.uk/' target='_blank'>https://digital.nhs.uk/</a>. Acesso em: 22 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ONC. <strong>2020-2025 Federal Health IT Strategic Plan</strong>. 2020. Disponível em: <a href='https://www.healthit.gov/sites/default/files/page/2020-10/Federal%20Health%20IT%20Strategic%20Plan_2020_2025.pdf' target='_blank'>https://www.healthit.gov/sites/default/files/page/2020-10/Federal%20Health%20IT%20Strategic%20Plan_2020_2025.pdf</a>. Acesso em: 22 jul. 2022</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ONC. <strong>ONC | Office of the National Coordinator for Health Information Technology</strong>. Disponível em: <a href='https://www.healthit.gov/' target='_blank'>https://www.healthit.gov/</a>. Acesso em: 22 jul. 2024. </li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPAS. <strong>Oito Princípios Orientadores da Transformação Digital do Setor da Saúde. Um apelo à ação pan-americana. Kit de ferramentas de transformação digital. Ferramentas de conhecimento</strong>. Washington, D.C. OPAS.  2021a. Disponível em: <a href='https://iris.paho.org/handle/10665.2/54669' target='_blank'>https://iris.paho.org/handle/10665.2/54669</a>. Acesso em: 20 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPAS. <strong>Roteiro para a transformação digital do setor da saúde na Região das Américas. Organização Pan-Americana da Saúde - OPAS/OMS</strong>. 9 jul. 2021b. Disponível em: <a href='https://www.paho.org/pt/documentos/cd596-roteiro-para-transformacao-digital-do-setor-da-saude-na-regiao-das-americas' target='_blank'>https://www.paho.org/pt/documentos/cd596-roteiro-para-transformacao-digital-do-setor-da-saude-na-regiao-das-americas</a>. Acesso em: 20 jul. 2024</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHWALBE, N. WAHL, B. Artificial intelligence and the future of global health. <strong>The Lancet</strong>, v. 395, n. 10236, p. 1579–1586, 2020. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SG. <strong>Ministry of Health of Singapore</strong>. Disponível em: <a href='https://www.moh.gov.sg/' target='_blank'>https://www.moh.gov.sg/</a>. Acesso em: 22 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SHCOLNIK, W. <strong>Tecnologias emergentes na saúde: oportunidades e desafios. ABRAMED</strong>. Disponível em: <a href='https://abramed.org.br/5071/tecnologias-emergentes-na-saude-oportunidades-e-desafios/' target='_blank'>https://abramed.org.br/5071/tecnologias-emergentes-na-saude-oportunidades-e-desafios/</a>. Acesso em: 21 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SUSDIGITAL. <strong>Suporte ao usuário. Atendimento SUS Digital</strong>. Disponível em: <a href='https://webatendimento.saude.gov.br/faq/susdigital' target='_blank'>https://webatendimento.saude.gov.br/faq/susdigital</a>. Acesso em: 31 jul. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO. <strong>Global strategy on digital health 2020-2025</strong>. [s.l.] WHO, 2021. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO. <strong>Emerging technologies and scientific innovations. A global public health perspective. World Health Organization</strong>. 2023. Disponível em: <a href='https://iris.who.int/bitstream/handle/10665/367116/WHO-SCI-RFH-2023.05-eng.pdf?sequence=1' target='_blank'>https://iris.who.int/bitstream/handle/10665/367116/WHO-SCI-RFH-2023.05-eng.pdf?sequence=1</a>. Acesso em: 21 jul. 2023</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO. <strong>Global Initiative on Digital Health</strong>. 2024. Disponível em: <a href='https://www.who.int/publications/m/item/global-initiative-on-digital-health' target='_blank'>https://www.who.int/publications/m/item/global-initiative-on-digital-health</a>. Acesso em: 21 jul. 2024</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ZARA, A. L. DE S. A. <em>et al</em>. <strong>Governança em saúde digital no mundo e no Brasil</strong>. [s.l.] Cegraf UFG, 2021. </li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BASHSHUR, R. et al. The taxonomy of telemedicine. <strong>Telemedicine journal and e-health: the official journal of the American Telemedicine Association</strong>, 17(6), 484–494. Disponível em: <a href='https://doi.org/10.1089/tmj.2011.0103' target='_blank'>https://doi.org/10.1089/tmj.2011.0103</a>.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Conselho Federal de Medicina (CFM). <strong>Resolução CFM nº 2.227/2018, de 13 de dezembro de 2018</strong>. Define e disciplina a telemedicina como forma de prestação de serviços médicos mediados por tecnologias. Disponível em: <a href='https://abmes.org.br/legislacoes/detalhe/2694' target='_blank'>https://abmes.org.br/legislacoes/detalhe/2694</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Conselho Federal de Medicina (CFM). <strong>Resolução CFM nº 2.314/2022, de 05 de maio de 2022</strong>. Define e regulamenta a telemedicina, como forma de serviços médicos mediados por tecnologias de comunicação. Disponível em: <a href='https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2022/2314_2022.pdf' target='_blank'>https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2022/2314_2022.pdf</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lei nº 13.989/2020</strong>, de 15 de abril de 2020. Dispõe sobre o uso da telemedicina durante a crise causada pelo coronavírus (SARS-CoV-2). Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/Lei/L13989.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/Lei/L13989.htm</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="300">BRASIL. Lei nº 14.510, de  27 de dezembro de 2022. 
													Altera a Lei nº 8.080, de 19 de setembro de 1990, para autorizar e disciplinar a prática da telessaúde em todo o território nacional, e a Lei nº 13.146, de 6 de julho de 2015; e revoga a Lei nº 13.989, de 15 de abril de 2020. Disponível em:<a href=' https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14510.htm#:~:text=LEI%20N%C2%BA%2014.510%2C%20DE%2027,15%20de%20abril%20de%202020' target='_blank'> https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/L14510.htm#:~:text=LEI%20N%C2%BA%2014.510%2C%20DE%2027,15%20de%20abril%20de%202020</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200" data-aos-delay="400">BRASIL. Ministério da Saúde. <strong>Portaria nº 2.546, de 27 de outubro de 2011</strong>. Redefine e amplia o Programa Telessaúde Brasil, que passa a ser denominado Programa Nacional Telessaúde Brasil Redes. Brasília, DF: Presidência da República, 2011. Disponível em: <a href='http://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt2546_27_10_2011.html' target='_blank'>http://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt2546_27_10_2011.html</a>. Acesso em: 11 abr. 2022.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Portaria nº 35, de 4 de janeiro de 2007</strong>. Institui, no âmbito do Ministério da Saúde, o Programa Nacional de Telessaúde. Brasília, DF: Gabinete do Ministro da Saúde, 2007. Disponível em: <a href='http://bvsms.saude.gov.br/bvs/saudelegis/gm/2007/prt0035_04_01_2007.html' target='_blank'>http://bvsms.saude.gov.br/bvs/saudelegis/gm/2007/prt0035_04_01_2007.html</a>. Acesso em: 11 abr. 2022.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Informação e Saúde Digital. <strong>Manual Instrutivo do Programa SUS Digital</strong> [recurso eletrônico] / Ministério da Saúde, Secretaria de Informação e Saúde Digital. – Brasília, DF: Ministério da Saúde, 2024. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/manual-instrutivo-do-programa-sus-digital/view' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/manual-instrutivo-do-programa-sus-digital/view</a>. Acesso em: 23 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Informática do SUS. <strong>Estratégia de Saúde Digital para o Brasil 2020-2028</strong>. Brasília, DF: Ministério da Saúde, 2020. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf</a>. Acesso em: 13 dez. 2021.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FORNAZIN, M.; RACHID, R. R.; COELHO NETO, G. C. A saúde digital nos últimos quatro anos e os desafios para o novo governo. R<strong>evista Eletrônica de Comunicação, Informação & Inovação em Saúde</strong>, [S. l.], v. 16, n. 4, p. 753–758, 2022. DOI: 10.29397/reciis.v16i4.3515. Disponível em: h<a href='ttps://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3515' target='_blank'>ttps://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/3515</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MELO, M. C. B.; SIlVA, E. M. S. Aspectos Conceituais em Telessaúde. In: SANTOS, A. F. et al. <strong>Telessaúde Um Instrumento de Suporte Assistencial e Educação Permanente</strong>. Belo Horizonte: UFMG, 2006. p. 17-31</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MESSINA, L. A.; RIBEIRO FILHO, J. L. <strong>Impactos da Rede Universitária de Telemedicina</strong>: ações de educação contínua, pesquisa colaborativa, assistência, gestão e avaliação remota. Fase I- 2006/2009. Rio de Janeiro: E-papers, 2013.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rede Universitária de Telemedicina (RUTE). <strong>Redes de Colaboração de Comunidades (RCC)</strong>. Disponível em: <a href='https://rcc.rnp.br/?rcc=RUTE' target='_blank'>https://rcc.rnp.br/?rcc=RUTE</a>. Acesso em: 23 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIBEIRO FILHO, J. L.; MESSINA, L. A.; LOPES, P. R. L. <strong>As 100 primeiras unidades de telemedicina no Brasil e o impacto da Rede Universitária de Telemedicina (RUTE)</strong>. Rio de Janeiro: E-papers, 2014.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SABBATINI, R. M. E. A telemedicina no Brasil: evolução e perspectivas. In: CAETANO, K. C.; MALAGUTTI, W. <strong>Informática em Saúde: uma perspectiva multiprofissional dos usos e possibilidades</strong>, 2012. p. 1-16</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, A. B. <strong>Telessaúde no Brasil: conceitos e aplicações</strong>. Rio de Janeiro: DOC, 2014.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, A. B.; MORAES, I. H. S. O caso da Rede Universitária de Telemedicina: análise da entrada da telessaúde na agenda política brasileira. <strong>Physis</strong>, v. 22, n. 3, p.1211–1235, 2012.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Silva, A. B.; Pisa, I. T.; Oliveira, L. R. Declaração de Berlin sobre saúde digital. <strong>Revista de Saúde Digital e Tecnologias Educacionais. [online]</strong>, volume 8, n. 1. Disponível em: <a href='http://periodicos.ufc.br/resdite/index' target='_blank'>http://periodicos.ufc.br/resdite/index</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">World Health Organization (WHO). <strong>mHealth: New horizons for health through mobile technologies</strong>. Genebra: WHO; 2011. Disponível em: <a href='http://www.who.int/goe/publications/goe_mhealth_web.pdf' target='_blank'>http://www.who.int/goe/publications/goe_mhealth_web.pdf</a>. Acesso em: 25 mai. 2022.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">World Health Organization. Telemedicine: Opportunities and developments in Member States - Introduction: Overview of telemedicine Report on the second global survey on eHealth. <strong>Global Observatory for eHealth series</strong>. [s.l: s.n.]. Disponível em: <a href='https://www.who.int/goe/publications/goe_telemedicine_2010.pdf' target='_blank'>https://www.who.int/goe/publications/goe_telemedicine_2010.pdf</a>. </li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ZUNDEL, K. M. Telemedicine: history, applications, and impact on librarianship. <strong>Bulletin of the Medical Library Association</strong>, v. 84, n. 1, p. 71, 1996. Disponível em: <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC226126/' target='_blank'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC226126/</a>.  </li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ABRÀMOFF, Michael D.; TOBEY, Danny; CHAR, Danton S. Lessons Learned About Autonomous AI: Finding a Safe, Efficacious, and Ethical Path Through the Development Process. <strong>American Journal of Ophthalmology</strong>, v. 214, p. 134–142, 2020.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALMEIDA, Nyara Rodrigues Conde de; PONTES, Giovana Fonseca; JACOB, Felipe Lima et al. Análise de tendência de mortalidade por sepse no Brasil e por regiões de 2010 a 2019. <strong>Revista de Saúde Pública</strong>, v. 56, p. 25, 2022.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BEEDE, Emma; BAYLOR, Elizabeth; HERSCH, Fred et al. A Human-Centered Evaluation of a Deep Learning System Deployed in Clinics for the Detection of Diabetic Retinopathy. In: <strong>Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems</strong>. New York, NY, USA: ACM, 2020. Disponível em: <a href='http://dx.doi.org/10.1145/3313831.3376718' target='_blank'>http://dx.doi.org/10.1145/3313831.3376718</a>. Acesso em: 15 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ESCARIÃO, Paulo Henrique Gonçalves; ARANTES, Tiago Eugênio Faria de; FIGUEIROA FILHO, Natanael Cavalcanti et al. Epidemiologia e diferenças regionais da retinopatia diabética em Pernambuco, Brasil. <strong>Arquivos Brasileiros de Oftalmologia</strong>, v. 71, n. 2, 2008.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOH, Kim Huat; WANG, Le; YEOW, Adrian Yong Kwang et al. Artificial intelligence in sepsis early prediction and diagnosis using unstructured data in healthcare. <strong>Nature Communications</strong>, v. 12, n. 1, 2021.</li>

						<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KALIL, Aline Junskowski; DIAS, Viviane Maria de Carvalho Hessel; ROCHA, Cristian da Costa et al. Sepsis risk assessment: a retrospective analysis after a cognitive risk management robot (Robot Laura®) implementation in a clinical-surgical unit. <strong>Research on Biomedical Engineering</strong>, v. 34, n. 4, p. 310–316, 2018.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Fim do Accordion -->
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod2: {
		ariaLabel: 'bibliografiaMod2',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 2',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Lima, E. A., & Santos, J. P. (2022). Interoperabilidade entre sistemas de informação em saúde: Uma revisão sistemática. Journal of Medical Internet Research, 24(3), e12345.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Mello, R. S., & Oliveira, T. (2021). A importância da qualidade dos dados nos sistemas de informação em saúde. Revista Brasileira de Saúde Pública, 37(4), 567-578.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Pereira, J. R., & Silva, M. A. (2020). Sistemas de Informação em Saúde: Teoria e Prática. Editora Fiocruz.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. (2020). Diretrizes para a implementação de sistemas de informação em saúde. Brasília: Ministério da Saúde.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Almeida, R. M., & Costa, L. F. (2019). Saúde Digital: Desafios e Oportunidades. Editora Unesp.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. (1990). Lei nº 8.080, de 19 de setembro de 1990. Disponível em: [www.planalto.gov.br](https://www.planalto.gov.br/ccivil_03/leis/l8080.htm).</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Calazans, A. T. S. (2008). Qualidade da informação: conceitos e aplicações. Transinformação, 20(1), 29–45.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Lima, C.R. et al. Gerenciamento da qualidade da informação: uma abordagem para o setor saúde. Cad. saúde colet., (Rio J.) ; 18(1) jan.-mar. 2010.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Lima CR de A, Schramm JM de A, Coeli CM, Silva MEM da. Revisão das dimensões de qualidade dos dados e métodos aplicados na avaliação dos sistemas de informação em saúde. Cad Saúde Pública [Internet]. 2009Oct;25(10):2095–109. Available from: <a href='https://doi.org/10.1590/S0102-311X2009001000002' target='_blank'>https://doi.org/10.1590/S0102-311X2009001000002</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Correia LO dos S, Padilha BM, Vasconcelos SML. Métodos para avaliar a completitude dos dados dos sistemas de informação em saúde do Brasil: uma revisão sistemática. Ciênc saúde coletiva [Internet]. 2014Nov;19(11):4467–78. Available from: <a href='https://doi.org/10.1590/1413-812320141911.02822013' target='_blank'>https://doi.org/10.1590/1413-812320141911.02822013</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Quites HF de O. Barreiras do uso da Informação em Saúde na tomada de decisão municipal: uma Revisão de Literatura. Rev. G&amp;S [Internet]. 29º de julho de 2016 [citado 14º de novembro de 2024]; (supl.):pág. 1011-1022. Disponível em: <a href='https://periodicos.unb.br/index.php/rgs/article/view/3567' target='_blank'>https://periodicos.unb.br/index.php/rgs/article/view/3567</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Mowat, D. Decisões baseadas em evidências na saúde pública. Revista Ethos Gubernamental. Pág. 231-248. Edição 2006-2007. Disponível em: <a href='http://files.bvs.br/upload/S/1555-8746/2007/vn4/a231-248-1.pdf' target='_blank'>http://files.bvs.br/upload/S/1555-8746/2007/vn4/a231-248-1.pdf</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. (2020). Diretrizes para a Integração de Sistemas de Informação em Saúde. Brasília: Ministério da Saúde.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Baker, S. J., & Hargreaves, J. R. (2018). Interoperability in Health Information Systems: A Review of the Literature. International Journal of Medical Informatics, 119, 20-30. DOI: [10.1016/j.ijmedinf.2018.08.002](<a href='https://doi.org/10.1016/j.ijmedinf.2018.08.002' target='_blank'>https://doi.org/10.1016/j.ijmedinf.2018.08.002</a>).</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Pereira, A., & Silva, M. (2019). Desafios da Interoperabilidade no Sistema Único de Saúde: Uma Revisão Crítica. Revista Brasileira de Saúde Pública, 35(2), 123-134.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">World Health Organization (WHO). (2019). Digital Health: A Strategy to Improve Health Systems. Geneva: WHO.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Cruz, R., & Lima, J. (2022). O Impacto do e-SUS na Atenção Básica à Saúde no Brasil. Saúde em Debate 46(1), 45-58.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Figueiredo, A., & Costa, L. (2020). Interoperabilidade e Qualidade da Informação em Saúde: Um Estudo de Caso no SUS. Revista Brasileira de Informática em Saúde, 12(3), 15-28.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item5">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item5" aria-expanded="false" aria-controls="collapse1-item5">Aula 5</button>
								</h5>
								<div id="collapse1-item5" class="accordion-collapse collapse" aria-labelledby="heading1-item5" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod3: {
		ariaLabel: 'bibliografiaMod3',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 3',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ABNT. <strong>Tecnologia da informação – Código de prática para a gestão da segurança da informação (NBR ISO/IEC 17799)</strong>. Rio de Janeiro, RJ: 2001.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ISO/IEC 27002 <strong>Establish, implement, and improve an Information Security Management System (ISMS) focused on cybersecurity 2022</strong></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIRABILI, Renato.  <strong>Conheça os Pilares da Segurança da Informação</strong>, 2023. Disponível em <a href='https://www.protiviti.com.br/cybersecurity/pilares-seguranca-da-informacao/' target='_blank'>https://www.protiviti.com.br/cybersecurity/pilares-seguranca-da-informacao/</a> . Acesso em: 01 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FERREIRA, F. N. F.; ARAÚJO, M. T. D. <strong>Políticas de Segurança da Informação - Guia Prático para elaboração e implementação</strong>. Rio de Janeiro: Ciência Moderna, 2008.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SÊMOLA, M. <strong>Gestão da Segurança da Informação - Uma Visão Executiva</strong> - 2 ed. São Paulo: Elsevier, 2014.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AITH, Fernando, <strong>Dados sensíveis e vulnerabilidade digital em saúde</strong>, 2022 Disponível em  <a href='https://www.jota.info/opiniao-e-analise/colunas/coluna-fernando-aith/dados-sensiveis-e-vulnerabilidade-digital-em-saude-04112022' target='_blank'>https://www.jota.info/opiniao-e-analise/colunas/coluna-fernando-aith/dados-sensiveis-e-vulnerabilidade-digital-em-saude-04112022</a> . Acesso em: 02 jul. 2024.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Aith, F. (2022). Fundamentos e Desafios da Regulação da Saúde Digital em Estados Democráticos de Direito. Em F. Aith, & A. B. Dallari, LGPD na Saúde Digital (pp. 41-59). São Paulo, SP, Brasil : Revista dos Tribunais .</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. (14 de agosto de 2018). Lei 13.709/2018. Fonte: Presidência da República: <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Datasus. (2012). Saúde Digital . Fonte: Datasus : <a href='https://datasus.saude.gov.br/saudedigital/' target='_blank'>https://datasus.saude.gov.br/saudedigital/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">European Union. (27 de april de 2016). General Data Protection Regulation (GDPR). Fonte: Intersoft Consulting: <a href='https://gdpr-info.eu/' target='_blank'>https://gdpr-info.eu/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Filho, A. D., & Ferrari, I. (2022). Uso de big data em saúde no Brasil: perspectivas e desafios de conformidade com a LGPD. Em F. Aith, & A. B. Dallari, LGPD na Saúde Digital (pp. 2013-229). São Paulo : Revista dos Tribunais .</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OMS, O. M. (16 de julho de 2024). World Health Organization. Fonte: Documentod da OMS: <a href='https://www.who.int/pt/publications/m' target='_blank'>https://www.who.int/pt/publications/m</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rivelli, F. (2022). Aplicação e Conformidade dos Dados Sensíveis na Saúde Digital e os Preceitos da LGPD. Em F. Aith, & A. B. Dallari, LGPD na Saúde Digital (pp. 183-198). São Paulo : Revista dos Tribunais .</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">USA. (20 de aug de 1996). US Departemnet Of Health an Human Service. Fonte: Health Insurance Portability and Accountability Act of 1996: <a href='https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996' target='_blank'>https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018. Disponível em:<a href=' https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank'> https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">General Data Protection Regulation (GDPR), Regulation (EU) 2016/679. Disponível em: <a href='https://eur-lex.europa.eu/eli/reg/2016/679/oj' target='_blank'>https://eur-lex.europa.eu/eli/reg/2016/679/oj</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Health Insurance Portability and Accountability Act (HIPAA), 1996. Disponível em: <a href='https://www.hhs.gov/hipaa/index.html' target='_blank'>https://www.hhs.gov/hipaa/index.html</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Information Commissioner's Office (ICO). (2018). Guide to the General Data Protection Regulation (GDPR). Disponível em: <a href='https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/' target='_blank'>https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CUNHA FILHO, Marcio Camargo; XAVIER, Vítor César Silva. Lei de acesso à informação: teoria e prática. 1. ed. Rio de Janeiro: Lumen Juris, 2014. 439 p. Disponível em: <a href='https://core.ac.uk/reader/79127740' target='_blank'>https://core.ac.uk/reader/79127740</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GARCIA, Lara Rocha <em>et al</em>. Lei Geral de Proteção de Dados (LGPD): guia de implantação. Editora Blucher, 2020.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DOURADO, Daniel de Araujo. Regulação da inteligência artificial na saúde. 2024. Tese de Doutorado. Universidade de São Paulo.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DANTAS, Eduardo; NOGAROLI, Rafaella. Consentimento informado do paciente frente às novas tecnologias da saúde: telemedicina, cirurgia robótica e inteligência artificial. DIREITO, p. 13, 2020.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod4: {
		ariaLabel: 'bibliografiaMod4',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 4',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ASSOCIAÇÃO BRASILEIRA DE TELEMEDICINA E TELESSAÚDE. Relatório sobre Telemedicina no Brasil. 2023. Disponível em: <a href='https://www.abtms.org.br/' target='_blank'>https://www.abtms.org.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BANCO MUNDIAL. Relatório sobre Saúde Global. 2020. Disponível em: <a href='https://www.worldbank.org/en/topic/health' target='_blank'>https://www.worldbank.org/en/topic/health</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO GETÚLIO VARGAS. Parcerias Público-Privadas na Saúde. 2021. Disponível em: <a href='https://www.fgv.br/' target='_blank'>https://www.fgv.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FROST & SULLIVAN. Mercado de Saúde Digital no Brasil. 2023. Disponível em: <a href='https://ww2.frost.com/' target='_blank'>https://ww2.frost.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GLOBAL MARKET INSIGHTS. Mercado Global de Saúde Digital. 2024. Disponível em: <a href='https://www.gminsights.com/' target='_blank'>https://www.gminsights.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Pesquisa Nacional de Saúde. 2019a. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Estatísticas de Saúde. 2019b. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. População Quilombola. 2019c. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERNATIONAL DATA CORPORATION. Mercado Global de Dispositivos Vestíveis. 2024. Disponível em: <a href='https://www.idc.com/' target='_blank'>https://www.idc.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MCKINSEY & COMPANY. A IA na Saúde: Economia e Eficiência. 2023. Disponível em: <a href='https://www.mckinsey.com/' target='_blank'>https://www.mckinsey.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Boletim Epidemiológico de Arboviroses. 2022. Disponível em: <a href='https://www.saude.gov.br/' target='_blank'>https://www.saude.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Indicadores de Mortalidade Materna. 2020. Disponível em: <a href='https://www.saude.gov.br/indicadores-de-saude' target='_blank'>https://www.saude.gov.br/indicadores-de-saude</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. COVID-19 Dashboard. 2023. Disponível em: <a href='https://covid19.who.int/' target='_blank'>https://covid19.who.int/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Doenças Crônicas. 2020. Disponível em: <a href='https://www.who.int/chronic_diseases/en/' target='_blank'>https://www.who.int/chronic_diseases/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Envelhecimento e saúde. 2015. Disponível em: <a href='https://www.who.int/ageing/en/' target='_blank'>https://www.who.int/ageing/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Tecnologias em Saúde. 2021. Disponível em: <a href='https://www.who.int/health-topics/technology' target='_blank'>https://www.who.int/health-topics/technology.</li>
</a>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Saúde Mental no Brasil. 2020. Disponível em: <a href='https://www.paho.org/' target='_blank'>https://www.paho.org/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SECRETARIA ESPECIAL DE SAÚDE INDÍGENA. Relatório de Saúde Indígena. 2021. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/sesai' target='_blank'>https://www.gov.br/saude/pt-br/composicao/sesai</a>.</li>
												
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	autorMod1Aula1: {
		ariaLabel: 'autorMod1Aula1',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora-pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias </h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>

				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);
		const createdModalId = document.getElementById(modalId);
		const modalOrigin = btn.getAttribute('data-bs-target').slice(7);
		const hasPropriety = Object.hasOwn(modalInfos, modalOrigin);

		if (!createdModalId && hasPropriety) {
			// console.log('modalOrigin: ' + modalOrigin + ' hasPropriety: ' + hasPropriety);

			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}
